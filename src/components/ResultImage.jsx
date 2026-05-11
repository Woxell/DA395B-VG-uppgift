import DownloadButton from "./DownloadButton"

function ResultImage({ imageSrc }) {


    return (
        <div>
            <div className="image-box">
                <img src={imageSrc} alt="Pixelated result" />
            </div>
            <DownloadButton />
        </div>
    )
}

export default ResultImage