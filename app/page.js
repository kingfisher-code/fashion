import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Price from "./component/Price";
import Contact from "./component/Contact";
import About from "./component/About";
import Work from "./component/Work";

export default function Home() {
  return (
    <div className=" w-full justify-self-center">
      <Navbar />
      <Hero />
      <About />
      <Price />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
