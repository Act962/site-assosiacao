"use client";

import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  excerpt: string;
  created_date: string;
  image_url: string;
}

export function NewsPreview() {
  const news: News[] = [
    {
      id: "1",
      title: "Celebração do Dia da Unificação Italiana",
      excerpt:
        "Nossa associação celebrou o 17 de março com uma programação especial em homenagem à unificação italiana.",
      created_date: "2023-01-01",
      image_url: "/photo-01.jpg",
    },
    {
      id: "2",
      title: "Novas turmas de italiano abertas",
      excerpt:
        "Estão abertas as inscrições para os cursos de italiano do segundo semestre. Vagas limitadas.",
      created_date: "2023-01-02",
      image_url: "/photo-02.jpg",
    },
    {
      id: "3",
      title: "Festa de São José - Tradição Italiana",
      excerpt:
        "Dia 19 de março celebramos São José com uma festa típica que reuniu toda a comunidade.",
      created_date: "2023-01-03",
      image_url: "/photo-01.jpg",
    },
    {
      id: "4",
      title: "Parceria com Consulado Italiano em SP",
      excerpt:
        "Nossa associação firmou parceria oficial com o Consulado Italiano para facilitar orientações à comunidade.",
      created_date: "2023-01-04",
      image_url: "/photo-02.jpg",
    },
  ];

  //   const getLocale = () => {
  //     switch (language) {
  //       case "it":
  //         return it;
  //       case "es":
  //         return es;
  //       default:
  //         return ptBR;
  //     }
  //   };

  const featuredNews = news[0];
  const regularNews = news.slice(1);
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Notícias
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Últimas Notícias
            </h2>
            <p className="text-lg text-gray-600 mt-3">
              Acompanhe o que está acontecendo na nossa associação
            </p>
          </div>
          <Link
            href={"/"}
            className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 text-lg"
          >
            Todas as notícias
            <ArrowRightIcon className="ml-2 size-5" />
          </Link>
        </motion.div>

        {/* Featured Article */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link href={`/`}>
              <div className="group grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {featuredNews.image_url && (
                  <div className="h-80 md:h-[500px] overflow-hidden">
                    <img
                      src={featuredNews.image_url}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <ClockIcon className="w-4 h-4" />
                    <span>
                      {/* {format(
                        new Date(featuredNews.created_date),
                        "d 'de' MMMM, yyyy",
                        { locale: getLocale() },
                      )} */}
                      14 de janeiro, 2026
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors leading-tight">
                    {featuredNews.title}
                  </h3>
                  {featuredNews.excerpt && (
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-4">
                      {featuredNews.excerpt}
                    </p>
                  )}
                  <div className="flex items-center text-emerald-600 font-semibold text-lg">
                    Leia mais
                    <ArrowRightIcon className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {regularNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/`}>
                <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  {item.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <ClockIcon className="w-3 h-3" />
                      <span>
                        {/* {format(new Date(item.created_date), "d MMM yyyy", {
                          locale: getLocale(),
                        })} */}
                        14 jan 2026
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
