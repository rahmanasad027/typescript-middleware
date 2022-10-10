import React from "react";
import AllRiders from "./components/AllRiders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Hello from "./components/Hello";
import File from "./components/File";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/allRiders" element={<AllRiders />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/file" element={<File />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
