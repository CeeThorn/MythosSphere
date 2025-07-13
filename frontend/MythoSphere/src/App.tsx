import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchBar from "./components/search";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Multiverse from "./components/multiverse";
import "./App.css";
import TopBar from "./components/topbar";

function App() {
  return (
    <Router>
      <TopBar />
      
      <main className="p-4">
        
        <Routes>
          <Route path="/search" element={<SearchBar />} />   
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
