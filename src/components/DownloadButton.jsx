import { Button } from "react-bootstrap"

function DownloadButton({ onClick }) {
    return (
        <Button className="btn btn-lg w-100" onClick={onClick}>Download!</Button>
    )
}
export default DownloadButton

