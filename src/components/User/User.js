import Sidebar from "../SideBar/Sidebar";
import HeaderUser from "../Header/HeaderUser";
import "./User.scss";
import { Outlet } from "react-router-dom";

const User = (props) => {
  return (
    <div className="user-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <HeaderUser />
        <div className="user-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default User;
