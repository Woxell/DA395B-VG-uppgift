import SubmitButton from "./SubmitButton"

function PreviewPanel({ imageSrc, onClick }) {

    return (
        <>
            <div className="image-box">
                <img src={imageSrc} alt="Input image" />
            </div>
            <SubmitButton onClick={onClick} />
        </>
    )
}

export default PreviewPanel