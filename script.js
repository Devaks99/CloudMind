const interactiveResponses = {
    gratidao: [
        "De nada! Estou aqui sempre que precisar 😊",
        "Foi um prazer ajudar! Volte quando quiser 🌟",
        "Às suas ordens! Não hesite em me chamar novamente 🤗",
        "É meu prazer ajudar! Estarei aqui quando precisar 🌈",
        "Fico feliz em ajudar! Conte comigo para o que precisar 💖"
      ],
    conselho: {
      feliz: [
        "🌟 Aproveite este momento para planejar novas metas e desafios!",
        "✨ Compartilhe sua felicidade com alguém que precise de apoio!"
      ],
      triste: [
        "💡 Tente escrever sobre seus sentimentos em um diário, pode ajudar a clarear a mente",
        "🌱 Permita-se pequenos prazeres diários, mesmo em momentos difíceis"
      ],
      ansioso: [
        "🧘 Pratique a técnica 4-7-8: Inspire por 4s, segure por 7s, expire por 8s",
        "📝 Liste 3 coisas concretas que você pode controlar nessa situação"
      ],
      raiva: [
        "⚡ Tente canalizar essa energia em atividade física ou criativa",
        "🌊 Visualize a raiva como uma onda que vem e vai embora"
      ]
    },
    positividade: {
      feliz: [
        "🌈 Sua alegria é contagiosa! Continue espalhando luz por onde passar!",
        "🎉 Cada dia é uma nova oportunidade para celebrar a vida!"
      ],
      triste: [
        "🌻 Você é mais forte do que imagina, e dias melhores virão!",
        "💎 Sua capacidade de sentir profundamente também é uma força"
      ],
      ansioso: [
        "🌅 Respire fundo, você já superou 100% dos seus dias difíceis até agora!",
        "🛡️ Você tem dentro de si todos os recursos necessários para lidar com isso"
      ],
      raiva: [
        "🌌 Esta situação não define quem você é, sua reação sim",
        "🔥 Use este fogo interno para promover mudanças positivas"
      ]
    }
  };

