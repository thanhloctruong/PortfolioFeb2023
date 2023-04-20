import About from "@/components/about/about";
import Carousel from "@/components/carousel/Carousel";
import Contact from "@/components/contact/Contact";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Introduce />
              <About />
              <Skill />
              <Contact />
    </>
  );
}
