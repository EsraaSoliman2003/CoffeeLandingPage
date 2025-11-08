import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/logo.png";

const linkBase =
  "relative no-underline text-[#2a1b17] font-semibold " +
  "opacity-85 hover:opacity-100 transition-colors " +
  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
  "after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full";

function NavA({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${linkBase} ${active ? "opacity-100 after:w-full" : ""}`}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("top");

  const handleSmooth = useCallback((e, id) => {
    if (!id?.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(id === "#/" ? "#top" : id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const ids = ["top", "menu", "about", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex flex-col items-start font-bold text-[#2a1b17] leading-[1.1]">
          <div className="flex items-center gap-[6px] text-[1.5rem]">
            <span>Flavored</span>
            <img
              src={logo}
              alt="logo"
              className="w-7 h-7 object-contain inline-block align-middle"
            />
          </div>
          <small className="text-sm font-normal text-[#5e4a42] mt-[-2px]">
            Wake up to something special
          </small>
        </div>

        <nav className="flex items-center gap-[18px]">
          <NavA
            href="#top"
            label="Home"
            active={active === "top"}
            onClick={(e) => handleSmooth(e, "#top")}
          />
          <NavA
            href="#menu"
            label="Coffee Menu"
            active={active === "menu"}
            onClick={(e) => handleSmooth(e, "#menu")}
          />
          <NavA
            href="#about"
            label="About Us"
            active={active === "about"}
            onClick={(e) => handleSmooth(e, "#about")}
          />
          <NavA
            href="#contact"
            label="Contact Us"
            active={active === "contact"}
            onClick={(e) => handleSmooth(e, "#contact")}
          />

          <a
            href="#shop"
            className="bg-[#300301] text-white px-[18px] py-[10px] rounded-full font-semibold shadow-[0_10px_18px_rgba(91,35,26,0.25)] hover:opacity-90"
          >
            Coffee Shop
          </a>
        </nav>
      </div>
    </header>
  );
}