const motivationalTexts = {
  feliz: [
    "😊 Sorria, o mundo é mais bonito com você!",
    "🌟 A felicidade está nas pequenas coisas.",
    "✨ A alegria que você irradia é contagiante! Continue espalhando essa luz!",
    "🌱 Cada momento feliz é uma semente para um futuro ainda melhor!",
    "🎉 Sua alegria é contagiosa - continue espalhando essa luz!",
    "💎 Momentos como este são como pérolas no colar da vida",
    "🌈 A felicidade que você irradia volta para você multiplicada",
    "☀️ Guarde este momento como um raio de sol para dias nublados",
    "🧲 Você é um ímã de coisas boas - continue vibrando nesta frequência!",
    "📖 Sorria! Você está escrevendo uma linda história",
    "🎁 A vida te presenteou com este momento - saboreie cada segundo",
    "🌿 Sua positividade é como um jardim - regue-a diariamente",
    "🎯 Celebre cada pequena vitória - elas são sementes de grandes conquistas",
    "💡 Você é a prova de que a luz sempre vence a escuridão",
    "🌎 Compartilhe sua alegria - o mundo precisa mais disso",
    "🚀 Este momento feliz é só o começo de muitos que estão por vir",
    "🌀 Sua energia positiva cria um círculo virtuoso ao seu redor",
    "💼 Guarde este sentimento como um tesouro para momentos desafiadores",
    "☀️ Você é como um sol - ilumina tudo ao seu redor",
    "🤝 A felicidade verdadeira começa quando compartilhamos",
    "🌻 Cada riso seu planta uma semente de esperança no mundo",
    "🎁 Você transforma momentos comuns em memórias especiais",
    "🦸 Sua capacidade de encontrar alegria nas pequenas coisas é um superpoder",
    "🌌 Este é o universo dizendo 'sim' para você",
    "✨ Alegria compartilhada é alegria multiplicada - continue brilhando!",
    "📍 Você está no lugar certo, no momento certo, sendo exatamente quem precisa ser",
    "🌊 Sua vibração positiva está criando ondas de bem-estar ao seu redor",
    "⭐ Momentos felizes são como estrelas - mesmo passados, continuam brilhando",
    "🏆 Você merece toda essa felicidade e muito mais",
    "😊 A vida está sorrindo de volta para você",
    "🔦 Sua alegria é legítima - não minimize este momento",
    "💡 Você é um farol de positividade em um mundo que precisa de luz",
    "🛤️ Este sentimento é a prova de que coisas boas estão em seu caminho",
    "💫 Permita-se brilhar sem moderação - o mundo precisa do seu fulgor",
    "🌠 Sua felicidade inspira outros a encontrarem a deles",
    "🎉 Celebre como se cada momento fosse único - porque é!",
    "🌾 Você está colhendo o que plantou com amor - aproveite!",
    "🙌 Alegria autêntica é a melhor forma de gratidão",
    "💖 Este momento é seu - guarde-o no coração e volte a ele sempre que precisar",
    "⚡ Você transforma energia positiva em realidade",
    "💎 Sua luz interior está brilhando intensamente - continue assim!",
    "🛣️ A felicidade não é destino, é forma de viajar - e você está indo bem!",
    "🎨 Cada sorriso seu é uma obra de arte",
    "🌅 Você é a prova viva de que dias melhores sempre chegam",
    "🔮 Sua vibração elevada está atraindo mais coisas boas",
    "🌐 Permita que esta alegria se espalhe por todos os aspectos da sua vida",
    "😌 Você merece sentir-se assim - pleno, radiante e em paz",
    "🚪 Este momento feliz é só o primeiro de muitos",
    "🧭 Sua energia positiva é como bússola - está te guiando para o melhor",
    "🤗 A vida está te dando um abraço quente - sinta-o profundamente",
    "🌺 Você é um jardim em plena floração - continue cultivando!",
    "🎶 Cada risada sua é uma melodia para o universo",
    "🌱 Sua felicidade atual é resultado das sementes que plantou"
  ],

  triste: [
    "😢 Mesmo na tristeza, a esperança floresce.",
    "⛅ As nuvens mais escuras sempre passam. O sol vai brilhar para você novamente!",
    "💪 Você é mais forte do que imagina. Essa fase vai te tornar ainda mais incrível!",
    "🌌 As noites mais escuras produzem as estrelas mais brilhantes",
    "🌱 Sua dor hoje é a semente da sua força amanhã",
    "🏠 Permita-se sentir, mas não deixe que a tristeza construa sua casa",
    "🌸 Até as flores mais bonitas já estiveram enterradas na escuridão",
    "🤲 Ninguém é forte o tempo todo - está tudo bem em ter momentos frágeis",
    "💧 As lágrimas limpam a alma para que novos sentimentos possam brotar",
    "⛈️ Esta tempestade vai passar - você só precisa se manter firme até lá",
    "🌎 Sua existência já torna o mundo mais significativo",
    "🌊 A tristeza é como o mar: vem em ondas, mas sempre recua",
    "🌱 Você está colecionando forças para uma nova primavera interior",
    "🌅 Até a noite mais longa termina com o amanhecer",
    "💎 Sua capacidade de sentir profundamente é também sua maior força",
    "🕊️ Não subestime o poder de um simples 'isso vai passar'",
    "🛡️ As cicatrizes são provas de que você continuou lutando",
    "✨ Você não está sozinho - até as estrelas brilham juntas na escuridão",
    "🎯 A vida te deu este desafio porque sabe que você é capaz de superá-lo",
    "👣 Cada passo, por menor que seja, é uma vitória contra a escuridão",
    "📖 Sua história ainda está sendo escrita - este é só um capítulo difícil",
    "🌞 A esperança é como o sol: se você não consegue vê-la, ela ainda está lá",
    "🦸 Você é mais resiliente do que imagina - já sobreviveu a 100% dos seus dias difíceis",
    "🩹 Não existe cura sem primeiro reconhecer a ferida",
    "⏳ Permita que o tempo trabalhe a seu favor",
    "🍃 Até as árvores perdem suas folhas, mas nunca esquecem de voltar a florescer",
    "🕯️ Sua luz interior nunca se apaga - às vezes só precisa de um pouco de oxigênio",
    "🌬️ Cada respiração é uma prova de que você ainda está no controle",
    "📍 A vida te colocou neste momento, mas não vai te deixar aqui",
    "🏅 Você é um sobrevivente - olhe para trás e veja quantas batalhas já venceu",
    "🧠 A cura não significa esquecer - significa aprender a conviver com sabedoria",
    "🔄 Nenhum sentimento é permanente - isso também vai se transformar",
    "💎 Você é como um diamante: formado sob pressão, mas incrivelmente valioso",
    "🌋 Até os vulcões precisam liberar sua dor para criar novas terras férteis",
    "⏸️ Sua jornada não termina aqui - isso é apenas um intervalo",
    "🦸 A coragem não é a ausência de medo, mas a decisão de seguir em frente apesar dele",
    "🔧 Você não está quebrado - está em processo de reconstrução",
    "🎭 As melhores histórias têm reviravoltas inesperadas - a sua também terá",
    "🕯️ Guarde esperança como quem guarda uma pequena chama em dia de vento",
    "💪 Cada dia que você enfrenta é uma prova da sua força interior",
    "🌪️ A tempestade não vem para te destruir, mas para limpar o caminho",
    "🎨 Você é a soma de todas as suas lutas e vitórias - e isso é lindo",
    "🏊 Nenhuma emoção pode te afogar se você aprender a nadar entre as ondas",
    "❄️ Até o inverno mais rigoroso se rende à primavera",
    "❤️ Sua vulnerabilidade não é fraqueza - é humanidade em sua forma mais pura",
    "🦋 Você está passando por transformação, não por destruição",
    "🌳 As raízes mais fortes são formadas nos solos mais difíceis",
    "🌅 Nenhuma noite conseguiu vencer o sol até agora - confie no amanhecer",
    "🔮 Sua dor atual não define seu futuro",
    "🔦 Você é um farol na própria tempestade - continue brilhando",
    "🧘 A cura vem em camadas - permita-se sentir uma de cada vez",
    "🌊 Até os rios mais tortuosos encontram seu caminho para o mar",
    "💖 Sua existência importa mais do que qualquer momento difícil",
    "🔄 Você não está caindo - está se reerguendo de forma diferente"
  ],

  ansioso: [
    "😰 Um passo de cada vez. Você está exatamente onde precisa estar!",
    "🕰️ A vida é um processo. Confie no seu caminho e no seu tempo!",
    "⚡ A ansiedade é passageira, você é forte!",
    "🌬️ Respire fundo - você está seguro neste momento",
    "👣 Um passo de cada vez é ainda progresso",
    "🧠 Sua mente é uma ferramenta poderosa - direcione-a com cuidado",
    "⏳ Este sentimento é temporário - você já sobreviveu a outros",
    "🧘 Ancorando no presente: O que você vê? Ouve? Sente?",
    "❓ Você não precisa ter todas as respostas agora",
    "🎲 A incerteza é espaço para possibilidades",
    "🦸 Sua coragem é maior que qualquer medo",
    "⏸️ Pare por um instante - observe sua respiração",
    "💪 Você está construindo força para lidar com qualquer desafio",
    "🔍 A mente amplia os medos - o presente os reduz",
    "💼 Você tem dentro de si todos os recursos necessários",
    "⛈️ Nenhuma tempestade dura para sempre",
    "🎯 Concentre-se no que está sob seu controle agora",
    "⏱️ Cada minuto que passa é uma vitória",
    "🦸 Você é mais resiliente do que imagina",
    "📆 Ansiedade é excesso de futuro - volte ao agora",
    "📈 Este desconforto está te preparando para novos níveis",
    "🤝 Você não está sozinho nesta jornada",
    "🧘 Permita-se sentir sem julgamentos",
    "⚓ Sua respiração é âncora - use-a",
    "🎯 Pequenas ações superam grandes preocupações",
    "🏆 Você já enfrentou dias difíceis antes - tem experiência",
    "🧘 A calma está dentro de você - encontre-a na respiração",
    "🛡️ Preocupação não evita problemas - preparação sim",
    "🌊 Você está aprendendo a navegar em águas turbulentas",
    "☁️ Momentos de paz estão disponíveis entre os pensamentos",
    "🦋 Sua jornada é única - não compare com outros",
    "⏳ O poder do agora é seu maior aliado",
    "🌊 Cada onda de ansiedade também recua",
    "🛡️ Você está seguro, protegido e capaz",
    "🌤️ A mente é como o céu - os pensamentos são nuvens passageiras",
    "📶 Foque no próximo passo, não em toda a escada",
    "💪 Você está construindo músculos emocionais",
    "🌌 A quietude interior existe abaixo da superfície agitada",
    "📨 Este desconforto é mensageiro - ouça com curiosidade",
    "🌬️ Sua respiração é prova de que você continua",
    "🔄 Nada permanece - nem mesmo a ansiedade",
    "💯 Você tem um histórico de 100% de superação",
    "🧘 Acalme o corpo e a mente seguirá",
    "🏄 Pense em você como um surfista navegando nas ondas",
    "💎 Sua capacidade de sentir profundamente também é força",
    "🎯 O presente é seu ponto de poder - habite-o",
    "⚡ Ansiedade é energia - direcione-a para ações pequenas",
    "⚓ Você está aprendendo a ser seu próprio porto seguro",
    "🎖️ Cada momento vivido é uma conquista",
    "🦸 A coragem não é ausência de medo, mas ação apesar dele",
    "💡 Você tem recursos internos que nem conhece ainda",
    "⏳ Esta sensação vai passar - você sabe disso",
    "🌟 Sua jornada é importante, mesmo nos dias difíceis"
  ],

  raiva: [
    "😡 Respire fundo. Você tem o poder de transformar essa energia em algo positivo!",
    "🧘 A calma é sua maior aliada. Você consegue encontrar a solução!",
    "⚡ A raiva é energia - direcione-a para mudanças positivas",
    "🌬️ Respire antes de reagir - você está no controle",
    "🔄 Este sentimento não te define - é passageiro",
    "🔥 Use este fogo para transformar, não para queimar",
    "💪 Sua força interior é maior que qualquer emoção turbulenta",
    "🧘 A calma é superpoder - encontre-a na sua respiração",
    "🕊️ Você merece paz - não deixe a raiva roubá-la",
    "👣 Reconhecer a raiva já é o primeiro passo para dominá-la",
    "💡 Esta energia pode ser canalizada para soluções criativas",
    "🌊 Você é mais forte que qualquer onda emocional",
    "📢 A raiva mostra seus limites - ouça sua mensagem",
    "⏸️ Pausa. Respira. Responde. (Não reage)",
    "🛡️ Sua integridade não depende de reações imediatas",
    "🎭 Este sentimento é válido, mas não precisa te controlar",
    "💎 A verdadeira força está no autocontrole",
    "🤲 Você tem direito de sentir, mas escolhe como expressar",
    "💣 Raiva não resolvida vira veneno - transforme-a em ação",
    "🧠 Sua clareza mental é seu maior trunfo",
    "🌊 Águas turbulentas sempre se acalmam com tempo",
    "🌱 Você é jardineiro das suas emoções - cultive a paz",
    "⛈️ Esta tempestade emocional vai passar",
    "🚫 Não deixe que ações momentâneas estraguem resultados duradouros",
    "🧘 Sua paz interior vale mais que qualquer discussão",
    "📨 Raiva é mensageira - descubra qual necessidade ela traz",
    "🗣️ Você merece expressar-se com calma e clareza",
    "🕰️ Nenhuma emoção pode durar para sempre",
    "💎 Sua energia é preciosa - não desperdice com o que não merece",
    "👐 Respire fundo - o controle está em suas mãos",
    "🎭 Esta situação não define você - sua resposta sim",
    "⚒️ Transforme metal quente em ferramentas úteis",
    "🏆 A verdadeira vitória está em manter sua integridade",
    "🤔 Você tem poder de escolha sobre suas reações",
    "😌 A calma é contagiante - seja paciente consigo mesmo",
    "📈 Sua inteligência emocional está em desenvolvimento",
    "🌱 Este momento difícil está te ensinando resiliência",
    "⚖️ Não existe batalha que valha sua paz interior",
    "🌪️ Você está aprendendo a navegar emoções complexas",
    "⛽ Raiva bem direcionada vira combustível para mudanças",
    "❤️ Sua capacidade de perdoar começa por si mesmo",
    "🚷 Nenhuma pessoa ou situação merece seu descontrole",
    "🎓 Você está construindo mestria emocional",
    "🖌️ A paciência é arte que se aprende praticando",
    "🔋 Sua energia é sagrada - proteja-a",
    "🔄 Este sentimento vai passar - confie no processo",
    "🧘 Você merece relacionar-se com sua própria calma",
    "💎 A verdadeira força está na serenidade",
    "💸 Reações impulsivas são dívidas emocionais",
    "⚔️ Sua clareza mental é arma contra a irritação",
    "🌱 Respire fundo - você está crescendo com isso",
    "🚀 Esta experiência está te preparando para novos níveis"
  ]
};
  

