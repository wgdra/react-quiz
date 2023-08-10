import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Admin/Content/Dasboard";
import ManageUser from "./components/Admin/Content/ManageUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailQuiz from "./components/User/ManageQuiz/DetailQuiz";
import ListQuiz from "./components/User/ManageQuiz/ListQuiz";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found Data</h1>
    </div>
  );
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/user" element={<User />}>
            <Route path="list-quiz" element={<ListQuiz />} />
            <Route path="quiz/:id" element={<DetailQuiz />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="manage-user" element={<ManageUser />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

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
    </>
  );
};

export default Router;
