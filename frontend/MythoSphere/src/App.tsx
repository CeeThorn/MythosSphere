// App.tsx
import UniverseDetails from "./components/universe/UniverseDetails";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { UniverseSelector } from "./components/universe/UniverseSelector";
import { GalaxySelector } from "./components/galaxy/GalaxySelector";
import { type Universe, universes } from "./lib/data";
import SearchBar from "./components/search";
import TimelinePage from "./components/TimelinePage"; 
import "./App.css";

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
    <Router>
      <Routes>
        {/* Route for the Timeline Page */}
        <Route path="/timeline/:galaxyId" element={<TimelinePage />} />

        {/* Main App Route */}
        <Route
          path="/"
          element={
            <div>
              {/* If no universe is selected, show the universe selector */}
              {!selectedUniverse ? (
                <UniverseSelector
                  universes={universes}
                  onSelectUniverse={handleUniverseSelect} // ✅ Pass the function as a prop
                />
              ) : (
                // If a universe is selected, show the galaxy selector
                <GalaxySelector
                  universe={selectedUniverse}
                  onBack={handleGoBack}
                />
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