let currentChat = {
  id: Date.now(),
  name: 'Novo Chat',
  messages: [],
  currentSentiment: null 
};

// Elementos DOM
const elements = {
  chatHistory: document.getElementById('chat-history'),
  chatForm: document.getElementById('chat-form'),
  userMessage: document.getElementById('user-message'),
  sentiment: document.getElementById('sentiment'),
  sessionList: document.getElementById('session-list'),
  newChatBtn: document.querySelector('.new-chat-btn'),
  themeToggle: document.querySelector('.theme-toggle'),
  scrollButton: document.querySelector('.scroll-bottom'),
  menuToggle: document.querySelector('.menu-toggle'),
  sidebar: document.querySelector('.sidebar'),
  mobileHeader: document.querySelector('.mobile-header'),
  mobileThemeToggle: document.querySelector('.mobile-theme-toggle')
};

// Funções principais
function initialize() {
  loadTheme();
  setupEventListeners();
  renderChatSessions();
  loadFirstChat();
}

function setupEventListeners() {
  elements.chatForm.addEventListener('submit', handleSubmit);
  elements.newChatBtn.addEventListener('click', createNewChat);
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.chatHistory.addEventListener('scroll', handleScroll);
  elements.scrollButton.addEventListener('click', scrollToBottom);
  elements.menuToggle.addEventListener('click', toggleSidebar);
  elements.mobileThemeToggle.addEventListener('click', toggleTheme);
}

