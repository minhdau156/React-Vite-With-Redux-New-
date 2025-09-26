import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export const UpdateModal = (props: any) => {
  const { isOpenUpdateModal, setIsOpenUpdateModal } = props;
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const closeModal = () => {
    setIsOpenUpdateModal(false);
    setName("");
    setEmail("");
    setId("");
  };
  return (
    <Modal
      show={isOpenUpdateModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setIsOpenUpdateModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingName" label="Full Name">
          <Form.Control
            type="text"
            placeholder="Full Name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
