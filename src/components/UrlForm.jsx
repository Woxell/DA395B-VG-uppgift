function UrlForm({ handleInputChange }) {
    return (
        <>
            <input id="input" type="text" onChange={handleInputChange} className="form-control" placeholder="Paste image URL here"></input>
        </>
    )
}

export default UrlForm