function toggleSidebar() {
    elements.sidebar.classList.toggle('mobile-active');
  }

function handleSubmit(e) {
    e.preventDefault();
    const message = elements.userMessage.value.trim();
    const sentiment = elements.sentiment.value;
  
    
    if (sentiment) {
      currentChat.currentSentiment = sentiment;
      elements.sentiment.value = ""; // Limpa o select após seleção
    }
  
    if (!currentChat.currentSentiment) {
      alert("Selecione um sentimento primeiro!");
      return;
    }
  
    if (message) {
      const response = generateResponse(message, currentChat.currentSentiment);
      addMessage(message, currentChat.currentSentiment, response);
      elements.userMessage.value = "";
      saveChat();
    }
  }

  function generateResponse(message, sentiment) {
    const lowerMsg = message.toLowerCase();
    
    // Verifica agradecimentos primeiro
    if (lowerMsg.includes('obrigado') || lowerMsg.includes('agradeço') || lowerMsg.includes('obrigada')) {
      const gratidao = interactiveResponses.gratidao;
      return gratidao[Math.floor(Math.random() * gratidao.length)];
    }
  
    if (lowerMsg.includes('conselho') || lowerMsg.includes('ajuda')) {
      return getInteractiveResponse('conselho', sentiment);
    }
    
    if (lowerMsg.includes('positiv') || lowerMsg.includes('encorajar')) {
      return getInteractiveResponse('positividade', sentiment);
    }
    
    return getMotivationalText(sentiment);
  }
  
  
  function getInteractiveResponse(type, sentiment) {
    const responses = interactiveResponses[type]?.[sentiment] || [];
    return responses[Math.floor(Math.random() * responses.length)] || getMotivationalText(sentiment);
  }

