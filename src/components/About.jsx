import React from "react";
import AppPhoto1 from "../assets/AppPhoto1.png";
import AppPhoto2 from "../assets/AppPhoto2.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-[2fr_1fr]
        gap-6 md:gap-10 items-center
        rounded-[28px] p-6 md:p-8
      "
    >
      {/* 2/3: الصور */}
      <div className="relative flex items-center justify-center gap-6">
        {/* الصورة الأولى (طالعة لفوق) */}
        <div className="w-[45%] md:w-[40%] -translate-y-6 md:-translate-y-10 drop-shadow-xl">
          <img
            src={AppPhoto1}
            alt="App screen 1"
            className="w-full h-auto object-cover rounded-[26px]"
          />
        </div>

        {/* الصورة الثانية (نازلة لتحت) */}
        <div className="w-[45%] md:w-[40%] translate-y-6 md:translate-y-10 drop-shadow-xl">
          <img
            src={AppPhoto2}
            alt="App screen 2"
            className="w-full h-auto object-cover rounded-[26px]"
          />
        </div>
      </div>

      {/* 1/3: النص والأزرار */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#2a1b17]">
          App is Available
        </h3>

        <p className="text-[#5e4a42] mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reiciendis facere, debitis sapiente tempora excepturi, cupiditate
          libero mollitia autem aliquam quos voluptas voluptatum nisi. Nihil
          deleniti architecto aliquam fuga aperiam.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#app-store"
            className="
              inline-flex items-center gap-2
              px-4 py-3 rounded-[30px] font-semibold no-underline
              text-white
              bg-gradient-to-b from-[#7b3b2e] to-[#5b231a]
              shadow-[0_14px_24px_rgba(91,35,26,0.25)]
              hover:opacity-90 transition
            "
          >
            <FaApple className="w-5 h-5" />
            App Store
          </a>

          <a
            href="#google-play"
            className="
              inline-flex items-center gap-2
              px-4 py-3 rounded-[30px] font-semibold no-underline
              text-white
              bg-gradient-to-b from-[#7b3b2e] to-[#5b231a]
              shadow-[0_14px_24px_rgba(91,35,26,0.25)]
              hover:opacity-90 transition
            "
          >
            <FaGooglePlay className="w-5 h-5" />
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
