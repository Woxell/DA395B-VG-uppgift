import { Button } from "react-bootstrap"

function SubmitButton({ onClick, isProcessing }) {
    return (
        <Button className="btn btn-lg w-100" onClick={onClick} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Pixelate!"}
        </Button>
    )
}
export default SubmitButton