function getMotivationalText(sentiment) {
  const texts = motivationalTexts[sentiment];
  return texts?.[Math.floor(Math.random() * texts.length)] || "";
}

function addMessage(userMsg, sentiment, response) {
    const message = {
        userMessage: userMsg,
        sentiment,
        motivationalMessage: response,
        timestamp: new Date().toLocaleTimeString()
    };
    
    currentChat.messages.push(message);
    renderMessage(message);
    
    // Scroll suave garantido para a última mensagem do sistema
    setTimeout(() => {
        const systemMessages = document.querySelectorAll('.system-message');
        const lastSystemMessage = systemMessages[systemMessages.length - 1];
        
        if (lastSystemMessage) {
            lastSystemMessage.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
    }, 100);
}

  function renderMessage(message) {
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    userDiv.innerHTML = `<p>${message.userMessage}</p><small>${message.timestamp}</small>`;
  
    const systemDiv = document.createElement('div');
    systemDiv.className = 'message system-message';
    
    // Verifica se é resposta de agradecimento
    const isThankYou = interactiveResponses.gratidao.includes(message.motivationalMessage);
    
    systemDiv.innerHTML = `
      <p>${message.motivationalMessage}</p>
      <small>🤖 Byte ${!isThankYou ? `${message.sentiment.toUpperCase()} • ` : ''}${message.timestamp}</small>
    `;
  
    elements.chatHistory.append(userDiv, systemDiv);
  }

// Funções de chat
function createNewChat() {
    const chatName = prompt('Nome do novo chat:', `Chat ${Date.now().toString().slice(-4)}`);
    currentChat = {
      id: Date.now(),
      name: chatName || `Chat ${Date.now().toString().slice(-4)}`,
      messages: [],
      currentSentiment: null 
    };
    elements.chatHistory.innerHTML = '';
    saveChat();
    elements.sidebar.classList.remove('mobile-active');
  }

function renderChatSessions() {
  const chats = getChats();
  elements.sessionList.innerHTML = chats.map(chat => `
    <li class="chat-item" data-id="${chat.id}">
      <span>${chat.name}</span>
      <button class="delete-btn">🗑️</button>
    </li>
  `).join('');

  document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-btn')) {
        loadChat(item.dataset.id);
      }
    });
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteChat(e.target.closest('.chat-item').dataset.id);
    });
  });
}

