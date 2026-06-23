import { motion } from 'motion/react';
import { MessageCircle, UserCheck, ArrowRight, RefreshCw } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Primeiro Contato',
      description: 'Entre em contato pelo formulário, WhatsApp ou e-mail. Vou responder com cuidado e atenção, esclarecendo suas dúvidas e combinando a primeira sessão.',
    },
    {
      icon: UserCheck,
      title: 'Acolhimento Inicial',
      description: 'Na primeira sessão, nos conheceremos melhor. É um momento de escuta, onde você compartilha suas necessidades e eu apresento como podemos trabalhar juntos.',
    },
    {
      icon: RefreshCw,
      title: 'Processo Terapêutico',
      description: 'Construímos um caminho de transformação respeitando seu ritmo. Cada sessão é um espaço seguro para reflexão, autoconhecimento e crescimento emocional.',
    },
  ];

  return (
    <section id="como-funciona" className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#2F3E3A] mb-4">
            Como Funciona a Terapia
          </h2>
          <div className="w-20 h-1 bg-[#4090eb] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#6B7F79] max-w-2xl mx-auto">
            Um processo simples e acolhedor, pensado para que você se sinta 
            confortável desde o primeiro momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#4090eb] text-white flex items-center justify-center text-xs sm:text-xl font-medium shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-[#F2FBF8] p-3 sm:p-8 rounded-2xl border border-[#4090eb]/20 h-full pt-7 sm:pt-12">
                  <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center mb-3 sm:mb-6 shadow-md">
                    <step.icon className="text-[#4090eb]" size={18} />
                  </div>

                  <h3 className="text-sm sm:text-xl text-[#2F3E3A] mb-1 sm:mb-3">{step.title}</h3>
                  <p className="text-[10px] sm:text-sm text-[#6B7F79] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>

              {/* Arrow between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <ArrowRight className="text-[#17c1d8]" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-16 bg-gradient-to-br from-[#4090eb] to-[#17c1d8] p-4 sm:p-8 md:p-12 rounded-3xl text-white text-center"
        >
          <h3 className="text-lg sm:text-2xl md:text-3xl mb-2 sm:mb-4">
            Pronto para dar o primeiro passo?
          </h3>
          <p className="text-xs sm:text-lg mb-4 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Iniciar a terapia é um ato de coragem e autocuidado. <br />Estou aqui para 
            acompanhar você nessa jornada, no seu tempo e do seu jeito.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-white text-[#17c1d8] px-4 sm:px-8 py-2 sm:py-4 rounded-full hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm sm:text-base"
          >
            Entre em contato e faça sua triagem
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
