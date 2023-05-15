import EditSnack from "../Components/EditSnack";
import { Container } from "react-bootstrap";

function Edit() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="New Edit">
        <h2 className="text-center">Edit</h2>
        <EditSnack />
      </div>
    </Container>
  );
}

export default Edit;