// Funções de armazenamento
function getChats() {
  return JSON.parse(localStorage.getItem('chats')) || [];
}

function saveChat() {
  const chats = getChats();
  const index = chats.findIndex(c => c.id === currentChat.id);
  
  if (index > -1) {
    chats[index] = currentChat;
  } else {
    chats.push(currentChat);
  }
  
  localStorage.setItem('chats', JSON.stringify(chats));
  renderChatSessions();
}

function loadChat(chatId) {
  const chats = getChats();
  const numericId = Number(chatId);
  const chat = chats.find(c => c.id === numericId);
  
  if (chat) {
    currentChat = chat;
    elements.chatHistory.innerHTML = '';
    chat.messages.forEach(renderMessage);
    elements.sidebar.classList.remove('mobile-active');
  }
}

function loadFirstChat() {
  const chats = getChats();
  if (chats.length > 0) {
    loadChat(chats[0].id);
  }
}

function deleteChat(chatId) {
  let chats = getChats().filter(c => c.id !== Number(chatId));
  localStorage.setItem('chats', JSON.stringify(chats));
  
  if (currentChat.id === Number(chatId)) {
    currentChat = { 
      id: Date.now(), 
      name: 'Novo Chat', 
      messages: [] 
    };
    elements.chatHistory.innerHTML = '';
  }
  renderChatSessions();
}

// Funções de Tema
function toggleTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Fecha o menu após a seleção
    if (window.innerWidth <= 768) {
        elements.sidebar.classList.remove('mobile-active');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = elements.chatHistory;
  elements.scrollButton.style.display = 
    (scrollHeight - (scrollTop + clientHeight)) > 100 ? 'flex' : 'none';
}

function scrollToBottom() {
  elements.chatHistory.scrollTo({
    top: elements.chatHistory.scrollHeight,
    behavior: 'smooth'
  });
}

// Inicialização
function initialize() {
    loadTheme();
    setupEventListeners();
    renderChatSessions();
    loadFirstChat();
}

document.addEventListener('DOMContentLoaded', initialize);