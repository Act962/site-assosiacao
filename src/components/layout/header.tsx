"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e0322715c4b09646bb5f4e/59dc25d0e_LogomarcaAssociacaojpg.jpg";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Cultura e Tradição", path: "/culture" },
  { label: "Cursos", path: "/courses" },
  { label: "Apoio", path: "/support" },
  { label: "Networking", path: "/networking" },
  { label: "Área Jurídica", path: "/legal" },
  { label: "Notícias", path: "/news" },
];

const languages = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Associação Anita e Giuseppe Garibaldi"
              className="size-10 rounded-full w-auto object-contain"
            />
            <span className="lg:hidden font-semibold text-[0.7rem]">
              AICIB Anita e Giuseppe Garibaldi-SP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <GlobeIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">BR</span>
                  <ChevronDownIcon className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => {}}
                    // className={language === lang.code ? "bg-gray-100" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Link href={"/join"}>
              <Button className="hidden sm:flex bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold shadow-lg shadow-emerald-500/25">
                Associe-se
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href={"/join"} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold">
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
