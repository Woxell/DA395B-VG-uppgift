import { useState } from 'react'
import './App.css'
import { Alert } from 'react-bootstrap'
import Header from './components/Header'
import ImageProcessorSection from './components/ImageProcessorSection'
import PreviewPanel from './components/PreviewPanel'
import ResultImage from './components/ResultImage'

function App() {
  const baseURL = "https://api.eu.apyhub.com/apyhub/pixelize";
  const apiKey = import.meta.env.VITE_APYHUB_API_KEY;

  const [imageSrc, setImageSrc] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [sourceFile, setSourceFile] = useState(null);
  const [downloadBlob, setDownloadBlob] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result || "");
      };
      reader.readAsDataURL(file);
      setSourceFile(file);
    } else if (e.target.value.trim()) {
      setImageSrc(e.target.value);
      setSourceFile(null);
    }
  };

  const pixelate = async () => {
    if (isProcessing) {
      return;
    }
    if (!apiKey) {
      console.error("Missing API key: set API_KEY in .env");
      return;
    }
    if (!sourceFile && !imageSrc) {
      setAlert({ show: true, message: "Add an image URL or upload a file before pixelating.", variant: "warning" });
      return;
    }

    if (resultUrl.startsWith("blob:")) {
      URL.revokeObjectURL(resultUrl);
    }

    try {
      setIsProcessing(true); //Antons önskade tillägg, att man ser att nånting händer
      setAlert({ show: false });

      let blob = null;

      if (sourceFile) {
        const formData = new FormData();
        formData.append("file", sourceFile, sourceFile.name);

        const response = await fetch(`${baseURL}/file`, {
          method: "POST",
          headers: {
            "apy-token": apiKey,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(response.status.toString());
        }

        blob = await response.blob();
      }
      else if (imageSrc) {
        const response = await fetch(`${baseURL}/url/download`, {
          method: "POST",
          headers: {
            "apy-token": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_url: imageSrc,
          }),
        });

        if (!response.ok) {
          throw new Error(response.status.toString());
        }

        blob = await response.blob();
      }

      if (!blob) {
        return;
      }

      setDownloadBlob(blob);
      setResultUrl(URL.createObjectURL(blob));

    } catch (error) {
      console.error(error);

      const status = error.message || "";
      const message = status.includes("429")
        ? "API rate limit upnådd, återställs vid midnatt..."
        : "The image could not be pixelated.";

      setAlert({ show: true, message, variant: "danger" });
      setResultUrl("");
    } finally {
      setIsProcessing(false);
    }
  }

  const handleEmptyDownload = () => {
    setAlert({ show: true, message: "No pixelated image available to download.", variant: "danger" });
  };

  return (
    <div className="container">
      <Header />
      <ImageProcessorSection handleInputChange={handleInputChange} />
      <hr />

      <div className="row g-3">
        <div className="col-12 col-md-6 d-flex">
          <div className="w-100">
            <PreviewPanel imageSrc={imageSrc} onClick={pixelate} isProcessing={isProcessing} />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex">
          <div className="w-100">
            <ResultImage imageSrc={resultUrl} downloadBlob={downloadBlob} onEmptyDownload={handleEmptyDownload} />
          </div>
        </div>
      </div>

      {alert.show ? (
        <Alert variant={alert.variant} className="mt-4" role="alert">
          {alert.message}
        </Alert>
      ) : null}
    </div>
  )
}

export default App
