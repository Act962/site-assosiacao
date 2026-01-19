"use client";

import {
  BriefcaseIcon,
  Building2Icon,
  GlobeIcon,
  GraduationCapIcon,
  HandshakeIcon,
  PlaneIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";

export function NetworkingPage() {
  const services = [
    {
      icon: UsersIcon,
      title: "Rodadas de Networking",
      description:
        "Eventos regulares para empreendedores ítalo-brasileiros se conectarem e trocarem experiências.",
      color: "bg-amber-500",
    },
    {
      icon: GlobeIcon,
      title: "Importação de Produtos",
      description:
        "Apoio para quem deseja importar produtos italianos ou iniciar negócios com a Itália.",
      color: "bg-blue-500",
    },
    {
      icon: Building2Icon,
      title: "Eventos Empresariais",
      description:
        "Eventos para conectar empresários do Brasil e da Itália, promovendo parcerias comerciais.",
      color: "bg-emerald-500",
    },
    {
      icon: HandshakeIcon,
      title: "Parcerias Estratégicas",
      description:
        "Facilitamos conexões entre empresas brasileiras e italianas para negócios bilaterais.",
      color: "bg-purple-500",
    },
  ];

  const academicServices = [
    {
      icon: GraduationCapIcon,
      title: "Estudar na Itália",
      description:
        "Auxílio para estudantes ítalo-brasileiros que desejam estudar na Itália.",
      items: [
        "Orientação sobre processos",
        "Documentação necessária",
        "Escolha de instituições",
      ],
    },
    {
      icon: TrendingUpIcon,
      title: "Equivalência de Diplomas",
      description:
        "Orientações sobre equivalência de diplomas e oportunidades de bolsas.",
      items: [
        "Processo de reconhecimento",
        "Bolsas de estudo",
        "Programas de intercâmbio",
      ],
    },
    {
      icon: PlaneIcon,
      title: "Parcerias Universitárias",
      description:
        "Parcerias com universidades italianas para facilitar o intercâmbio acadêmico.",
      items: [
        "Convênios ativos",
        "Programas conjuntos",
        "Mobilidade acadêmica",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-amber-700 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&q=80')`,
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
            <BriefcaseIcon className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Networking & Negócios
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Conectando empreendedores e profissionais ítalo-brasileiros,
              fortalecendo relações comerciais entre Brasil e Itália
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oportunidades de Negócios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Facilitamos conexões comerciais e apoiamos empreendedores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parcerias com Universidades
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apoio acadêmico para estudantes ítalo-brasileiros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {academicServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
