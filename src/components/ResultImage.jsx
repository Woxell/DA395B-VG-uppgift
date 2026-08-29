import DownloadButton from "./DownloadButton"

function ResultImage({ imageSrc, downloadBlob, onEmptyDownload }) {

    const download = () => {
        const blobUrl = downloadBlob ? URL.createObjectURL(downloadBlob) : imageSrc;

        if (!blobUrl) {
            onEmptyDownload?.();
            return;
        }

        const link = document.createElement('a');
        link.href = blobUrl;

        const extension = downloadBlob?.type?.split('/')[1] || 'png';
        link.download = `pixelated-image.${extension}`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        if (downloadBlob) {
            setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
        }
    };

    return (
        <div>
            <div className="image-box">
                {imageSrc ? <img src={imageSrc} alt="Pixelated result" /> : null}
            </div>
            <DownloadButton onClick={download} />
        </div>
    )
}

export default ResultImage