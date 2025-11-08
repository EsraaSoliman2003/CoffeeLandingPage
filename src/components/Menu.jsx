import React from "react";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { useTranslation } from "react-i18next";

import MenuPhoto1 from "../assets/MenuPhoto1.png";
import MenuPhoto2 from "../assets/MenuPhoto2.png";
import cupCoffee from "../assets/cupCoffee.png";
import bgPhoto from "../assets/bgPhoto.png";

function DrinkCard({ img, titleKey, descKey, price }) {
  const { t } = useTranslation();
  return (
    <article className="relative bg-white/40 rounded-[26px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] px-6 pb-8 pt-20 overflow-visible text-center">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full">
          <img
            src={img}
            alt={t(titleKey)}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-2 text-primary font-extrabold text-lg">
        {t(titleKey)}
      </div>
      <p className="text-secondary text-sm mt-1">{t(descKey)}</p>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          className="w-10 h-10 rounded-[30px] grid place-items-center bg-bgLight text-accentDark hover:opacity-90 transition"
          aria-label="Add to cart"
        >
          <LuShoppingCart className="w-5 h-5" />
        </button>
        <button
          className="w-10 h-10 rounded-[30px] grid place-items-center bg-bgLight text-accentDark hover:opacity-90 transition"
          aria-label="Add to favorites"
        >
          <LuHeart className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white font-black px-4 py-2 rounded-full shadow-soft">
        {price}
      </div>
    </article>
  );
}

export default function Menu() {
  const { t } = useTranslation();

  return (
    <div className="space-y-36 pt-20">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DrinkCard
          img={MenuPhoto1}
          titleKey="americano_title"
          descKey="americano_desc"
          price="$2.50"
        />
        <DrinkCard
          img={MenuPhoto2}
          titleKey="cappuccino_title"
          descKey="cappuccino_desc"
          price="$2.50"
        />
        <div className="flex flex-col text-center items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary">
            {t("menu_section_title")}
          </h3>
          <p className="text-secondary mt-3">{t("menu_section_desc")}</p>
          <a
            href="#about"
            className="mt-5 w-max px-5 py-3 rounded-[30px] font-bold no-underline text-white bg-gradient-to-b from-accent to-accentDark shadow-[hard] hover:opacity-90 transition"
          >
            {t("menu_learn_more")}
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary">
            {t("menu_second_title")}
          </h3>
          <p className="text-secondary mt-3">{t("menu_second_desc")}</p>
          <a
            href="#contact"
            className="mt-5 w-max px-5 py-3 rounded-[30px] font-bold no-underline text-white bg-gradient-to-b from-accent to-accentDark shadow-[hard] hover:opacity-90 transition"
          >
            {t("menu_learn_more")}
          </a>
        </div>

        <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-80"
            style={{ backgroundImage: `url(${bgPhoto})` }}
          />
          <div className="relative z-10 w-[180px] h-[180px] md:w-[250px] md:h-[250px]">
            <img
              src={cupCoffee}
              alt="Coffee cup"
              className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
