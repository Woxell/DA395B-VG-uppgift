import { useState } from 'react'
import $ from 'jquery'
import './App.css'
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

  const handleInputChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result || "");
      };
      reader.readAsDataURL(file);
      setImageSrc("");
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

    try {
      if (imageSrc) {
        const result = await $.ajax({
          url: `${baseURL}/url`,
          method: "GET",
          data: { url: imageSrc },
          headers: { apikey: apiKey },
          dataType: "json"
        });
        setImageSrc(""); //Should clear the PreviewPanel
        setResultUrl(result.result || ""); //Should render ResultImage
        //clear #input
      }

      if (sourceFile) {
        const formData = new FormData();
        formData.append("file", sourceFile);

        const result = await $.ajax({
          url: `${baseURL}/upload`,
          method: "POST",
          headers: { apikey: apiKey },
          data: formData,
          processData: false,
          contentType: false,
          dataType: "json"
        });
        setResultUrl(result.result || "");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <Header />
      <ImageProcessorSection handleInputChange={handleInputChange} />
      <hr />
      <PreviewPanel imageSrc={imageSrc} onClick={pixelate} />
      <ResultImage imageSrc={resultUrl} />

    </div>
  )
}

export default App
