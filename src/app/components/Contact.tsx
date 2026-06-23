import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text =
      `Nome: ${formData.name}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/559392402171?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    toast.success('Você será redirecionado para o WhatsApp!', {
      duration: 5000,
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-8 px-2 sm:px-6 lg:px-8 bg-[#F2FBF8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#2F3E3A] mb-4">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-[#4090eb] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#6B7F79] max-w-2xl mx-auto">
            Estou aqui para ouvir você. Preencha o formulário ou escolha a forma 
            de contato que se sentir mais confortável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
              {/* Aviso LGPD */}
              <div className="text-[10px] sm:text-xs text-[#6B7F79] bg-[#F2FBF8] rounded-md px-2 py-1 mb-2 border border-[#BFD8D5]">
                Seus dados não serão armazenados neste site. O contato é realizado de forma segura, <br/>conforme a Lei Geral de Proteção de Dados (LGPD).
              </div>
                                  {/* Bloco FAQ - Perguntas Frequentes */}
                                  <div className="my-8">
                                    <h3 className="text-xl sm:text-2xl text-[#2F3E3A] font-bold mb-6 text-center">Perguntas Frequentes</h3>
                                    <div className="max-w-xl mx-auto">
                                      <Accordion type="single" collapsible>
                                        <AccordionItem value="faq1">
                                          <AccordionTrigger>A triagem é uma sessão de terapia?</AccordionTrigger>
                                          <AccordionContent>
                                            Não, a triagem é uma avaliação inicial para entender suas necessidades e direcionar o melhor acompanhamento.
                                          </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="faq2">
                                          <AccordionTrigger>Como é garantido o sigilo das informações durante as sessões?</AccordionTrigger>
                                          <AccordionContent>
                                            Todo o processo é confidencial, seguindo normas éticas e legais de proteção de dados.
                                          </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="faq3">
                                          <AccordionTrigger>Posso cancelar ou remarcar uma sessão?</AccordionTrigger>
                                          <AccordionContent>
                                            Sim, basta avisar com antecedência para reagendar ou cancelar sem custos adicionais.
                                          </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="faq4">
                                          <AccordionTrigger>O acompanhamento é indicado para adolescentes ou apenas adultos?</AccordionTrigger>
                                          <AccordionContent>
                                            O serviço é adaptado para diferentes faixas etárias, incluindo adolescentes e adultos.
                                          </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="faq5">
                                          <AccordionTrigger>Quanto tempo dura cada sessão?</AccordionTrigger>
                                          <AccordionContent>
                                            A duração pode variar conforme a necessidade, sendo sempre alinhada previamente com o profissional.
                                          </AccordionContent>
                                        </AccordionItem>
                                      </Accordion>
                                    </div>
                                  </div>
                        {/* Bloco de comentários de clientes */}
                        <div className="my-8">
                          <h3 className="text-xl sm:text-2xl text-[#2F3E3A] font-bold mb-6 text-center">O que dizem os clientes</h3>
                          <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            {/* Comentário 1 */}
                            <div className="bg-[#F2FBF8] border border-[#4090eb]/10 rounded-xl shadow p-4 flex-1 max-w-sm">
                              <p className="text-[#2F3E3A] text-base mb-3">“O acompanhamento com o <br/>Dr. Luiz Otavio me ajudou a entender melhor minhas emoções e a lidar com situações difíceis. <br/>Recomendo muito!”</p>
                              <span className="text-[#4090eb] font-semibold text-sm">Ana S.</span>
                            </div>
                            {/* Comentário 2 */}
                            <div className="bg-[#F2FBF8] border border-[#4090eb]/10 rounded-xl shadow p-4 flex-1 max-w-sm">
                              <p className="text-[#2F3E3A] text-base mb-3">“Profissional dedicado, sempre atento e acolhedor. <br/>As sessões fizeram toda diferença na minha rotina.”</p>
                              <span className="text-[#4090eb] font-semibold text-sm">Carlos M.</span>
                            </div>
                            {/* Comentário 3 */}
                            <div className="bg-[#F2FBF8] border border-[#4090eb]/10 rounded-xl shadow p-4 flex-1 max-w-sm">
                              <p className="text-[#2F3E3A] text-base mb-3">“Senti muita confiança e segurança no processo. <br/>Hoje me sinto mais preparada para enfrentar desafios.”</p>
                              <span className="text-[#4090eb] font-semibold text-sm">Juliana P.</span>
                            </div>
                          </div>
                        </div>
              <div>
                <label htmlFor="name" className="block text-[#2F3E3A] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white border border-[#4090eb]/20 text-[#2F3E3A] focus:outline-none focus:border-[#4090eb] transition-colors text-sm sm:text-base"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#2F3E3A] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white border border-[#4090eb]/20 text-[#2F3E3A] focus:outline-none focus:border-[#4090eb] transition-colors text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#2F3E3A] mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white border border-[#4FBFA5]/20 text-[#2F3E3A] focus:outline-none focus:border-[#4FBFA5] transition-colors text-sm sm:text-base"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#2F3E3A] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white border border-[#4FBFA5]/20 text-[#2F3E3A] focus:outline-none focus:border-[#4FBFA5] transition-colors resize-none text-sm sm:text-base"
                  placeholder="Sinta-se à vontade para escrever o que desejar. Sua mensagem será recebida com cuidado e sigilo."
                />
              </div>

              <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-xl border border-[#4090eb]/20">
                <Shield className="text-[#4090eb] flex-shrink-0 mt-0.5" size={16} />
                <p className="text-xs sm:text-sm text-[#6B7F79]">
                  As informações enviadas por este formulário são tratadas com total 
                  sigilo profissional.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4090eb] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full hover:bg-[#31ace6] transition-all hover:shadow-lg hover:shadow-[#4090eb]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar mensagem com cuidado
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>

          
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-8 mt-8 lg:mt-0"
          >
            <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-[#4FBFA5]/10">
              <h3 className="text-lg sm:text-2xl text-[#2F3E3A] mb-4 sm:mb-6">
                Outras formas de contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#F2FBF8] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#4090eb]" size={16} />
                  </div>
                  <div>
                    <div className="text-[#2F3E3A] font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">WhatsApp</div>
                    <a
                      href="https://wa.me/5593992402171"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4090eb] hover:underline text-xs sm:text-sm"
                    >
                      (93) 99240-2171
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#F2FBF8] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#4090eb]" size={16} />
                  </div>
                  <div>
                    <div className="text-[#2F3E3A] font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">E-mail</div>
                    <a
                      href="mailto:contato@neuropsiluizotavio.netlify.app"
                      className="text-[#4090eb] hover:underline break-all text-xs sm:text-sm"
                    >
                      contato@neuropsiluizotavio.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#F2FBF8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#4090eb]" size={16} />
                  </div>
                  <div>
                    <div className="text-[#2F3E3A] font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">Atendimento</div>
                    <p className="text-[#6B7F79] text-xs sm:text-sm">Presencial e Online</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4090eb] to-[#12d3ec] p-4 sm:p-8 rounded-2xl text-white">
              <h3 className="text-base sm:text-xl mb-2 sm:mb-4">Horário de Atendimento</h3>
              <div className="space-y-1 sm:space-y-2 text-white/90 text-xs sm:text-sm">
                <p>Terça, Quarta e Quinta: das 14h às 21h</p>
                <p>Sábados: 8h às 12h</p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                <p className="text-xs sm:text-sm text-white/80">
                  Respondo mensagens em até 24 horas úteis
                </p>
              </div>
          {/* Card: PRA QUEM É */}
          <div className="bg-white border border-[#4090eb]/20 rounded-2xl shadow-md p-4 sm:p-8 my-8">
            <div className="flex items-center mb-2">
              <h3 className="text-lg sm:text-2xl text-[#2F3E3A] font-semibold mr-2">PARA QUEM É</h3>
              {/* Ícone pode ser adicionado aqui se desejar */}
            </div>
            <p className="text-[#2F3E3A] font-medium mb-2 text-sm sm:text-base">Acompanhamento recomendado para quem:</p>
            <ul className="list-disc pl-5 text-[#6B7F79] text-sm sm:text-base space-y-2">
              <li>Procura um método estruturado, evitando apenas conversas sem foco.</li>
              <li>Quer compreender suas emoções e busca ferramentas práticas para lidar com o presente.</li>
              <li>Tem disponibilidade para manter sessões semanais, o que é fundamental para o progresso.</li>
              <li>Valoriza uma abordagem que une conhecimento técnico e acolhimento humano.</li>
            </ul>
          </div>
          {/* Card: PRA QUEM NÃO É */}
          <div className="bg-white border border-[#4090eb]/20 rounded-2xl shadow-md p-4 sm:p-8 my-8">
            <div className="flex items-center mb-2">
              <h3 className="text-lg sm:text-2xl text-[#2F3E3A] font-semibold mr-2">PARA QUEM NÃO É</h3>
              {/* Ícone pode ser adicionado aqui se desejar */}
            </div>
            <p className="text-[#2F3E3A] font-medium mb-2 text-sm sm:text-base">Não é o formato ideal se você:</p>
            <ul className="list-disc pl-5 text-[#6B7F79] text-sm sm:text-base space-y-2">
              <li>Busca apenas um apoio pontual ou orientação rápida, sem intenção de continuidade.</li>
              <li>Procura soluções imediatas ou “milagres” sem se envolver no processo terapêutico.</li>
              <li>Não consegue se comprometer com um horário semanal fixo.</li>
              <li>Espera que o terapeuta resolva tudo por você, sem sua participação ativa.</li>
            </ul>
          </div>
            </div>
            <div className="flex justify-center my-8">
              <img
                src="/LOGO_LUIZ.png"
                alt="Logotipo"
                width={400}
                height={215}
                className="object-contain"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
