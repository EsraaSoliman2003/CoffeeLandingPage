import React from "react";
import HeroPhoto from "../assets/HeroPhoto.png";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript, SiBuymeacoffee } from "react-icons/si";
import { TbCoffee } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center px-7 py-10 min-h-screen bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-[.8fr_1.2fr] gap-5 items-center max-w-[1200px] w-full">
        <div className="relative flex items-center justify-center">
          <div className="w-[500px] h-[500px] max-w-full">
            <img
              src={HeroPhoto}
              alt="Coffee cup with heart art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <h1 className="text-[clamp(32px,4vw,56px)] leading-[1.1] mt-[10px] mb-[14px] text-[#2a1b17] font-bold whitespace-pre-line">
            {t("hero_title")}
          </h1>

          <div className="flex items-center gap-3 mt-[18px]">
            <a
              href="#menu"
              className="inline-block text-white font-bold no-underline px-[40px] py-[12px] rounded-[30px] shadow-[0_14px_24px_rgba(91,35,26,0.25)] bg-gradient-to-b from-[#7b3b2e] to-[#5b231a]"
            >
              {t("hero_view_menu")}
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {[SiCoffeescript, TbCoffee, SiBuymeacoffee, GiCoffeeBeans].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="w-14 h-14 bg-[#f2e9e4] rounded-2xl flex items-center justify-center"
                >
                  <Icon className="text-[#5b231a] w-7 h-7" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
