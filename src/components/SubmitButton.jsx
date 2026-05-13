import { Button } from "react-bootstrap"

function SubmitButton({ onClick }) {
    return (
        <Button className="btn btn-lg w-100" onClick={onClick}>Pixelate!</Button>
    )
}
export default SubmitButton