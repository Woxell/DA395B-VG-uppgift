import { useState } from 'react'
import UploadForm from './UploadForm'
import UrlForm from './UrlForm'

function ImageProcessorSection({ handleInputChange }) {
    const [selectedForm, setSelectedForm] = useState('upload');

    return (
        <>
            <div>
                <input type="radio" id="upload" className="form-check-inline radio-btn" name="formType" value="upload" checked={selectedForm === 'upload'} onChange={(e) => setSelectedForm(e.target.value)} />
                <label htmlFor="upload" className="form-check-label">Upload image file</label>
                <input type="radio" id="url" className="form-check-inline radio-btn" name="formType" value="url" checked={selectedForm === 'url'} onChange={(e) => setSelectedForm(e.target.value)} />
                <label htmlFor="url" className="form-check-label">Image from URL</label>
            </div>
            {selectedForm === 'url' ? <UrlForm handleInputChange={handleInputChange} /> : <UploadForm handleInputChange={handleInputChange} />}
        </>
    )
}

export default ImageProcessorSection