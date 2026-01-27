"use client";
import { motion } from "motion/react";
import { ArrowRightIcon, HeartIcon, ScaleIcon } from "lucide-react";
import Link from "next/link";

export function AssistancePage() {
  const services = [
    {
      icon: HeartIcon,
      title: "Apoio Social e Comunitário",
      description:
        "Orientação e suporte para recém-chegados, integração comunitária e apoio consular",
      path: "/support",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: ScaleIcon,
      title: "Área Jurídica e Informativa",
      description:
        "Informações sobre cidadania italiana, direitos de ítalo-brasileiros e orientação jurídica",
      path: "/legal",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <section className="relative py-32 bg-linear-to-br from-emerald-700 via-emerald-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Como Podemos Ajudar?
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Escolha a área de assistência que você precisa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Link href={service.path}>
                  <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                    <div
                      className={`bg-linear-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div
                      className={`flex items-center text-${service.color}-600 font-semibold text-lg group-hover:gap-4 group-hover:text-${service.color}-700 gap-2 transition-all`}
                    >
                      Acessar
                      <ArrowRightIcon className="w-6 h-6" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Precisa de Outros Serviços?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Além da assistência social e jurídica, oferecemos cursos de
              italiano, eventos culturais e oportunidades de networking
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={"/courses"}>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors">
                  Ver Cursos
                </button>
              </Link>
              <Link href={"/culture"}>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors">
                  Eventos Culturais
                </button>
              </Link>
              <Link href={"/networking"}>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors">
                  Networking
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
