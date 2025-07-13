import { useState } from "react";
<<<<<<< HEAD
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
=======
import { UniverseSelector } from "./components/universe/UniverseSelector";
import { GalaxySelector } from "./components/galaxy/GalaxySelector";
import { type Universe, universes } from "./lib/data";
import SearchBar from "./components/search";
import "./App.css";
>>>>>>> 499254c690fb39a0f23599e784a02f225fe27e19

function App() {
  const [selectedUniverse, setSelectedUniverse] = useState<Universe | null>(
    null
  );
  const handleUniverseSelect = (universe: Universe) => {
    setSelectedUniverse(universe);
  };
  const handleGoBack = () => {
    setSelectedUniverse(null);
  };
  return (
<<<<<<< HEAD
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
=======
    <div>
      {!selectedUniverse ? (
        <UniverseSelector
          universes={universes}
          onSelectUniverse={handleUniverseSelect} // Pass the function as a prop
        />
      ) : (
        <GalaxySelector universe={selectedUniverse} onBack={handleGoBack} />
      )}
    </div>
>>>>>>> 499254c690fb39a0f23599e784a02f225fe27e19
  );
}

export default App;
