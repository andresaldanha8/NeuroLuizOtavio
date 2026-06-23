import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#4090eb]/20 text-xs sm:text-sm">
              <Heart className="text-[#4090eb]" size={18} />
              <span className="text-[#6B7F79] text-sm">Acolhimento e escuta ativa</span>
            </div>

            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2F3E3A] leading-tight">
              Um espaço seguro para cuidar da sua{' '}
              <span className="text-[#4090eb]">saúde mental e emocional</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#6B7F79] leading-relaxed max-w-xl">
              Ofereço atendimento psicológico humanizado, baseado em escuta ativa, 
              acolhimento e respeito. Juntos, podemos construir caminhos para o 
              seu bem-estar emocional.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-3 sm:pt-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[#4090eb] text-white px-3 sm:px-8 py-2 sm:py-4 rounded-full hover:bg-[#31ace6] transition-all hover:shadow-lg hover:shadow-[#31ace6]/20 text-xs sm:text-base"
              >
                Agendar Consulta
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="bg-white text-[#4090eb] px-3 sm:px-8 py-2 sm:py-4 rounded-full border-2 border-[#4090eb] hover:bg-[#F2FBF8] transition-all text-xs sm:text-base"
              >
                Saiba Mais
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/foto03.jpeg"
                alt="Ambiente acolhedor de terapia"
                className="w-full h-100 sm:h-80 md:h-[400px] lg:h-[500px] object-cover object-center sm:object-[0_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4090eb]/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-2 left-1 sm:-bottom-6 sm:-left-6 bg-[#4090eb] p-1 sm:p-6 rounded-2xl shadow-xl border border-[#4682B4]/10"
            >
                <div className="flex items-center gap-1 sm:gap-4">
                  <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-[#F2FBF8] flex items-center justify-center">
                    <Heart className="text-[#4090eb]" size={16} />
                  </div>
                <div>
                  <div className="text-xs sm:text-2xl font-medium text-[#f9fdfc]">100%</div>
                  <div className="text-[10px] sm:text-sm text-[#f9fdfc]">Sigilo Profissional<br/>Resolução CFP nº 010/2005</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
