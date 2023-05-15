import { Modal, Button } from "react-bootstrap";

function Error() {
  const handleClose = () => {
    // Handle closing the modal
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Modal show={true} centered>
        <Modal.Body style={{ backgroundColor: "#C9D5AF" }}>
          <h1 className="text-center">Sorry, no page found</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ backgroundColor: "chartreuse", borderColor: "chartreuse", fontFamily: "Funk Gibson" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Error;
