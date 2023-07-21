import HeaderAdmin from "../Header/HeaderAdmin";
import Sidebar from "../SideBar/Sidebar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <HeaderAdmin />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Admin;
