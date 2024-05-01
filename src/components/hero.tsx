import Image, { StaticImageData } from "next/image";

interface HeroProps {
  image: StaticImageData;
  alt: string;
  title: string;
}

export default function Hero({ image, alt, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>

      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
