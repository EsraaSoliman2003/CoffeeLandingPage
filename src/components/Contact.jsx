import React from "react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="mt-12 rounded-[28px] p-6 md:p-10 text-center">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6">
        <div>
          <div className="text-xs font-semibold tracking-[.18em] text-[#5e4a42] uppercase">
            {t("contact_section_label")}
          </div>

          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#2a1b17]">
            {t("contact_title")}
          </h2>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-[#2a1b17]/20" />

      <p className="text-[#5e4a42] max-w-[70ch] m-auto mb-10">
        {t("contact_desc")}
      </p>
      <div>
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
          {t("contact_btn")}
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#2a1b17] mt-10">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-center">
            <span className="text-xl font-extrabold">
              {t("flavored_title")}
            </span>
            <img
              src={logo}
              alt={t("flavored_title")}
              className="w-7 h-7 object-contain inline-block align-middle"
            />
          </div>
          <div className="text-sm text-[#5e4a42]">{t("flavored_desc")}</div>
        </div>

        <div>
          <h4 className="font-extrabold mb-3">{t("services_title")}</h4>
          <ul className="space-y-2 text-[#5e4a42]">
            {t("services_list", { returnObjects: true }).map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:opacity-100 opacity-85">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-3">{t("company_title")}</h4>
          <ul className="space-y-2 text-[#5e4a42]">
            {t("company_list", { returnObjects: true }).map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:opacity-100 opacity-85">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-3">{t("address_title")}</h4>
          <ul className="space-y-2 text-[#5e4a42]">
            {t("address_list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
