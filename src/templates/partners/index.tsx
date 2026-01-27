"use client";

import {
  BriefcaseIcon,
  Building2Icon,
  GlobeIcon,
  GraduationCapIcon,
  HandshakeIcon,
  HeartIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useSuspensePartners } from "@/modules/partners/hooks/use-partners";
import Image from "next/image";
import Link from "next/link";

export default function PartnersPage() {
  const { partners } = useSuspensePartners();

  const benefits = [
    {
      icon: HandshakeIcon,
      title: "Colaboração",
      description: "Trabalho conjunto em projetos culturais",
    },
    {
      icon: UsersIcon,
      title: "Networking",
      description: "Conexões com a comunidade ítalo-brasileira",
    },
    {
      icon: HeartIcon,
      title: "Impacto Social",
      description: "Fortalecimento dos laços culturais",
    },
    {
      icon: GlobeIcon,
      title: "Visibilidade",
      description: "Exposição para a comunidade internacional",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-emerald-700 via-emerald-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        {/* <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-green-500 via-white to-red-500 opacity-80" /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HandshakeIcon className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nossos Parceiros
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Juntos promovendo a cultura ítalo-brasileira e fortalecendo os
              laços entre Brasil e Itália
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parceiros
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos com o apoio de diversas instituições comprometidas com
              nossa missão
            </p>
          </motion.div>

          {partners.length === 0 ? (
            <div className="text-center text-gray-600">
              Nenhum parceiro encontrado
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto place-content-center gap-y-12">
              {partners.map((partner) => (
                <Link
                  key={partner.id}
                  href={partner.link || "#"}
                  target="_blank"
                  className="h-[200px] w-full group cursor-pointer"
                >
                  <div className="relative size-40 rounded-4xl overflow-hidden mx-auto">
                    <Image
                      src={partner.logo?.url || ""}
                      alt={partner.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-95"
                    />
                  </div>
                  <p className="text-center mt-2 font-semibold text-gray-900 group-hover:text-emerald-600 transition-all duration-300">
                    {partner.name}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios da Parceria
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seja um parceiro e faça parte dessa transformação cultural
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="bg-linear-to-br from-emerald-50 to-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seja Nosso Parceiro
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Junte-se a nós na missão de promover a cultura ítalo-brasileira
            </p>
            <a
              href="mailto:contato@garibaldi-sp.org.br"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Entre em Contato
              <HandshakeIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
