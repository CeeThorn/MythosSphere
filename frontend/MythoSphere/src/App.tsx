import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchBar from "./components/search";
import Navbar from "./components/ui/navbar";
import "./App.css";



function App() {
  return (
 <div>
      <Navbar />         
      <main className=""p-4 >
  <SearchBar />;
      </main>
    </div>
  );
}

export default App;
