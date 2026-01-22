import React from "react";

import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import TikTokIcon from "../../assets/tiktok.svg";

// const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e0322715c4b09646bb5f4e/59dc25d0e_LogomarcaAssociacaojpg.jpg";
const LOGO_URL = "/favicon.png";

export default function Footer() {
  const quickLinks = [
    { label: "Início", path: "/" },
    { label: "Sobre", path: "/about" },
    { label: "Cultura e Tradição", path: "/culture" },
    { label: "Notícias", path: "/news" },
    { label: "Seja Associado", path: "/join" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="Associação Anita e Giuseppe Garibaldi"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed max-w-md">
              Promovendo o desenvolvimento humano, social e institucional de
              seus associados e da comunidade, por meio de ações organizadas,
              participativas e comprometidas com o bem coletivo.
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
              Links Rápidos
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Av. São João, 313 - Ed. Seguradoras
                  <br />
                  Centro - São Paulo/SP
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
              © {new Date().getFullYear()} Associação Anita e Giuseppe Garibaldi
              - SP. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-sm">CNPJ: 03.161.879/0001-41</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
