import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";

const ModalViewUser = (props) => {
  const { show, setShow, dataUser } = props;

  const handleClose = () => {
    setShow(false);
  };

  // if (dataUser.image) {
  //   // setPreviewImage(`data:image/jpeg;base64,${dataUser.image}`);
  // }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thông Tin Tài Khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", marginBottom: "8px" }}>
            <h5 style={{ marginRight: "16px" }}>Email:</h5>
            <b style={{ fontSize: "18px" }}>{dataUser.email}</b>
          </div>
          <div style={{ display: "flex", marginBottom: "8px" }}>
            <h5 style={{ marginRight: "16px" }}>Tên:</h5>
            <b style={{ fontSize: "18px" }}>
              {dataUser && dataUser.username ? dataUser.username : ""}
            </b>
          </div>
          <div style={{ display: "flex", marginBottom: "8px" }}>
            <h5 style={{ marginRight: "16px" }}>Tài Khoản:</h5>
            <b style={{ fontSize: "18px" }}>
              {dataUser && dataUser.role ? dataUser.role : ""}
            </b>
          </div>
          <div>
            <h5>Avatar:</h5>
            <img
              src={
                dataUser.image
                  ? `data:image/jpeg;base64,${dataUser.image}`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_of_none.svg/200px-Image_of_none.svg.png`
              }
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
