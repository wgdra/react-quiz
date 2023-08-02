import Sidebar from "../SideBar/Sidebar";
import HeaderUser from "../Header/HeaderUser";
import "./User.scss";
import ListQuiz from "./ListQuiz";

const User = (props) => {
  return (
    <div className="user-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <HeaderUser />
        <div className="user-content">
          <ListQuiz />
        </div>
      </div>
    </div>
  );
};

export default User;
