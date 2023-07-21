import { useEffect, useState } from "react";
import { getDataUser } from "../../../services/apiService";
import "../Admin.scss";
import ModalAddUser from "./ModalAddUser";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManagerUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [dataView, setDataView] = useState({});
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getDataUser();

    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  //Handle
  const handleShowViewUser = (item) => {
    setShowViewModal(true);
    setDataView(item);
  };

  const handleShowUpdateUser = (item) => {
    setShowUpdateModal(true);
    setDataUpdate(item);
  };

  const handleShowDeleteUser = () => {
    setShowDeleteModal(true);
  };

  const resetDataUpdate = () => {
    setDataUpdate({});
  };

  return (
    <div className="manager-user">
      <div className="button-container">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Thêm Tài Khoản
        </button>
      </div>
      <div className="table-user">
        <TableUser
          listUser={listUser}
          setListUser={setListUser}
          handleShowUpdateUser={handleShowUpdateUser}
          handleShowViewUser={handleShowViewUser}
          handleShowDeleteUser={handleShowDeleteUser}
        />
      </div>
      <ModalAddUser
        show={showModal}
        setShow={setShowModal}
        fetchListUser={fetchListUser}
      />

      <ModalViewUser
        show={showViewModal}
        setShow={setShowViewModal}
        dataView={dataView}
      />

      <ModalUpdateUser
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        dataUpdate={dataUpdate}
        fetchListUser={fetchListUser}
        resetDataUpdate={resetDataUpdate}
      />

      <ModalDeleteUser show={showDeleteModal} setShow={setShowDeleteModal} />
    </div>
  );
};

export default ManagerUser;
