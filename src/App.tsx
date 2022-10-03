import React from "react";
import AllRiders from "./components/AllRiders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/allRiders" element={<AllRiders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
