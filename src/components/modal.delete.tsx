import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";

export const DeleteModal = (props: any) => {
  const { isOpenDeleteModal, setIsOpenDeleteModal } = props;
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const closeModal = () => {
    setIsOpenDeleteModal(false);
    setName("");
    setEmail("");
    setId("");
  };
  return (
    <Modal
      show={isOpenDeleteModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setIsOpenDeleteModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Delete the user: {email}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
