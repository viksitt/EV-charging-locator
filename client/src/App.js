
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StationDetails from "./components/StationDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/station/:id" element={<StationDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
