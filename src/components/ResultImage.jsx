import DownloadButton from "./DownloadButton"

function ResultImage({ imageSrc }) {

    const download = () => {
        if (!imageSrc) {
            return;
        }

        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'pixelated-image.png';
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <div>
            <div className="image-box">
                <img src={imageSrc} alt="Pixelated result" />
            </div>
            <DownloadButton onClick={download} />
        </div>
    )
}

export default ResultImage