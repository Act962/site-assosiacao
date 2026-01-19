"use client";

import {
  EyeIcon,
  HeartIcon,
  LeafIcon,
  ScaleIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";

const LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e0322715c4b09646bb5f4e/59dc25d0e_LogomarcaAssociacaojpg.jpg";

export function AboutPage() {
  const values = [
    {
      icon: ShieldIcon,
      title: "Ética e Integridade",
      description:
        "Atuação pautada pela honestidade, transparência e respeito às normas.",
    },
    {
      icon: HeartIcon,
      title: "Responsabilidade Social",
      description: "Compromisso com o impacto positivo de nossas ações.",
    },
    {
      icon: UsersIcon,
      title: "Respeito à Diversidade",
      description: "Valorização das diferenças e promoção da inclusão.",
    },
    {
      icon: SparklesIcon,
      title: "Participação e Cooperação",
      description: "Incentivo ao engajamento e trabalho coletivo.",
    },
    {
      icon: EyeIcon,
      title: "Transparência",
      description: "Clareza na comunicação e prestação de contas.",
    },
    {
      icon: TargetIcon,
      title: "Compromisso com a Qualidade",
      description: "Busca contínua pela melhoria de processos.",
    },
    {
      icon: ScaleIcon,
      title: "Sustentabilidade",
      description: "Práticas que asseguram a continuidade da Associação.",
    },
    {
      icon: LeafIcon,
      title: "Desenvolvimento Sustentável",
      description: "Uso responsável dos recursos disponíveis.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-br from-emerald-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        {/* <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-green-500 via-white to-red-500 opacity-80" /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sobre a Associação
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Conheca nossa história, missão e valores que guiam nosso
              compromisso com a comunidade ítalo-brasileira.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutional Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={LOGO_URL}
                alt="Associação Anita e Giuseppe Garibaldi"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Associação
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A{" "}
                  <strong>
                    Associação de Intercâmbio Cultural Ítalo-Brasileira Anita e
                    Giuseppe Garibaldi – SP
                  </strong>{" "}
                  é uma entidade sem fins lucrativos que atua na promoção da
                  cultura, língua, história e integração ítalo-brasileira.
                </p>
                <p>
                  Localizada no coração de São Paulo, na Avenida São João, nossa
                  sede é um ponto de encontro para descendentes italianos,
                  estudantes da língua e todos os interessados na rica cultura
                  italiana.
                </p>
                <p>
                  Atuamos de forma responsável e transparente, incentivando a
                  cooperação, o fortalecimento de vínculos e a valorização do
                  conhecimento, da cidadania e da inclusão social.
                </p>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">CNPJ</p>
                <p className="text-lg font-semibold text-gray-900">
                  03.161.879/0001-41
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-sm"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TargetIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                A Associação tem como missão promover o desenvolvimento humano,
                social e institucional de seus associados e da comunidade, por
                meio de ações organizadas, participativas e comprometidas com o
                bem coletivo. A entidade busca atuar de forma responsável e
                transparente, incentivando a cooperação, o fortalecimento de
                vínculos e a valorização do conhecimento, da cidadania e da
                inclusão social.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-sm"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <EyeIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                A Associação almeja ser uma instituição de referência em sua
                área de atuação, reconhecida pela credibilidade, eficiência,
                impacto social e compromisso com o desenvolvimento sustentável.
                No médio e longo prazo, busca ampliar sua atuação, fortalecer
                sua estrutura organizacional e consolidar parcerias estratégicas
                que potencializem seus resultados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que orientam nossa conduta institucional e nossa forma
              de atuar
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History of Garibaldi */}
      <section className="py-20 bg-linear-to-br from-gray-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Anita e Giuseppe Garibaldi
            </h2>
            <p className="text-emerald-300 text-lg">Heróis da Liberdade</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">
                  Giuseppe Garibaldi (1807-1882)
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nascido em Nice, Giuseppe envolveu-se desde jovem em
                  movimentos revolucionários que defendiam a unificação italiana
                  e a instauração de regimes republicanos. Perseguido
                  politicamente, encontrou refúgio na América do Sul, onde
                  participou das lutas republicanas no Brasil e Uruguai. Seu
                  nome ficou definitivamente associado à causa da liberdade e da
                  unidade nacional italiana, como um dos principais líderes do
                  Risorgimento.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">
                  Anita Garibaldi (1821-1849)
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nascida Ana Maria de Jesus Ribeiro em Laguna, Santa Catarina,
                  destacou-se por sua personalidade forte e espírito
                  independente. O encontro com Giuseppe ocorreu em 1839, durante
                  a Revolução Farroupilha. Anita não foi apenas companheira, mas
                  também uma combatente ativa, participando de confrontos
                  armados e demonstrando bravura incomum. É considerada uma
                  heroína tanto no Brasil quanto na Itália, símbolo de coragem
                  feminina e luta pela liberdade.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-emerald-200 italic max-w-3xl mx-auto">
              "A história de Anita e Giuseppe Garibaldi permanece viva como
              exemplo de amor aliado ao ideal revolucionário. Juntos,
              representam a união entre compromisso político e coragem pessoal,
              inspirando gerações pela defesa da liberdade, da justiça e da
              dignidade humana."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
