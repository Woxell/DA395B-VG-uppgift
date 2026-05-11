import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ImageProcessorSection from './components/ImageProcessorSection'
import PreviewPanel from './components/PreviewPanel'
import ResultImage from './components/ResultImage'

function App() {
  const [sourceExist, setSourceExists] = useState(false)
  const [imageSrc, setImageSrc] = useState("")

  const handleInputChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setSourceExists(true);
      };
      reader.readAsDataURL(file);
    } else if (e.target.value.trim()) {
      setImageSrc(e.target.value);
      setSourceExists(true);
    } else {
      setSourceExists(true);
    }
  };

  return (
    <div className="container">
      <Header />
      <ImageProcessorSection handleInputChange={handleInputChange} />
      <hr />
      {sourceExist ? <PreviewPanel imageSrc={imageSrc} /> : <ResultImage />}

    </div>
  )
}

export default App
