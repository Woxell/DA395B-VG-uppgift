import { useState } from 'react'
import $ from 'jquery'
import './App.css'
import { Alert } from 'react-bootstrap'
import Header from './components/Header'
import ImageProcessorSection from './components/ImageProcessorSection'
import PreviewPanel from './components/PreviewPanel'
import ResultImage from './components/ResultImage'

function App() {
  const baseURL = "https://api.apilayer.com/face_pixelizer";
  const apiKey = import.meta.env.VITE_APILAYER_API_KEY;

  const [imageSrc, setImageSrc] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [sourceFile, setSourceFile] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

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
    if (!apiKey) {
      console.error("Missing API key: set API_KEY in .env");
      return;
    }
    if (!sourceFile && !imageSrc) {
      setAlert({ show: true, message: "Add an image URL or upload a file before pixelating.", variant: "warning" });
      return;
    }
    try {
      setAlert({ show: false });
      if (sourceFile) {
        const result = await $.ajax({
          url: `${baseURL}/upload`,
          method: "POST",
          headers: { apikey: apiKey },
          data: sourceFile,
          processData: false,
          contentType: sourceFile.type || "application/octet-stream",
          dataType: "json"
        });
        setResultUrl(result.result || "");
      }
      else if (imageSrc) {
        console.log("imageSrc truthy: " + imageSrc);
        const result = await $.ajax({
          url: `${baseURL}/url`,
          method: "GET",
          data: { url: imageSrc },
          headers: { apikey: apiKey },
          dataType: "json"
        });
        console.log(result);
        setResultUrl(result.result || "");
      }
    } catch (error) {
      console.error(error);
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
            <PreviewPanel imageSrc={imageSrc} onClick={pixelate} />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex">
          <div className="w-100">
            <ResultImage imageSrc={resultUrl} onEmptyDownload={handleEmptyDownload} />
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
