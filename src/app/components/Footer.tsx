export function Footer() {
  return (
    <footer className="bg-[#4090eb] text-[#F2FBF8] py-6 px-2 sm:py-8 sm:px-4 font-sans text-center">
      <div className="max-w-xl mx-auto">
        <div className="mb-3 text-sm sm:text-lg font-semibold">
          Horário de Suporte e Agendamento:<br />
          Terça, Quarta e Quinta: das 14h às 21h<br />
          Sábados: 08h às 12h
        </div>
        <div className="text-[10px] sm:text-sm text-[#BFD8D5]">
          Atenção: Este serviço não oferece atendimento de emergência psicológica. Em caso de crise suicida, surto ou risco à vida, procure o hospital mais próximo ou ligue para o CVV (188).
        </div>
      </div>
    </footer>
  );
}