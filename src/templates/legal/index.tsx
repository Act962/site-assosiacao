"use client";

import {
  AlertCircleIcon,
  BookOpenIcon,
  CheckCircleIcon,
  FileCheckIcon,
  PlaneIcon,
  ScaleIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";

export function LegalPage() {
  const topics = [
    {
      icon: FileCheckIcon,
      title: "Cidadania Italiana",
      description:
        "Orientações gerais sobre o processo de reconhecimento da cidadania italiana para descendentes.",
      items: [
        "Requisitos básicos",
        "Documentação necessária",
        "Processo via consulado",
        "Processo via comune na Itália",
        "Prazos e etapas",
      ],
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: PlaneIcon,
      title: "Imigração",
      description:
        "Informações sobre processos imigratórios entre Brasil e Itália.",
      items: [
        "Tipos de visto",
        "Permesso di soggiorno",
        "Trabalho na Itália",
        "Residência no exterior",
      ],
      color: "bg-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: ScaleIcon,
      title: "Direito Italiano",
      description:
        "Noções gerais sobre o sistema jurídico italiano e suas particularidades.",
      items: [
        "Sistema legal italiano",
        "Direitos do cidadão",
        "Acordos bilaterais",
        "Tratados internacionais",
      ],
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: UsersIcon,
      title: "Direito de Família",
      description:
        "Orientações sobre questões familiares envolvendo cidadãos italianos.",
      items: [
        "Casamento com italiano(a)",
        "Divórcio internacional",
        "Guarda de filhos",
        "Sucessão e herança",
      ],
      color: "bg-pink-500",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-red-800 to-red-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')`,
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
            <ScaleIcon className="w-16 h-16 text-red-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Área Jurídica e Informativa
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Informações e orientações sobre direitos de ítalo-brasileiros,
              cidadania, imigração e direito de família
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertCircleIcon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">
                Aviso Importante
              </h3>
              <p className="text-amber-700 text-sm">
                Esta página tem caráter meramente informativo e educativo. As
                informações aqui apresentadas não constituem assessoria
                jurídica. Para casos específicos, recomendamos a consulta com
                advogados especializados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Temas Informativos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os principais temas relacionados aos direitos de
              ítalo-brasileiros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${topic.bgColor} rounded-3xl p-8`}
              >
                <div
                  className={`${topic.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <topic.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-6">{topic.description}</p>
                <ul className="space-y-3">
                  {topic.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lectures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpenIcon className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Palestras com Especialistas
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Periodicamente, realizamos palestras com advogados especializados
              em cidadania italiana, imigração e direito de família. Acompanhe
              nossa agenda de eventos para participar.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
