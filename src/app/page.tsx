import Hero from "@/components/hero";
import HomeImage from "public/home.jpg";

export default function HomePage() {
  return (
    <div>
      <Hero
        image={HomeImage}
        alt="Car factory"
        title="Professional Cloud Hostings"
      />
    </div>
  );
}
