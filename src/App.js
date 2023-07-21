import Header from "./components/Header/Header";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
