import { useState } from "react";
import { UniverseSelector } from "./components/universe/UniverseSelector";
import { GalaxySelector } from "./components/galaxy/GalaxySelector";
import { type Universe, universes } from "./lib/data";
import SearchBar from "./components/search";
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
  );
}

export default App;
