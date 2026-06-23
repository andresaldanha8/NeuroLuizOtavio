import { useState, useRef, useEffect } from 'react';
// Mensagens iniciais do bot
const initialBotMessages: Message[] = [
  {
    sender: 'bot',
    text: 'Olá! Eu sou sua atendente virtual. Estou aqui para ajudar você. 😊',
  },
  {
    sender: 'bot',
    text: 'Percebo que você pode estar ansioso(a). Respire fundo, estou aqui para apoiar você.',
  },
  {
    sender: 'bot',
    text: 'Gostaria de agendar uma consulta ou conversar um pouco antes?',
  },
];


type Message = {
  sender: 'bot' | 'user';
  text: string;
  options?: string[]; // opções para o paciente escolher
};

export function VirtualChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [awaitingOption, setAwaitingOption] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);



  // Scroll automático para a última mensagem
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Simula resposta do bot

  // Fluxo guiado de mensagens
  function handleBotResponse(userMsg: string) {
    // Sempre que for a primeira mensagem do paciente, inicia o fluxo guiado
    if (messages.filter(m => m.sender === 'user').length === 0) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            sender: 'bot',
            text: 'Olá! Eu sou sua atendente virtual. Como você está se sentindo hoje?',
            options: [
              'Quero apenas conversar',
              'Estou passando por uma crise',
              'Não estou em crise, mas preciso de apoio',
            ],
          },
        ]);
        setAwaitingOption(true);
      }, 700);
      return;
    }

    // Resposta conforme opção escolhida
    if (awaitingOption) {
      let botMsg: Message;
      if (userMsg === 'Quero apenas conversar') {
        botMsg = {
          sender: 'bot',
          text: 'Fico feliz que você tenha procurado conversar. Estou aqui para ouvir e apoiar você. Se sentir necessidade, podemos agendar uma consulta a qualquer momento. Gostaria de marcar uma consulta?',
          options: ['Sim, quero agendar', 'Não, obrigado(a)'],
        };
      } else if (userMsg === 'Estou passando por uma crise') {
        botMsg = {
          sender: 'bot',
          text: 'Sinto muito que você esteja passando por isso. Respire fundo, você não está sozinho(a). Recomendo fortemente agendar uma consulta para que eu possa ajudar você melhor. Gostaria de marcar uma consulta agora?',
          options: ['Sim, quero agendar', 'Não, obrigado(a)'],
        };
      } else if (userMsg === 'Não estou em crise, mas preciso de apoio') {
        botMsg = {
          sender: 'bot',
          text: 'É importante buscar apoio quando sentir necessidade. Estou aqui para conversar e, se quiser, podemos agendar uma consulta. Gostaria de marcar uma consulta?',
          options: ['Sim, quero agendar', 'Não, obrigado(a)'],
        };
      } else if (userMsg === 'Sim, quero agendar') {
        botMsg = {
          sender: 'bot',
          text: 'Ótimo! Clique no botão abaixo para agendar sua consulta ou envie seus dados de contato.',
        };
      } else if (userMsg === 'Não, obrigado(a)') {
        botMsg = {
          sender: 'bot',
          text: 'Tudo bem! Se mudar de ideia, estarei aqui para ajudar você. Fique à vontade para conversar sempre que quiser.',
        };
      } else {
        botMsg = {
          sender: 'bot',
          text: 'Desculpe, não entendi. Por favor, selecione uma das opções.',
        };
      }
      setTimeout(() => {
        setMessages((msgs) => [...msgs, botMsg]);
        setAwaitingOption(!!botMsg.options);
      }, 700);
      return;
    }
  }


  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((msgs) => [...msgs, { sender: 'user', text: userMsg }]);
    setInput("");
    handleBotResponse(userMsg);
  }

  function handleOptionClick(option: string) {
    setMessages((msgs) => [...msgs, { sender: 'user', text: option }]);
    setAwaitingOption(false);
    handleBotResponse(option);
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <>
      {/* Botão flutuante */}
      {!open && (
        <button
          className="fixed bottom-4 right-4 z-50 bg-[#22332E] rounded-xl shadow-lg p-3 flex items-center justify-center hover:bg-[#2F3E3A] transition sm:bottom-6 sm:right-6 sm:p-4"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat virtual"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#4090eb" />
            <rect x="7" y="10" width="10" height="2" rx="1" fill="#22332E" />
            <rect x="7" y="14" width="6" height="2" rx="1" fill="#22332E" />
          </svg>
        </button>
      )}
      {/* Popup do chat */}
      {open && (
        <div className="fixed bottom-0 right-0 left-0 mx-auto z-50 w-full max-w-[95vw] h-[90dvh] min-h-[350px] bg-[#F2FBF8] rounded-t-2xl shadow-2xl border border-[#4090eb] flex flex-col sm:bottom-6 sm:right-6 sm:left-auto sm:mx-0 sm:w-80 sm:h-[500px] sm:rounded-2xl">
          {/* Cabeçalho */}
          <div className="bg-[#22332E] rounded-t-2xl flex items-center justify-between p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#4090eb] flex items-center justify-center sm:w-8 sm:h-8">
                {/* Logo ou ícone */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#4090eb" />
                  <rect x="7" y="10" width="10" height="2" rx="1" fill="#22332E" />
                  <rect x="7" y="14" width="6" height="2" rx="1" fill="#22332E" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-[#F2FBF8] text-sm sm:text-base">Atendente Virtual</span>
                <div className="text-[10px] sm:text-xs text-[#BFD8D5]">Responderemos assim que possível</div>
              </div>
            </div>
            <button
              className="text-[#F2FBF8] text-lg hover:text-[#4090eb] transition sm:text-xl"
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
            >
              ×
            </button>
          </div>
          {/* Corpo do chat */}
          <div className="flex flex-col h-full bg-[#F5F3EF]">
            {/* Área de mensagens (scroll) */}
            <div className="flex-1 overflow-y-auto min-h-0 flex flex-col gap-2 p-2 pb-2 sm:p-4 sm:pb-2">
              {/* Aviso LGPD */}
              <div className="text-[10px] sm:text-xs text-[#6B7F79] bg-[#F2FBF8] rounded-md px-2 py-1 mb-2 border border-[#BFD8D5]">
                Seus dados não serão armazenados neste site. O contato é realizado de forma segura, conforme a LGPD.
              </div>
              {messages.map((msg, idx) => (
                <div key={idx} className={
                  msg.sender === 'bot'
                    ? 'self-start bg-[#4090eb] text-[#22332E] rounded-lg px-2 py-1 max-w-[90%] shadow text-[9px] sm:max-w-[80%] sm:text-[10px]'
                    : 'self-end bg-[#22332E] text-[#F2FBF8] rounded-lg px-2 py-1 max-w-[90%] shadow text-[9px] sm:max-w-[80%] sm:text-[10px]'
                }>
                  {msg.text}
                  {/* Renderiza opções se houver */}
                  {msg.options && (
                    <div className="flex flex-col gap-1 mt-2 sm:gap-2">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          className={`bg-white border border-[#4090eb] text-[#22332E] rounded-lg px-2 py-1 text-[9px] sm:text-[10px] transition focus:outline-none focus:ring-2 focus:ring-[#4090eb] active:bg-[#4090eb] active:text-white hover:bg-[#4090eb] hover:text-white ${awaitingOption ? '' : 'opacity-60 cursor-not-allowed'}`}
                          onClick={() => handleOptionClick(opt)}
                          disabled={awaitingOption === false}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                  {/* Botão de agendamento após mensagem final */}
                  {msg.text.includes('Clique no botão abaixo para agendar sua consulta') && (
                    <div className="mt-2 flex justify-center sm:mt-3">
                      <a
                        href="https://wa.me/5593992402171" // Substitua pelo número desejado
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#22332E] text-[#F2FBF8] rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-[#2F3E3A] transition text-xs sm:px-4 sm:text-base"
                      >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                          <path d="M16.5 3.5a7 7 0 0 1 0 14c-1.38 0-2.63-.44-3.67-1.2l-4.83 1.2 1.2-4.83A7 7 0 0 1 16.5 3.5z" stroke="#F2FBF8" strokeWidth="2" />
                        </svg>
                        Agendar pelo WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Campo de mensagem (fixo) */}
            <div className="flex gap-1 items-center px-2 pb-2 bg-[#F5F3EF] sm:gap-2 sm:px-4">
              <input
                type="text"
                placeholder="Insira a sua mensagem"
                className="flex-1 rounded-lg border border-[#BFD8D5] px-2 py-2 text-[12px] sm:text-base text-[#22332E] bg-white focus:outline-none focus:border-[#4FBFA5]"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                aria-label="Digite sua mensagem"
                disabled={awaitingOption}
              />
              <button
                className="bg-[#4090eb] text-[#22332E] rounded-lg px-2 py-2 font-bold hover:bg-[#2F3E3A] hover:text-[#F2FBF8] transition text-xs sm:px-3 sm:text-base"
                onClick={handleSend}
                aria-label="Enviar mensagem"
                disabled={awaitingOption || !input.trim()}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="#22332E" />
                </svg>
              </button>
            </div>
            {/* Botões de contato (fixos) */}
            <div className="flex gap-1 justify-center px-2 pb-3 bg-[#F5F3EF] sm:gap-2 sm:px-4 sm:pb-4">
              <button className="bg-[#22332E] text-[#F2FBF8] rounded-lg px-3 py-2 flex items-center gap-1 hover:bg-[#2F3E3A] transition text-xs sm:px-4 sm:gap-2 sm:text-base">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect x="7" y="10" width="10" height="2" rx="1" fill="#4090eb" />
                  <rect x="7" y="14" width="6" height="2" rx="1" fill="#4090eb" />
                </svg>
                Chat
              </button>
              <a
                href="https://wa.me/5593992402171"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2FBF8] text-[#22332E] border border-[#4090eb] rounded-lg px-3 py-2 flex items-center gap-1 hover:bg-[#4090eb] hover:text-[#F2FBF8] transition text-xs sm:px-4 sm:gap-2 sm:text-base"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M16.5 3.5a7 7 0 0 1 0 14c-1.38 0-2.63-.44-3.67-1.2l-4.83 1.2 1.2-4.83A7 7 0 0 1 16.5 3.5z" stroke="#22332E" strokeWidth="2" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
