import React from "react";
import HeroPhoto from "../assets/HeroPhoto.png";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript, SiBuymeacoffee } from "react-icons/si";
import { TbCoffee } from "react-icons/tb";

export default function Hero() {
  return (
    <section
      className="
        flex items-center justify-center
        px-7 py-10
        min-h-screen
        bg-transparent
      "
    >
      <div
        className="
          grid grid-cols-1 md:grid-cols-[1.2fr_.8fr]
          gap-5 items-center
          max-w-[1200px] w-full
        "
      >
        {/* النص */}
        <div>
          <h1
            className="
              text-[clamp(32px,4vw,56px)]
              leading-[1.1]
              mt-[10px] mb-[14px]
              text-[#2a1b17] font-bold
            "
          >
            Coffee
            <br />
            The Best For You
          </h1>

          {/* الزر */}
          <div className="flex items-center gap-3 mt-[18px]">
            <a
              href="#menu"
              className="
                inline-block
                text-white font-bold no-underline
                px-[40px] py-[12px] rounded-[30px]
                shadow-[0_14px_24px_rgba(91,35,26,0.25)]
                bg-gradient-to-b from-[#7b3b2e] to-[#5b231a]
              "
            >
              View Menu
            </a>
          </div>

          {/* الأيقونات */}
          <div className="flex gap-4 mt-8">
            <div className="w-14 h-14 bg-[#f2e9e4] rounded-2xl flex items-center justify-center">
              <SiCoffeescript className="text-[#5b231a] w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-[#f2e9e4] rounded-2xl flex items-center justify-center">
              <TbCoffee className="text-[#5b231a] w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-[#f2e9e4] rounded-2xl flex items-center justify-center">
              <SiBuymeacoffee className="text-[#5b231a] w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-[#f2e9e4] rounded-2xl flex items-center justify-center">
              <GiCoffeeBeans className="text-[#5b231a] w-7 h-7" />
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative flex items-center justify-center">
          <div className="w-[500px] h-[500px] max-w-full">
            <img
              src={HeroPhoto}
              alt="Coffee cup with heart art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
