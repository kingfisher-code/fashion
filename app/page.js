import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Price from "./component/Price";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}
