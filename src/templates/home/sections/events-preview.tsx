"use client";

import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  image_url: string;
  category: string;
  event_date: string;
  location: string;
}

export function EventsPreview() {
  const events: Event[] = [
    {
      id: 1,
      title: "Carnevale Italiano 2025",
      image_url: "/photo-02.jpg",
      category: "festa",
      event_date: "2023-01-01",
      location: "Sede da Associação - Centro SP",
    },
    {
      id: 2,
      title: "Festival Gastronômico Regional",
      image_url: "/photo-03.jpg",
      category: "gastronomia",
      event_date: "2023-01-02",
      location: "Sede da Associação - Centro SP",
    },
    {
      id: 3,
      title: "Cinema Italiano - 'La Dolce Vita'",
      image_url: "/photo-03.jpg",
      category: "gastronomia",
      event_date: "2023-01-03",
      location: "Sede da Associação - Centro SP",
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
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Agenda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Próximos Eventos
            </h2>
          </div>
          <Link
            href={"/events"}
            className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
          >
            Ver todos
            <ArrowRightIcon className="ml-2 size-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {event.image_url && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image_url}
                    alt={"Title"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {event.category && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700`}
                    >
                      {event.category}
                    </span>
                  )}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-emerald-600" />
                    <span>
                      {/* {event.event_date && format(new Date(event.event_date), "d 'de' MMMM, yyyy - HH:mm", { locale: getLocale() })} */}
                      20 de janeiro, 2023 - 20:00
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
      </div>
    </section>
  );
}
