"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CalendarIcon,
  ChefHatIcon,
  FilmIcon,
  HistoryIcon,
  MapPinIcon,
  MusicIcon,
  PartyPopperIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";

export function CulturePage() {
  const events = [
    {
      id: 1,
      title: "Carnevale Italiano 2025",
      description:
        "Tradicional festa de carnaval à italiana com música, dança e muita alegria.",
      image_url: "/photo-02.jpg",
      category: "festa",
      event_date: "2023-01-01",
      location: "Sede da Associação - Centro SP",
    },
    {
      id: 2,
      title: "Festival Gastronômico Regional",
      image_url: "/photo-03.jpg",
      description:
        "Degustação de pratos típicos das regiões Calábria, Sicília, Vêneto e Lombardia.",
      category: "gastronomia",
      event_date: "2023-01-02",
      location: "Sede da Associação - Centro SP",
    },
    {
      id: 3,
      title: "Cinema Italiano - 'La Dolce Vita'",
      image_url: "/photo-03.jpg",
      description:
        "Sessão especial do clássico de Federico Fellini com debate após a exibição.",
      category: "gastronomia",
      event_date: "2023-01-03",
      location: "Sede da Associação - Centro SP",
    },
  ];
  //     const getLocale = () => {
  //     switch(language) {
  //       case 'it': return it;
  //       case 'es': return es;
  //       default: return ptBR;
  //     }
  //   };

  const categories = [
    {
      icon: PartyPopperIcon,
      title: "Festas Típicas",
      description:
        "Celebrações tradicionais italianas que mantêm vivas as memórias e costumes dos antepassados.",
      color: "bg-purple-500",
    },
    {
      icon: FilmIcon,
      title: "Cinema Italiano",
      description:
        "Sessões de filmes clássicos e contemporâneos que retratam a riqueza cultural italiana.",
      color: "bg-blue-500",
    },
    {
      icon: ChefHatIcon,
      title: "Gastronomia",
      description:
        "Workshops, degustações e eventos que celebram a culinária italiana tradicional.",
      color: "bg-orange-500",
    },
    {
      icon: MusicIcon,
      title: "Música e Canto",
      description:
        "Apresentações musicais, corais e eventos que preservam a tradição musical italiana.",
      color: "bg-pink-500",
    },
    {
      icon: UsersIcon,
      title: "Tradições Regionais",
      description:
        "Grupos de convivência das regiões: Calábria, Sicília, Vêneto, Lombardia e outras.",
      color: "bg-emerald-500",
    },
    {
      icon: HistoryIcon,
      title: "Resgate Histórico",
      description:
        "Preservação da história das famílias italianas no Brasil e suas contribuições.",
      color: "bg-amber-500",
    },
  ];

  const categoryColors = {
    festa: "bg-purple-100 text-purple-700",
    cinema: "bg-blue-100 text-blue-700",
    gastronomia: "bg-orange-100 text-orange-700",
    musica: "bg-pink-100 text-pink-700",
    palestra: "bg-emerald-100 text-emerald-700",
    networking: "bg-amber-100 text-amber-700",
    curso: "bg-cyan-100 text-cyan-700",
  };

  const isLoading = false;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-purple-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=1920&q=80')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cultura, Tradição e Identidade
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Preservando e celebrando as tradições ítalo-brasileiras através de
              eventos, festas e iniciativas culturais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cultural Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas Atividades Culturais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diversas iniciativas para manter viva a cultura italiana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`${cat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {cat.title}
                </h3>
                <p className="text-gray-600">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agenda de Eventos
            </h2>
            <p className="text-lg text-gray-600">
              Confira nossos próximos eventos e participe
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-80 rounded-2xl" />
              ))}
            </div>
          ) : events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  {event.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      {event.category && (
                        <span
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-700"}`}
                        >
                          {event.category}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                    )}
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-emerald-600" />
                        <span>
                          {/* {event.event_date &&
                            format(
                              new Date(event.event_date),
                              "d 'de' MMMM, yyyy - HH:mm",
                              { locale: getLocale() },
                            )} */}
                          15 de fevereiro, 2025 - 19:00
                        </span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4 text-emerald-600" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum evento programado
              </h3>
              <p className="text-gray-600">
                Em breve divulgaremos nossa agenda de eventos
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
