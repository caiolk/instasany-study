import { SectionCards } from "@/components/SectionCards";
import { SectionHero } from "@/components/SectionHero";

export default function Home() {
  return (
    <div className="container">
      <SectionHero />
      <SectionCards />
    </div>
  );
}
