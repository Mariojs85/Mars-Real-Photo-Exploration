import React from "react";
import "./App.scss";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specials from "./pages/specials/specials";
import Roverphoto from "./pages/roverPhoto/roverPhoto";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <hr style={{ borderColor: "white" }} />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/roverPhoto" element={<Roverphoto />} />
            <Route path="/roverPhoto/:rover" element={<Roverphoto />} />
            <Route path="specials" element={<Specials />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
