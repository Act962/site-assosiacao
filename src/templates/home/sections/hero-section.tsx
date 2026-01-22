"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  BookOpenIcon,
  GlobeIcon,
  HeartIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-900 via-emerald-800 to-gray-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Italian flag gradient accent */}
        {/* <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-green-500 via-white to-red-500 opacity-80" /> */}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-30 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-300 text-sm font-medium">
                São Paulo - SP
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Associação de Intercâmbio Cultural Ítalo-Brasileira
            </h1>

            <p className="text-2xl md:text-3xl font-serif text-emerald-300 mb-6 italic">
              Anita e Giuseppe Garibaldi
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Promovendo o desenvolvimento humano, social e institucional
              através da cultura ítalo-brasileira
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/join"}>
                <Button
                  size="lg"
                  className="bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-lg px-8 py-6 shadow-xl shadow-red-500/25 group"
                >
                  Associe-se Agora
                  <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 font-semibold text-lg px-8 py-6"
                >
                  Saiba mais
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <UsersIcon className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">Cultura</h3>
              <p className="text-gray-400 text-sm">
                Eventos, festas e tradições
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-8">
              <BookOpenIcon className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">Educação</h3>
              <p className="text-gray-400 text-sm">
                Cursos de italiano e história
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <HeartIcon className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">Comunidade</h3>
              <p className="text-gray-400 text-sm">Apoio social e integração</p>
            </div>
            <div className="bg-linear-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 mt-8">
              <GlobeIcon className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">
                Networkiing
              </h3>
              <p className="text-emerald-100 text-sm mt-2">
                Conectando empreendedores e profissionais
              </p>
              {/* <p className="text-emerald-100 text-sm font-medium mb-2">
                Networkiing
              </p>
              <h3 className="text-3xl font-bold text-white">1999</h3>
              <p className="text-emerald-100 text-sm mt-2">
                Promovendo intercâmbio cultural
              </p> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-0.5 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
