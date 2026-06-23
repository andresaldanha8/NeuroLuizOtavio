import { motion } from 'motion/react';
import { Shield, Heart, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Escuta Ativa',
      description: 'Acolhimento genuíno e atenção plena ao que você tem a dizer',
    },
    {
      icon: Shield,
      title: 'Ética e Sigilo',
      description: 'Comprometimento total com a confidencialidade e segurança',
    },
    {
      icon: Users,
      title: 'Humanização',
      description: 'Abordagem empática e respeitosa em cada sessão',
    },
  ];

  return (
      <section id="sobre" className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/foto01.png"
                  alt="Dr. Luiz Otávio - Psicólogo"
                  className="w-full h-90 sm:h-80 md:h-[400px] lg:h-[500px] object-cover object-[0_80%]"
                />
            </div>
            
            {/* Credencial Card */}
              <div className="absolute -bottom-3 right-1 sm:-bottom-6 sm:-right-6 bg-[#4090eb] p-2 sm:p-6 rounded-2xl shadow-xl text-white">
              <div className="text-xs sm:text-sm opacity-90">Psicólogo Registrado</div>
              <div className="text-lg sm:text-2xl font-medium mt-1">CRP 10/10618</div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mt-8 lg:mt-0"
          >
            <div>
                <h2 className="text-xl sm:text-3xl md:text-4xl text-[#2F3E3A] mb-3 sm:mb-4">
                Sobre o Psicólogo
              </h2>
              <div className="w-20 h-1 bg-[#4090eb] rounded-full"></div>
            </div>

              <p className="text-sm sm:text-lg text-[#6B7F79] leading-relaxed">
              Sou Dr. Luiz Otávio, psicólogo dedicado a oferecer um espaço de 
              acolhimento e transformação emocional. Meu compromisso é com a sua 
              saúde mental, oferecendo um ambiente seguro onde você pode se expressar 
              livremente e através da relação terapêutica estabelecida irei contribuir
              no seu processo de reconstrução de uma nova história.
            </p>
              <p className="text-sm sm:text-lg text-[#6B7F79] leading-relaxed">
              Acredito que cada pessoa tem seu próprio ritmo e história única. Por 
              isso, minha abordagem é personalizada, respeitosa e fundamentada na 
              escuta ativa, na ética profissional e no sigilo absoluto.
            </p>

            <div className="bg-[#F2FBF8] rounded-2xl p-4 sm:p-6 mt-4 sm:mt-6 text-[#2F3E3A] text-sm sm:text-lg">
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">Conheça mais sobre mim</h3>
              <p>
                Sou Luiz Otávio, psicólogo clínico com especialização em Saúde Mental, Neuropsicologia,
                Sexologia e Psicoterapia Sexual, além de formação em Psicoterapia de Casais. Atuo há mais de 5 anos,
                dedicando minha carreira ao acolhimento, avaliação psicológica, diagnóstico e acompanhamento de pessoas
                em diferentes fases da vida.
                  <br /><br />
                Minha formação inclui graduação em Psicologia e especializações voltadas à Saúde Mental, Neuropsicologia,
                Sexologia e Psicoterapia Sexual, além de capacitação para avaliação e intervenção em casos de transtornos de
                personalidade, autismo, TDAH, depressão e ansiedade.
                  <br /><br />
                Acredito em um atendimento humanizado, ético e personalizado, respeitando a individualidade de cada paciente
                e promovendo cuidado integral à saúde emocional e ao bem-estar psicológico.
              </p>
            </div>
            <div className="pt-6 space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-[#F2FBF8] border border-[#4090eb]/10"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-[#4090eb]" size={24} />
                  </div>
                  <div>
                      <h3 className="text-base sm:text-lg text-[#2F3E3A] mb-1">{value.title}</h3>
                      <p className="text-sm sm:text-base text-[#6B7F79]">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  );
}
