import Spinner from "react-bootstrap/Spinner";

export default function Loader({ height = "70vh" }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center py-3"
      style={{ minHeight: height }}
    >
      <Spinner animation="border" variant="info" />
    </div>
  );
}
