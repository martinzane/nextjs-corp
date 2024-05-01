import Hero from "@/components/hero";
import ScaleImage from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      Scale page
      <Hero
        image={ScaleImage}
        alt="Steel factory"
        title="Scale your app to infinity"
      />
    </div>
  );
}
