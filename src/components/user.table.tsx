import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { use, useEffect, useState } from "react";

import Button from "react-bootstrap/Button";

import { CreateModal } from "./modal.create";
import { UpdateModal } from "./modal.update";
import { DeleteModal } from "./modal.delete";

const UsersTable = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Table User</h2>
        <Button
          variant="primary"
          onClick={() => {
            setIsOpenCreateModal(true);
          }}
        >
          Create User
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          <tr>
            <td>1</td>
            <td>minh@gmail.com</td>
            <td>nghiem minh</td>
            <td>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => {
                  setIsOpenUpdateModal(true);
                  
                }}
              >
                Update
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setIsOpenDeleteModal(true);
                  
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <CreateModal
        isOpenCreateModal={isOpenCreateModal}
        setIsOpenCreateModal={setIsOpenCreateModal}
      />
      <UpdateModal
        
        isOpenUpdateModal={isOpenUpdateModal}
        setIsOpenUpdateModal={setIsOpenUpdateModal}
      />
      <DeleteModal
        
        isOpenDeleteModal={isOpenDeleteModal}
        setIsOpenDeleteModal={setIsOpenDeleteModal}
      />
    </>
  );
};

export default UsersTable;
