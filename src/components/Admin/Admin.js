import HeaderAdmin from "../Header/HeaderAdmin";
import Sidebar from "../SideBar/Sidebar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";

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
    </div>
  );
};

export default Admin;
