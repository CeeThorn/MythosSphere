import { useState } from "react";
import { UniverseSelector } from "./components/universe/UniverseSelector";
import { GalaxySelector } from "./components/galaxy/GalaxySelector";
import { TimelinePage } from "./components/timeline/TimelinePage";
import type { Galaxy, Universe } from "./API/Flask_API";
import { AnimatePresence } from "framer-motion";
import SearchBar from "./components/search";
import "./App.css";

function App() {
  const [selectedUniverse, setSelectedUniverse] = useState<Universe | null>(
    null
  );
  const [selectedTimeline, setSelectedTimeline] = useState<Galaxy | null>(null); //
  const handleUniverseSelect = (universe: Universe) => {
    setSelectedUniverse(universe);
  };
  const handleGoBack = () => {
    setSelectedUniverse(null);
  };

  const handleTimelineSelect = (galaxy: Galaxy) => {
    setSelectedTimeline(galaxy);
  };

  const handleTimelineBack = () => {
    setSelectedTimeline(null);
  };

  return (
    <div>
      <AnimatePresence>
        {/* If a timeline is selected, show the TimelinePage */}
        {selectedTimeline ? (
          <TimelinePage
            key="timeline"
            galaxy={selectedTimeline}
            onBack={handleTimelineBack}
          />
        ) : /* If a universe is selected (but not a timeline), show the GalaxySelector */
        selectedUniverse ? (
          <GalaxySelector
            universe={selectedUniverse}
            onBack={handleGoBack}
            onTimelineSelect={handleTimelineSelect}
          />
        ) : (
          /* Otherwise, show the UniverseSelector */
          <UniverseSelector onSelectUniverse={handleUniverseSelect} />
        )}
      </AnimatePresence>
    </div>
  );
}
export default App;
