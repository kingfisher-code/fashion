import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
