import React from "react";
import HeroPhoto from "../assets/HeroPhoto.png";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript, SiBuymeacoffee } from "react-icons/si";
import { TbCoffee } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center px-6 py-10 min-h-screen bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[500px]">
            <img
              src={HeroPhoto}
              alt="Coffee cup with heart art"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[clamp(32px,4vw,56px)] leading-[1.1] mt-4 mb-4 text-primary font-bold whitespace-pre-line">
            {t("hero_title")}
          </h1>

          <a
            href="#menu"
            className="inline-block text-white font-bold no-underline px-8 md:px-10 py-3 rounded-[30px] shadow-hard bg-gradient-to-b from-accent to-accentDark transition-colors duration-normal"
          >
            {t("hero_view_menu")}
          </a>

          <div className="flex flex-wrap gap-4 mt-6">
            {[SiCoffeescript, TbCoffee, SiBuymeacoffee, GiCoffeeBeans].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="w-14 h-14 bg-bgLight rounded-2xl flex items-center justify-center"
                >
                  <Icon className="text-accentDark w-7 h-7" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
