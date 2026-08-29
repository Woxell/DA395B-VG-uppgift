import SubmitButton from "./SubmitButton"

function PreviewPanel({ imageSrc, onClick, isProcessing }) {

    return (
        <>
            <div className="image-box">
                {imageSrc ? <img src={imageSrc} alt="Input image" /> : null}
            </div>
            <SubmitButton onClick={onClick} isProcessing={isProcessing} />
        </>
    )
}

export default PreviewPanel