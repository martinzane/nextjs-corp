import Hero from "@/components/hero";
import PerformanceImage from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      Performance page
      <Hero
        image={PerformanceImage}
        alt="Welding"
        title="We serve high performance applications"
      />
    </div>
  );
}
