function UploadForm({ handleInputChange }) {
    return (
        <>
            <input id="input" type="file" onChange={handleInputChange} className="form-control"></input>
        </>
    )
}

export default UploadForm