import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./component/Dashboard";
import About from "./component/About";
import Error404 from "./component/designed_components/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  );
}

export default App;
