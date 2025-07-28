// TimelineItem.tsx
import { type Galaxy } from "../lib/data";

export const TimelineItem = ({ galaxy }: { galaxy: Galaxy }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative">
    <p className="text-blue-400 text-sm mb-1">
      {galaxy.start_year} – {galaxy.end_year || "Present"}
    </p>
    <h3 className="text-xl font-bold">{galaxy.name}</h3>
    <p className="text-sm text-white/70 mt-2">{galaxy.description}</p>

    {/* Dot marker */}
    <span className="absolute left-1/2 -translate-x-1/2 -top-4 w-4 h-4 bg-blue-600 rounded-full border-2 border-white" />
  </div>
);
