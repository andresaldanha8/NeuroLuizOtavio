export function Pricing() {
  const mostrarPrecos = false;

  if (!mostrarPrecos) return null;
  return (
    <section className="w-full flex flex-col items-center py-8 bg-transparent font-sans">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-[#2F3E3A]">
        Investimento para o seu processo
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center w-full px-2">
        {/* Pacote mensal */}
        <div className="bg-[#F2FBF8] border-4 border-[#4090eb] rounded-xl shadow-lg p-4 sm:p-8 flex-1 max-w-md">
          <div className="flex flex-col items-center mb-3 sm:mb-4">
            <span className="font-bold text-lg sm:text-xl text-[#2F3E3A] mb-1 sm:mb-2">Pacote mensal</span>
            <span className="text-base sm:text-lg text-[#2F3E3A]">R$ 600 / mês</span>
            <span className="text-xs sm:text-sm text-[#4090eb]">(Equivalente a R$ 150 por sessão)</span>
          </div>
          <ul className="text-[#2F3E3A] text-sm sm:text-base mb-3 sm:mb-4">
            <li>✔ Ciclo de 4 sessões online</li>
            <li>✔ Vaga fixa garantida (Horário Nobre)</li>
            <li>✔ Direito a reagendamento (com aviso)</li>
            <li>✔ Pagamento único mensal</li>
          </ul>
        </div>
        {/* Sessão avulsa */}
        <div className="bg-[#F2FBF8] border-2 border-[#4090eb] rounded-xl shadow-md p-4 sm:p-8 flex-1 max-w-md">
          <div className="flex flex-col items-center mb-3 sm:mb-4">
            <span className="font-bold text-lg sm:text-xl text-[#2F3E3A] mb-1 sm:mb-2">Sessão avulsa</span>
            <span className="text-base sm:text-lg text-[#2F3E3A]">R$ 170 / Sessão</span>
            <span className="text-xs sm:text-sm text-[#4090eb]">(Sem garantia de vaga fixa)</span>
          </div>
          <ul className="text-[#2F3E3A] text-sm sm:text-base mb-3 sm:mb-4">
            <li>⚠ Sujeito à disponibilidade de encaixe</li>
            <li>⚠ Pagamento por sessão realizada</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 text-center text-[#2F3E3A] max-w-2xl mx-auto px-2">
        <p className="mb-2 text-xs sm:text-base">Não se preocupe com o pagamento do pacote agora. <br />Tudo começa pela Triagem de Alinhamento (R$ 30).</p>
        <p className="mb-4 text-xs sm:text-base">Esse valor serve apenas para reservar nosso horário inicial. Se você decidir seguir com o pacote mensal, os R$ 30 reais da triagem será abatido como desconto no seu pagamento.</p>
        <button
          className="bg-[#4090eb] text-[#f7fcfb] font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md hover:bg-[#2F3E3A] hover:text-[#F2FBF8] transition text-xs sm:text-base"
          onClick={() => {
            const contato = document.getElementById('contato');
            if (contato) {
              contato.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Quero Agendar a Triagem (R$ 30)
        </button>
      </div>
    </section>
  );
}
