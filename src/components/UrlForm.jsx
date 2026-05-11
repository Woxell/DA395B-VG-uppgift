function UrlForm({ handleInputChange }) {
    return (
        <>
            <input id="url-input" type="text" onChange={handleInputChange} className="form-control" placeholder="Paste image URL here" />
        </>
    )
}

export default UrlForm