import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./component/Dashboard";
import About from "./component/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
