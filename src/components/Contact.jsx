import React from "react";
import logo from "../assets/logo.png";

export default function Contact() {
  return (
    <section
      className="
        mt-12
        rounded-[28px] p-6 md:p-10
      "
    >
      <div
        className="
          grid grid-cols-1 md:grid-cols-[1fr_auto]
          items-center gap-6
        "
      >
        <div>
          <div className="text-xs font-semibold tracking-[.18em] text-[#5e4a42] uppercase">
            Let’s Talk
          </div>

          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#2a1b17]">
            Want to Reserve a Table?
          </h2>
        </div>

        <div className="flex md:justify-end">
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 md:px-10 py-4
              rounded-full font-semibold text-white no-underline
              bg-[#3a0b09]
              shadow-[0_18px_28px_rgba(58,11,9,0.35)]
              hover:opacity-95 transition
            "
          >
            Contact Now
          </a>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-[#2a1b17]/20" />

      <p className="text-[#5e4a42] max-w-[70ch] mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div
        className="
          grid grid-cols-1 md:grid-cols-4 gap-8
          text-[#2a1b17]
        "
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold">Flavored</span>
            <img
              src={logo}
              alt="logo"
              className="w-7 h-7 object-contain inline-block align-middle"
            />
          </div>
          <div className="text-sm text-[#5e4a42]">
            Wake up to something special.
          </div>
        </div>

        <div>
          <h4 className="font-extrabold mb-3">Our Services</h4>
          <ul className="space-y-2 text-[#5e4a42]">
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                Report a Bug
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                Terms of Services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-3">Our Company</h4>
          <ul className="space-y-2 text-[#5e4a42]">
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-85">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-3">Address</h4>
          <ul className="space-y-2 text-[#5e4a42]">
            <li>123 Coffee Street</li>
            <li>Cairo, Egypt</li>
            <li>coffee@example.com</li>
            <li>+20 100 000 0000</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
