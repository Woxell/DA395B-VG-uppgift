import SubmitButton from './SubmitButton'

function PreviewPanel({ imageSrc }) {

    return (
        <>
            <div id="img-frame">
                <img src={imageSrc} alt="Input image" />
            </div>
            <SubmitButton />
        </>
    )
}

export default PreviewPanel