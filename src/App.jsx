import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import AboutFeatured from "./components/AboutFeatured.jsx";
import AppShowcase from "./components/AppShowcase.jsx";
import CTAReserve from "./components/CTAReserve.jsx";
import Footer from "./components/Footer.jsx";

// 👇 استيراد الصورة من مجلد assets
import bg from "./assets/bg.jpg";

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* طبقة شفافة خفيفة فوق الخلفية (اختياري) */}
      <div className="bg-black/100 min-h-screen w-full">
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
