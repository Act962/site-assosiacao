"use client";
import {
  BriefcaseIcon,
  FileTextIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MapPinIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";

export function SupportPage() {
  const services = [
    {
      icon: HomeIcon,
      title: "Apoio a Recém-Chegados",
      description:
        "Suporte completo para italianos recém-chegados ao Brasil e ítalo-brasileiros que precisam de orientação.",
      items: [
        "Orientação inicial",
        "Adaptação cultural",
        "Informações práticas sobre o Brasil",
      ],
      color: "bg-emerald-500",
    },
    {
      icon: FileTextIcon,
      title: "Orientação Consular",
      description: "Informações sobre serviços consulares italianos.",
      items: [
        "Vistos e passaportes",
        "Legalizações de documentos",
        "Procedimentos consulares",
        "Agendamentos",
      ],
      color: "bg-blue-500",
    },
    {
      icon: UsersIcon,
      title: "Integração Comunitária",
      description:
        "Ajudamos na integração de ítalo-brasileiros com comunidades italianas locais.",
      items: [
        "Conexão com grupos regionais",
        "Eventos de integração",
        "Atividades comunitárias",
      ],
      color: "bg-purple-500",
    },
    {
      icon: BriefcaseIcon,
      title: "Rede de Contatos",
      description: "Rede de apoio para trabalho, moradia e suporte familiar.",
      items: [
        "Oportunidades de trabalho",
        "Indicações de moradia",
        "Apoio familiar",
        "Networking profissional",
      ],
      color: "bg-amber-500",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-emerald-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80')`,
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
            <HeartHandshakeIcon className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Apoio a Recém-Chegados
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Oferecemos suporte e orientação para a comunidade
              ítalo-brasileira, ajudando na integração e fortalecendo laços
              comunitários
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Podemos Ajudar
            </h2>
            <p className="text-lg text-gray-600">
              Nossa equipe está pronta para orientar você em suas necessidades
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Nossa Sede</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Av. São João, 313 - Ed. Seguradoras
                      <br />
                      Centro - São Paulo/SP
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Redes Sociais</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center gap-3">
                    <GlobeIcon className="w-5 h-5 text-emerald-600" />
                    <span>@aicibanitaegiusepegaribaldi (Facebook)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GlobeIcon className="w-5 h-5 text-emerald-600" />
                    <span>@associacaoanita (Instagram)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
