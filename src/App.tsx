import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./component/Dashboard";
import About from "./component/About";
import Error404 from "./component/designed_components/Error404";
import CheckPrivilege from "./component/CheckPrivilege";
import Login from "./component/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <CheckPrivilege allowedRoles={["sales", "BDE"]}>
            <Dashboard />
            // </CheckPrivilege>
          }
        />
        <Route
          path="/about"
          element={
            <CheckPrivilege allowedRoles={["SALES","BDE"]}>
              <About />
            </CheckPrivilege>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
