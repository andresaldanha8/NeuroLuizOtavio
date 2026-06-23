import { motion, pixelsToPercent } from 'motion/react';
import { Brain, Heart, Users, Smile, Sparkles, Orbit, VenusAndMars, RotateCw } from 'lucide-react';

export function Services() {
  const areas = [
    {
      icon: Users,
      title: 'Transtornos de Personalidade e de Humor',
      description: 'Atendimento especializado para pessoas com Transtorno de Personalidade Borderline e Transtorno Bipolar. O foco é no acolhimento, manejo dos sintomas e suporte contínuo, visando qualidade de vida e bem-estar emocional.',
    },
    {
      icon: Brain,
      title: 'Transtornos de Ansiedade e Depressão',
      description: 'Suporte psicológico para compreender e enfrentar sintomas de ansiedade e depressão, fortalecendo recursos emocionais para uma vida mais equilibrada e saudável.',
    },
    {
      icon: Smile,
      title: 'Transtornos do Neurodesenvolvimento',
      description: 'Atendimento psicológico voltado ao TEA, TDAH e outras condições do neurodesenvolvimento, auxiliando no desenvolvimento emocional, social e comportamental.',
    },
    {
      icon: Heart,
      title: 'Psicoterapia de Casal',
      description: 'Suporte psicológico para casais que desejam compreender melhor suas dinâmicas, desenvolver uma comunicação mais saudável e fortalecer os laços afetivos.',
    },
    {
      icon: VenusAndMars,
      title: 'Psicoterapia com ênfase em Sexualidade',
      description: 'Espaço seguro para abordar questões relacionadas à sexualidade, afetividade, relacionamentos e desenvolvimento do bem-estar emocional e sexual.',
    },
    {
      icon: RotateCw,
      title: 'Avaliação Psicológica e Neuropsicológica',
      description: 'Investigação especializada das funções cognitivas, emocionais e comportamentais, fornecendo informações importantes para diagnóstico, acompanhamento e planejamento de intervenções personalizadas.',
    },
  ];

  return (
    <section id="areas" className="py-8 px-2 sm:px-6 lg:px-8 bg-[#F2FBF8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#2F3E3A] mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-[#4090eb] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#6B7F79] max-w-2xl mx-auto">
            Ofereço atendimento especializado em diversas áreas da saúde mental, 
            sempre com uma abordagem acolhedora e personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-3 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#4682B4]/10 hover:border-[#4682B4]/30 group"
            >
              <div className="w-9 h-9 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#4682B4] to-[#21b6db] flex items-center justify-center mb-2 sm:mb-6 group-hover:scale-110 transition-transform">
                <area.icon className="text-white" size={18} />
              </div>
              <h3 className="text-sm sm:text-xl text-[#2F3E3A] mb-1 sm:mb-3">{area.title}</h3>
              <p className="text-[10px] sm:text-sm text-[#6B7F79] leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-[#6B7F79] max-w-3xl mx-auto">
            Cada pessoa é única e merece um atendimento que respeite sua individualidade. 
            <br/>Estou aqui para caminhar ao seu lado nessa jornada de cuidado e transformação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
