import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaGem, FaRegLaughWink, FaBookReader } from "react-icons/fa";
import { BsLayoutTextSidebar } from "react-icons/bs";
import "./Sidebar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sidebar-container">
      <ProSidebar
        collapsed={collapsed}
        // toggled={toggled}
        // breakPoint="md"
        // onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <div
              className="sidebar-header"
              onClick={() => setCollapsed(!collapsed)}
            >
              <FaBookReader className="sidebar-header__icon"></FaBookReader>
              <span></span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<BsLayoutTextSidebar />}
              suffix={<span className="badge">New</span>}
            >
              Dashboard
              <Link to="/admin" />
            </MenuItem>
            <MenuItem icon={<FaGem />}> Components </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge">3</span>}
              icon={<FaRegLaughWink />}
              title="Quản Lý"
            >
              <MenuItem>
                Quản lý tài khoản
                <Link to="/admin/manager-user" />
              </MenuItem>
              <MenuItem>Quản lý câu hỏi</MenuItem>
              <MenuItem>Quản lý bài tập</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          ></div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
export default Sidebar;
