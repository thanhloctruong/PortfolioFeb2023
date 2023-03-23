import About from "@/components/about/about";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/footer";
import Introduce from "@/components/introduce/Introduce";
import NavHeader from "@/components/navbar/nav";
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
