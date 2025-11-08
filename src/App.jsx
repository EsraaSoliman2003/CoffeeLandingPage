import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import AboutFeatured from "./components/AboutFeatured.jsx";
import AppShowcase from "./components/AppShowcase.jsx";
import CTAReserve from "./components/CTAReserve.jsx";
import Footer from "./components/Footer.jsx";
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
      <div
        className="min-h-screen w-full"
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="wrap">
          <Navbar />
          <Hero />
          <Menu />
          <AboutFeatured />
          <AppShowcase />
          <CTAReserve />
          <Footer />
        </div>
      </div>
    </div>
  );
}
