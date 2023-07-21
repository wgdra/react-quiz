import { useState } from "react";
import { deleteDataUser } from "../../../services/apiService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalDeleteUser = (props) => {
  const { show, setShow } = props;

  // Validate

  // Handle
  const handleClose = () => {
    setShow(false);
  };

  const handleDeleteUser = async () => {
    handleClose();
    toast.success("Đã xóa tài khoản");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Xóa Tài Khoản ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="btn btn-secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="btn btn-danger" onClick={() => handleDeleteUser()}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
