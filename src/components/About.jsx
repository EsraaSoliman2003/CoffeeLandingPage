import React from "react";
import AppPhoto1 from "../assets/AppPhoto1.png";
import AppPhoto2 from "../assets/AppPhoto2.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-[2fr_1fr]
        gap-6 md:gap-10 items-center
        rounded-[28px] p-6 md:p-8
      "
    >
      <div className="relative flex items-center justify-center gap-6 mb-10">
        <div className="w-[45%] md:w-[40%] -translate-y-6 md:-translate-y-10">
          <img
            src={AppPhoto1}
            alt={t("about_title")}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover rounded-[26px]"
          />
        </div>

        <div className="w-[45%] md:w-[40%] translate-y-6 md:translate-y-10">
          <img
            src={AppPhoto2}
            alt={t("about_title")}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover rounded-[26px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">
          {t("about_title")}
        </h3>

        <p className="text-secondary mt-3 leading-relaxed">{t("about_desc")}</p>

        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <a
            href="#app-store"
            className="
              inline-flex items-center gap-2
              px-4 py-3 rounded-[30px] font-semibold no-underline
              text-white
              bg-gradient-to-b from-accent to-accentDark
              shadow-[hard]
              hover:opacity-90 transition
            "
          >
            <FaApple className="w-5 h-5" />
            {t("app_store")}
          </a>

          <a
            href="#google-play"
            className="
              inline-flex items-center gap-2
              px-4 py-3 rounded-[30px] font-semibold no-underline
              text-white
              bg-gradient-to-b from-accent to-accentDark
              shadow-[hard]
              hover:opacity-90 transition
            "
          >
            <FaGooglePlay className="w-5 h-5" />
            {t("google_play")}
          </a>
        </div>
      </div>
    </section>
  );
}
