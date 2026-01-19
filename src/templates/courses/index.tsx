"use client";

import { motion } from "motion/react";
import {
  AwardIcon,
  BookOpenIcon,
  ClockIcon,
  GlobeIcon,
  GraduationCapIcon,
  HistoryIcon,
  MicIcon,
  UsersIcon,
} from "lucide-react";

export function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Italiano Básico - Turma A",
      description:
        "Curso para iniciantes que desejam aprender italiano do zero. Ideal para quem nunca teve contato com o idioma.",
      level: "basico",
      color: "bg-blue-500",
      image_url: "/photo-06.jpg",
      bgColor: "bg-blue-50",
      duration: "4 meses",
      schedule: "Segunda a Sexta, 19h-21h",
    },
    {
      id: 2,
      title: "Italiano Intermediário",
      description:
        "Para alunos que já possuem conhecimento básico e desejam avançar no idioma.",
      level: "intermediario",
      color: "bg-blue-500",
      image_url: "/photo-05.jpg",
      bgColor: "bg-blue-50",
      duration: "4 meses",
      schedule: "Segunda a Sexta, 19h-21h",
    },
    {
      id: 3,
      title: "Preparatório CELI B2",
      description:
        "Curso intensivo de preparação para o exame de proficiência CELI nível B2.",
      level: "avancado",
      color: "bg-blue-500",
      image_url: "/photo-06.jpg",
      bgColor: "bg-blue-50",
      duration: "3 meses",
      schedule: "Sábados - 9h às 13h",
    },
  ];

  const courseTypes = [
    {
      icon: BookOpenIcon,
      title: "Cursos de Italiano",
      description:
        "Do básico ao avançado, aprenda a língua italiana com professores qualificados.",
      levels: ["Básico", "Intermediário", "Avançado"],
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: GlobeIcon,
      title: "Italiano para Viagem",
      description:
        "Curso prático para quem deseja viajar pela Itália com confiança.",
      features: ["Conversação", "Situações do dia a dia", "Cultura local"],
      color: "bg-emerald-500",
      bgColor: "bg-emerald-50",
      duration: "4 meses",
      schedule: "Segunda a Sexta, 19h-21h",
    },
    {
      icon: AwardIcon,
      title: "Preparação CELI/CILS",
      description:
        "Preparação completa para os exames de proficiência reconhecidos internacionalmente.",
      features: [
        "Simulados",
        "Material específico",
        "Acompanhamento individual",
      ],
      color: "bg-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: HistoryIcon,
      title: "História e Cultura",
      description:
        "Aulas sobre a história da Itália e sua rica herança cultural.",
      features: ["Arte", "Literatura", "Civilização"],
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: MicIcon,
      title: "Palestras Educativas",
      description:
        "Palestras temáticas para jovens e adultos ítalo-brasileiros.",
      features: ["Identidade cultural", "Genealogia", "Cidadania"],
      color: "bg-pink-500",
      bgColor: "bg-pink-50",
    },
  ];

  const levelColors = {
    basico: "bg-green-100 text-green-700",
    intermediario: "bg-yellow-100 text-yellow-700",
    avancado: "bg-red-100 text-red-700",
    preparatorio: "bg-purple-100 text-purple-700",
  };

  const isLoading = false;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')`,
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
            <GraduationCapIcon className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cursos e Educação
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Aprenda italiano e conheça a fundo a cultura e história da Itália
              com nossos cursos especializados
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Cursos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Opções para todos os níveis e interesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseTypes.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${course.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div
                  className={`${course.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {course.levels && (
                  <div className="flex flex-wrap gap-2">
                    {course.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                )}
                {course.features && (
                  <ul className="space-y-1">
                    {course.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Courses */}
      {!isLoading && courses.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Turmas Abertas
              </h2>
              <p className="text-lg text-gray-600">
                Confira as próximas turmas disponíveis
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  {course.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={course.image_url}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {course.level && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[course.level as keyof typeof levelColors] || "bg-gray-100 text-gray-700"}`}
                        >
                          {course.level}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    {course.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>
                    )}
                    <div className="space-y-2 text-sm text-gray-600">
                      {course.duration && (
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-4 h-4 text-blue-600" />
                          <span>{course.duration}</span>
                        </div>
                      )}
                      {course.schedule && (
                        <div className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4 text-blue-600" />
                          <span>{course.schedule}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interessado em nossos cursos?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato para mais informações sobre matrículas e horários
              disponíveis.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
