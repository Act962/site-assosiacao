import React from "react";

import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import TikTokIcon from "../../assets/tiktok.svg";
import { useTranslations } from "next-intl";

// const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e0322715c4b09646bb5f4e/59dc25d0e_LogomarcaAssociacaojpg.jpg";
const LOGO_URL = "/favicon.png";

export default function Footer() {
  const t = useTranslations("Footer");
  const quickLinks = [
    { label: t("quickLinks.items.home"), path: "/" },
    { label: t("quickLinks.items.about"), path: "/about" },
    { label: t("quickLinks.items.culture"), path: "/culture" },
    { label: t("quickLinks.items.news"), path: "/news" },
    { label: t("quickLinks.items.join"), path: "/join" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="">
            <img
              src={LOGO_URL}
              alt="Associação Anita e Giuseppe Garibaldi"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed max-w-md">
              {t("description")}
            </p>
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/aicibanitaegiusepegaribaldi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/associacaoanita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@associacao.anita?_r=1&_t=ZS-93C6y9EJ0vB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <img
                  src="/tiktok.svg"
                  alt="TikTok"
                  className="w-5 h-5 invert stroke-2"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("quickLinks.title")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Expediente
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Associação de Intercâmbio Ítalo-Brasileira Anita e Giuseppe
                Garibaldi
              </li>
              <li className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <strong>Presidente:</strong> Pedro Lovato
              </li>
              <li className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <strong>Vice Presidente:</strong> Marcelo Cosentini
              </li>
              <li className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <strong>Diretora Editorial:</strong> Ivanilde Carvalho
              </li>
              <li className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <strong>Jornalista Responsável:</strong> Glauco Piai - MTB
                39.836/SP
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("contact.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {t("contact.address")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {t("bottom.rights")}
            </p>
            <p className="text-gray-600 text-sm">{t("bottom.cnpj")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
