// TimelineAnimated.tsx
import { useInView } from "react-intersection-observer";
import { type Galaxy } from "../lib/data";
import { TimelineItem } from "../components/TimelineItem";

interface Props {
  galaxy: Galaxy;
}

export const TimelineItemAnimated = ({ galaxy }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform max-w-[45%] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <TimelineItem galaxy={galaxy} />
    </div>
  );
};
