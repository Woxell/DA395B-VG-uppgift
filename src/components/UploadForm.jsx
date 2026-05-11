function UploadForm({ handleInputChange }) {
    return (
        <>
            <input id="upload-input" type="file" onChange={handleInputChange} className="form-control" />
        </>
    )
}

export default UploadForm