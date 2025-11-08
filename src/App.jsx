import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import bg from "./assets/bg.jpg";

export default function App() {

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <div
        className="min-h-screen w-full"
        style={{
          background: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="wrap">
          <div id="top" className="">
            <Hero />
          </div>

          <div id="menu" className="pt-[50px] md:pt-[70px]">
            <Menu />
          </div>

          <div id="about" className="pt-[140px] md:pt-[160px]">
            <About />
          </div>

          <div id="contact" className="pt-[140px] md:pt-[160px]">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
