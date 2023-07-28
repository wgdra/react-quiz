import { useState } from "react";
import { deleteDataUser } from "../../../services/apiService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete, fetchListUser } = props;

  // Validate

  // Handle
  const handleClose = () => {
    setShow(false);
  };

  const handleDeleteUser = async () => {
    let data = await deleteDataUser(dataDelete.id);

    if (data && data.EC !== 0) {
      return toast.error("Lỗi");
    } else {
      handleClose();
      toast.success("Đã xóa tài khoản");
      fetchListUser();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="700px" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Xóa Tài Khoản ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>
            Bạn muốn xóa tài khoản có Email{" "}
            <p style={{ color: "var(--primary)" }}>
              {dataDelete && dataDelete.email ? dataDelete.email : ""}
            </p>
          </Modal.Title>
        </Modal.Body>
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
