import SubmitButton from "./SubmitButton"

function PreviewPanel({ imageSrc, onClick }) {

    return (
        <>
            <div className="image-box">
                {imageSrc ? <img src={imageSrc} alt="Input image" /> : null}
            </div>
            <SubmitButton onClick={onClick} />
        </>
    )
}

export default PreviewPanel