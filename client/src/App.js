import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update" element={<Update/>} />
          {/* Replace <YourComponent /> with the actual component you want to render */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
