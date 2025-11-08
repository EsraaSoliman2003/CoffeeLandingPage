import React from "react";
import { LuHeart, LuShoppingCart } from "react-icons/lu";

import MenuPhoto1 from "../assets/MenuPhoto1.png";
import MenuPhoto2 from "../assets/MenuPhoto2.png";
import cupCoffee from "../assets/cupCoffee.png";
import bgPhoto from "../assets/bgPhoto.png";

function DrinkCard({ img, title, desc, price }) {
  return (
    <article
      className="
        relative bg-white/40 rounded-[26px]
        shadow-[0_20px_40px_rgba(0,0,0,0.12)] px-6 pb-8 pt-16
        overflow-visible
      "
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-2 text-[#2a1b17] font-extrabold text-lg">{title}</div>
      <p className="text-[#5e4a42] text-sm mt-1">{desc}</p>

      <div className="mt-4 flex items-center gap-3">
        <button
          className="
            w-10 h-10 rounded-[30px] grid place-items-center
            bg-[#f2e9e4] text-[#5b231a] hover:opacity-90
            transition
          "
          aria-label="Add to cart"
        >
          <LuShoppingCart className="w-5 h-5" />
        </button>
        <button
          className="
            w-10 h-10 rounded-[30px] grid place-items-center
            bg-[#f2e9e4] text-[#5b231a] hover:opacity-90
            transition
          "
          aria-label="Add to favorites"
        >
          <LuHeart className="w-5 h-5" />
        </button>
      </div>

      <div
        className="
          absolute -bottom-4 left-1/2 -translate-x-1/2
          bg-[#2a1b17] text-white font-black
          px-4 py-2 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.18)]
        "
      >
        {price}
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <div className="space-y-36 pt-20">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DrinkCard
          img={MenuPhoto1}
          title="Americano"
          desc="100% Natural Arabica or Robusta, 30 ml cup"
          price="$2.50"
        />

        <DrinkCard
          img={MenuPhoto2}
          title="Cappuccino"
          desc="Coffee 50%, milk 50%, 280 ml"
          price="$2.50"
        />

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#2a1b17]">
            Lorem Ipsum is simply dummy text of
          </h3>
          <p className="text-[#5e4a42] mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>
          <a
            href="#about"
            className="
              mt-5 w-max
              px-5 py-3 rounded-[30px] font-bold no-underline text-white
              bg-gradient-to-b from-[#7b3b2e] to-[#5b231a]
              shadow-[0_14px_24px_rgba(91,35,26,0.25)]
              hover:opacity-90 transition
            "
          >
            Learn More
          </a>
        </div>
      </section>

      <section
        className="
          grid grid-cols-1 md:grid-cols-2 gap-6
        "
      >
        <div className="flex flex-col">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#2a1b17]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
          <p className="text-[#5e4a42] mt-3">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <a
            href="#contact"
            className="
              mt-5 w-max
              px-5 py-3 rounded-[30px] font-bold no-underline text-white
              bg-gradient-to-b from-[#7b3b2e] to-[#5b231a]
              shadow-[0_14px_24px_rgba(91,35,26,0.25)]
              hover:opacity-90 transition
            "
          >
            Learn More
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
