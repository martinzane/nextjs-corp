import Hero from "@/components/hero";
import ReliabilityImage from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        image={ReliabilityImage}
        alt="Welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
