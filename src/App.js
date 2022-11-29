import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import About from "./Pages/About";

export default function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="Data">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </div>
    </Router>
  )

}