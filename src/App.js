import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./component/data/Data";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/7G3SBTXVCD83E3T" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
