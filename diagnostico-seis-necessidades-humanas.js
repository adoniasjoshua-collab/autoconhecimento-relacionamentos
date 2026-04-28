const STORAGE_KEY = "relationship_funnel_state_v3";

const relationshipNeeds = {
  certainty: {
    label: "Certeza",
    summary:
      "Quando a certeza enfraquece, o casal começa a andar em solo escorregadio. Falta segurança para falar, ouvir e confiar que uma conversa difícil não vai terminar em guerra fria.",
    signals: [
      "Assuntos delicados ficam sendo adiados até virarem tensão acumulada.",
      "Um dos dois mede palavras o tempo todo com medo da reação do outro."
    ],
    actions: [
      "Marquem uma conversa curta, calma e objetiva sobre o ponto que está sendo evitado.",
      "Troquem acusação por descrição: menos 'você sempre', mais 'eu me senti assim'."
    ]
  },
  variety: {
    label: "Variedade",
    summary:
      "Variedade não é bagunçar a relação. É impedir que ela vire só logística, cobrança e cansaço. Amor sem leveza vira obrigação com legenda romântica.",
    signals: [
      "A rotina engoliu a criatividade e o clima do casal ficou previsível demais.",
      "Quase tudo gira em torno de tarefa, conta, agenda e problema para resolver."
    ],
    actions: [
      "Criem um pequeno ritual de novidade semanal, mesmo que simples e barato.",
      "Reintroduzam humor, flerte e surpresa de propósito, sem esperar a inspiração descer do céu."
    ]
  },
  significance: {
    label: "Importância",
    summary:
      "Todo coração quer se sentir visto, escolhido e valorizado. Quando a importância some, a crítica faz barulho e a admiração fica muda.",
    signals: [
      "O relacionamento anda mais lembrando falha do que reconhecendo acerto.",
      "Um ou os dois sentem que fazem muito e são pouco percebidos."
    ],
    actions: [
      "Voltem a verbalizar admiração por atitudes reais, não só em datas especiais.",
      "Reconheçam esforço, presença e pequenas melhorias antes de cobrar o próximo passo."
    ]
  },
  love: {
    label: "Amor e conexão",
    summary:
      "Conexão é mais do que morar junto ou mandar bom dia no automático. É sentir que o outro ainda te encontra por dentro, não só na agenda.",
    signals: [
      "Vocês convivem, mas a proximidade emocional diminuiu bastante.",
      "Falta escuta, acolhimento e aquela sensação boa de 'estamos juntos nisso'."
    ],
    actions: [
      "Separem tempo sem tela para conversar sobre o coração, não só sobre a operação da casa.",
      "Pratiquem presença simples: toque, interesse, escuta e olhar sem pressa."
    ]
  },
  growth: {
    label: "Crescimento",
    summary:
      "Casal saudável não é o que nunca erra. É o que aprende sem transformar cada falha num processo jurídico emocional.",
    signals: [
      "Os mesmos conflitos voltam porque ninguém corrige a rota de verdade.",
      "Há vontade de melhorar, mas pouca prática consistente depois da conversa."
    ],
    actions: [
      "Escolham um ajuste por vez e acompanhem durante a semana, sem querer consertar tudo numa noite.",
      "Depois de uma tensão, perguntem: 'o que essa situação está tentando nos ensinar?'"
    ]
  },
  contribution: {
    label: "Contribuição",
    summary:
      "Relacionamento amadurece quando cada um pensa no bem do vínculo, e não só no próprio cansaço. Amor também aparece em serviço, cuidado e alívio prático.",
    signals: [
      "Pequenas atitudes de cuidado ficaram raras e quase tudo parece obrigação.",
      "Um dos dois sente que entrega mais energia do que recebe em consideração."
    ],
    actions: [
      "Façam um gesto concreto de cuidado ainda hoje, sem esperar clima perfeito.",
      "Perguntem um ao outro com sinceridade: 'como eu posso aliviar sua semana?'"
    ]
  }
};

const quizQuestions = [
  {
    id: "communication",
    need: "certainty",
    eyebrow: "Pergunta sobre comunicação",
    question: "Quando surge um assunto delicado, vocês costumam...",
    helper: "Pense no que acontece de verdade, não na versão arrumadinha para visita.",
    options: [
      { label: "Conversar com respeito e tentar entender antes de rebater.", score: 0 },
      { label: "Começar bem, mas um dos dois se fecha ou muda de assunto.", score: 1 },
      { label: "Evitar, ironizar ou empurrar até virar uma bola de neve.", score: 2 }
    ]
  },
  {
    id: "connection",
    need: "love",
    eyebrow: "Pergunta sobre conexão",
    question: "No dia a dia, vocês ainda se sentem emocionalmente próximos?",
    helper: "Aqui vale pensar em presença, escuta e interesse genuíno.",
    options: [
      { label: "Sim. Há troca, carinho e sensação de parceria real.", score: 0 },
      { label: "Às vezes sim, às vezes parece que cada um está no seu mundo.", score: 1 },
      { label: "Estamos mais para colegas de rotina do que para casal conectado.", score: 2 }
    ]
  },
  {
    id: "appreciation",
    need: "significance",
    eyebrow: "Pergunta sobre admiração",
    question: "Como a admiração aparece na relação hoje?",
    helper: "Observe elogios, reconhecimento e o jeito como vocês se olham.",
    options: [
      { label: "Existe reconhecimento mútuo e valorização no cotidiano.", score: 0 },
      { label: "A admiração existe, mas anda meio soterrada pelo cansaço.", score: 1 },
      { label: "Crítica aparece mais fácil do que reconhecimento.", score: 2 }
    ]
  },
  {
    id: "attraction",
    need: "variety",
    eyebrow: "Pergunta sobre clima e rotina",
    question: "Entre rotina e atração, o relacionamento hoje está...",
    helper: "Pense no clima real da casa, não só em momentos especiais.",
    options: [
      { label: "Com leveza, brincadeira e espaço para surpresa e flerte.", score: 0 },
      { label: "Estável, mas um pouco previsível demais ultimamente.", score: 1 },
      { label: "Funcionando no modo tarefa, boletim e cansaço crônico.", score: 2 }
    ]
  },
  {
    id: "growth",
    need: "growth",
    eyebrow: "Pergunta sobre maturidade",
    question: "Quando vocês percebem um erro, normalmente...",
    helper: "Repare se a relação aprende ou só repete o mesmo roteiro.",
    options: [
      { label: "Conversamos, ajustamos e tentamos crescer com a situação.", score: 0 },
      { label: "Reconhecemos, mas nem sempre conseguimos sustentar a mudança.", score: 1 },
      { label: "Voltamos ao mesmo ponto com roupa diferente e a mesma discussão.", score: 2 }
    ]
  },
  {
    id: "contribution",
    need: "contribution",
    eyebrow: "Pergunta sobre cuidado",
    question: "Nas pequenas atitudes, o cuidado com o outro aparece como?",
    helper: "Pense em gestos práticos, atenção e disponibilidade de servir.",
    options: [
      { label: "Há intenção clara de aliviar, ajudar e cuidar um do outro.", score: 0 },
      { label: "O cuidado aparece, mas anda irregular por causa do ritmo pesado.", score: 1 },
      { label: "Cada um está tão no próprio cansaço que quase não sobra gesto.", score: 2 }
    ]
  },
  {
    id: "reconnection",
    need: "love",
    eyebrow: "Pergunta sobre reconexão",
    question: "Depois de uma tensão, como vocês costumam se reencontrar?",
    helper: "O importante aqui é observar o pós-conflito, porque ele revela maturidade.",
    options: [
      { label: "Nos procuramos, conversamos e reconstruímos a paz com honestidade.", score: 0 },
      { label: "Demora um pouco, mas aos poucos a conexão volta.", score: 1 },
      { label: "O clima fica estranho por muito tempo e ninguém sabe bem como sair disso.", score: 2 }
    ]
  },
  {
    id: "emotional_safety",
    need: "certainty",
    eyebrow: "Pergunta sobre segurança emocional",
    question: "Quando alguém fica inseguro, com ciúme ou medo, a relação costuma...",
    helper: "Observe se o casal acolhe a vulnerabilidade ou transforma tudo em defesa.",
    options: [
      { label: "Criar espaço para falar sem humilhação, ameaça ou deboche.", score: 0 },
      { label: "Tentar acolher, mas cair em justificativas ou impaciência.", score: 1 },
      { label: "Virar interrogatório, frieza, explosão ou silêncio punitivo.", score: 2 }
    ]
  },
  {
    id: "novelty_initiative",
    need: "variety",
    eyebrow: "Pergunta sobre iniciativa",
    question: "Quando a rotina pesa, vocês costumam buscar novidade como?",
    helper: "Novidade aqui pode ser simples: presença, convite, humor, passeio ou mudança de clima.",
    options: [
      { label: "Alguém propõe algo e o outro costuma entrar junto na tentativa.", score: 0 },
      { label: "Até existe vontade, mas quase sempre fica para depois.", score: 1 },
      { label: "Ninguém puxa nada e a relação segue no automático.", score: 2 }
    ]
  },
  {
    id: "respect_value",
    need: "significance",
    eyebrow: "Pergunta sobre valor pessoal",
    question: "Em momentos de discordância, você se sente tratado(a) com valor?",
    helper: "Não é sobre concordar em tudo. É sobre manter dignidade mesmo quando há conflito.",
    options: [
      { label: "Sim. Mesmo discordando, existe respeito e consideração.", score: 0 },
      { label: "Depende do assunto; às vezes o tom machuca mais que o tema.", score: 1 },
      { label: "Não muito. Eu me sinto diminuído(a), ignorado(a) ou atacado(a).", score: 2 }
    ]
  },
  {
    id: "repair_capacity",
    need: "growth",
    eyebrow: "Pergunta sobre reparação",
    question: "Depois que alguém percebe que errou, o que geralmente acontece?",
    helper: "A maturidade aparece menos na promessa e mais na reparação concreta.",
    options: [
      { label: "Há pedido de desculpas, ajuste real e esforço para não repetir.", score: 0 },
      { label: "Há desculpa, mas a mudança ainda é instável.", score: 1 },
      { label: "A pessoa se defende, minimiza ou repete como se nada tivesse acontecido.", score: 2 }
    ]
  },
  {
    id: "care_balance",
    need: "contribution",
    eyebrow: "Pergunta sobre reciprocidade",
    question: "O cuidado prático na relação parece equilibrado?",
    helper: "Pense em disponibilidade, tarefas, apoio emocional e pequenos gestos de consideração.",
    options: [
      { label: "Sim. Existe troca, parceria e vontade de aliviar a vida um do outro.", score: 0 },
      { label: "Oscila. Um cuida mais em algumas fases e isso precisa ser conversado.", score: 1 },
      { label: "Não. Parece que uma pessoa carrega muito mais do que a outra.", score: 2 }
    ]
  }
];

const questionInsights = {
  communication: [
    "A comunicação ainda funciona como ponte: vocês conseguem falar sem transformar todo assunto difícil em ameaça.",
    "A comunicação tem abertura, mas perde força quando alguém se fecha, muda de assunto ou evita sustentar a conversa.",
    "A comunicação virou ponto crítico: assuntos importantes estão sendo adiados até voltarem como acúmulo, ironia ou explosão."
  ],
  connection: [
    "A conexão emocional ainda tem presença real no cotidiano.",
    "A conexão aparece em alguns momentos, mas não está constante o bastante para sustentar segurança.",
    "A conexão parece estar mais fraca que a convivência: vocês podem estar juntos, mas pouco encontrados por dentro."
  ],
  appreciation: [
    "A admiração ainda aparece em atitudes e palavras.",
    "A admiração existe, mas está coberta por cansaço, cobranças e pouca verbalização.",
    "A necessidade de importância está gritando por reconhecimento: crítica está ocupando o lugar da valorização."
  ],
  attraction: [
    "A rotina ainda tem respiro, leveza e espaço para clima afetivo.",
    "A rotina está previsível demais e pode esfriar se ninguém trouxer intenção.",
    "A relação está funcionando como agenda: muita tarefa, pouco encontro e pouca novidade emocional."
  ],
  growth: [
    "Há capacidade de aprender com erro e ajustar a rota.",
    "Há consciência, mas a prática ainda não sustenta a mudança por tempo suficiente.",
    "O crescimento está travado porque o conflito muda de roupa, mas repete a mesma estrutura."
  ],
  contribution: [
    "O cuidado prático ainda alimenta a sensação de parceria.",
    "O cuidado existe, mas aparece de forma irregular e pode virar cobrança silenciosa.",
    "A contribuição está em alerta: cada um defende o próprio cansaço e o vínculo recebe pouco cuidado concreto."
  ],
  reconnection: [
    "Vocês têm caminho de volta depois da tensão, e isso protege o vínculo.",
    "A reconexão acontece, mas demora e deixa resíduos emocionais pelo caminho.",
    "O pós-conflito está pesado: o silêncio prolongado pode estar ensinando o casal a se afastar."
  ],
  emotional_safety: [
    "A vulnerabilidade encontra espaço suficiente para virar conversa, não ameaça.",
    "A segurança emocional oscila quando alguém tenta se explicar mais do que acolher.",
    "A certeza está muito sensível: medo, ciúme ou insegurança podem virar controle, defesa ou punição."
  ],
  novelty_initiative: [
    "Existe iniciativa para renovar o clima antes que a rotina endureça.",
    "A vontade de novidade existe, mas está perdendo para adiamento e cansaço.",
    "A variedade está baixa: sem iniciativa, a relação tende a parecer manutenção, não encontro."
  ],
  respect_value: [
    "Mesmo no desacordo, a relação preserva valor e consideração.",
    "A importância oscila quando o tom da conversa começa a ferir a dignidade.",
    "A necessidade de ser visto e respeitado está ferida: o conflito pode estar virando diminuição pessoal."
  ],
  repair_capacity: [
    "A reparação aparece em atitude, não só em desculpa.",
    "Existe intenção de reparar, mas ainda falta consistência depois da conversa.",
    "O crescimento está bloqueado por defesa, minimização ou repetição do mesmo erro."
  ],
  care_balance: [
    "A contribuição tem reciprocidade e fortalece a sensação de time.",
    "A contribuição precisa de ajuste antes que a diferença de esforço vire ressentimento.",
    "A contribuição está desequilibrada: uma pessoa pode estar carregando peso demais sozinha."
  ]
};

const needCostMap = {
  certainty: "Quando a busca por segurança vira controle, o casal ganha previsibilidade por fora e perde paz por dentro.",
  variety: "Quando a necessidade de novidade fica sem cuidado, a relação começa a procurar emoção na crise, na distância ou na irritação.",
  significance: "Quando importância vira ferida, elogio parece pouco, crítica pesa muito e a pessoa passa a disputar valor em vez de construir vínculo.",
  love: "Quando conexão falta, qualquer detalhe vira prova de abandono, desinteresse ou rejeição, mesmo quando ainda existe sentimento.",
  growth: "Quando crescimento trava, o casal aprende a pedir desculpas sem mudar estrutura, e isso desgasta confiança.",
  contribution: "Quando contribuição desequilibra, cuidado vira cobrança silenciosa e uma pessoa passa a sentir que ama carregando peso demais."
};

const needFocusPlan = {
  certainty: [
    "Escolha uma conversa evitada e transforme em pauta curta, com horário e objetivo definido.",
    "Durante 7 dias, troque defesa automática por uma pergunta: 'o que você precisa sentir para se sentir seguro(a) comigo?'"
  ],
  variety: [
    "Crie um momento simples fora do roteiro habitual, sem esperar motivação perfeita.",
    "Durante 7 dias, faça um gesto pequeno de leveza: convite, humor, toque, elogio ou mudança de ambiente."
  ],
  significance: [
    "Nomeie uma atitude real que você admira no outro e fale sem ironia, cobrança ou compensação.",
    "Durante 7 dias, observe se você está pedindo valorização com clareza ou cobrando através de crítica."
  ],
  love: [
    "Separe 20 minutos sem tela para presença real, sem resolver tudo de uma vez.",
    "Durante 7 dias, pratique uma reconexão simples depois de tensão: aproximação, escuta e reparação curta."
  ],
  growth: [
    "Escolha um comportamento repetido e defina um ajuste observável para esta semana.",
    "Durante 7 dias, acompanhe se houve mudança prática, não apenas conversa bonita."
  ],
  contribution: [
    "Faça um gesto concreto para aliviar a vida do outro sem transformar isso em crédito emocional.",
    "Durante 7 dias, pergunte uma vez: 'o que eu posso fazer para deixar sua semana menos pesada?'"
  ]
};

const quizMilestones = [
  "Missão travada",
  "Entrada liberada",
  "Leitura em andamento",
  "Padrões aparecendo",
  "Raiz ficando clara",
  "Virada emocional chegando",
  "Últimos ajustes",
  "Mapa completo"
];

const quizEnergyLevels = [
  "Energia de clareza: aguardando liberação",
  "Energia de clareza: aquecendo",
  "Energia de clareza: em leitura",
  "Energia de clareza: ganhando profundidade",
  "Energia de clareza: atravessando a raiz",
  "Energia de clareza: quase completa",
  "Energia de clareza: visão total"
];

const resultProfiles = [
  {
    id: "healthy-potential",
    maxScore: 5,
    tone: "healthy",
    title: "Relacionamento saudável com potencial",
    shareSummary: "Existe base, carinho e espaço para crescer com mais intenção.",
    description:
      "Existe base emocional, respeito e disposição para cuidar da relação. O ponto de atenção aqui não é desespero; é intencionalidade. Casal bom também enferruja quando começa a viver de suposição e pressa.",
    consequence:
      "Se vocês relaxarem demais, a rotina pode roubar aquilo que hoje ainda está saudável: leveza, admiração e presença.",
    desire:
      "Esse é o melhor momento para ajustar fino, aprofundar conversa e crescer juntos antes que o desgaste apareça.",
    audioBridge:
      "O audiobook ajuda vocês a consolidar linguagem, postura e maturidade antes que pequenos ruídos virem desgaste desnecessário."
  },
  {
    id: "almost-there",
    maxScore: 10,
    tone: "attention",
    title: "Quase lá, mas precisa ajuste",
    shareSummary: "Tem sentimento e vínculo, mas alguns ajustes precisam acontecer antes que o desgaste cresça.",
    description:
      "Tem sentimento, tem história e ainda existe espaço para reconexão. O problema é que alguns sinais já estão pedindo correção: conversa truncada, cansaço acumulado e pouca intenção nas pequenas coisas.",
    consequence:
      "Se vocês continuarem chamando isso de fase, a fase ganha raiz e depois fica bem mais difícil desfazer o hábito.",
    desire:
      "Com pequenos ajustes de linguagem, presença e gesto, a relação pode recuperar calor e direção.",
    audioBridge:
      "O audiobook entra aqui como ferramenta para organizar a conversa, recuperar consciência e colocar maturidade onde hoje existe improviso."
  },
  {
    id: "misaligned",
    maxScore: 17,
    tone: "warning",
    title: "Conectados, mas desalinhados",
    shareSummary: "Há conexão, mas o casal está fora de ritmo em comunicação, rotina e cuidado.",
    description:
      "Ainda há vínculo, mas a engrenagem está fora de fase. Um ama, o outro também, só que a comunicação, a rotina e o cuidado não estão caminhando no mesmo compasso.",
    consequence:
      "Se ninguém reposicionar isso, a relação pode seguir viva por fora e cansada por dentro, o que costuma gerar distância, irritação e sensação de solidão a dois.",
    desire:
      "O que vocês precisam agora é alinhar linguagem, reconstruir segurança emocional e reacender intenção no dia a dia.",
    audioBridge:
      "O audiobook ajuda a sair do desalinhamento com uma visão mais madura sobre diálogo, postura e responsabilidade afetiva."
  },
  {
    id: "autopilot",
    maxScore: Number.POSITIVE_INFINITY,
    tone: "critical",
    title: "Relacionamento no piloto automático",
    shareSummary: "A relação continua existindo, mas muita coisa já está sendo conduzida no automático e no cansaço.",
    description:
      "Os sinais apontam para uma relação que ainda existe, mas vem sendo conduzida por repetição, cansaço e falta de presença. Ninguém acorda planejando esfriar a relação; isso acontece quando o casal para de cuidar do invisível.",
    consequence:
      "Se nada mudar, o automático tende a cobrar caro: mais ruído, menos carinho, mais distância emocional e sensação de convivência sem encontro real.",
    desire:
      "O momento pede ruptura de padrão. Não com cena, mas com maturidade, clareza e atitude. Ainda dá para reconstruir, mas precisa começar agora.",
    audioBridge:
      "O audiobook oferece direção para sair do improviso emocional e reconstruir base, linguagem e consciência relacional."
  }
];

const defaultState = () => ({
  lead: null,
  quiz: {
    currentQuestion: 0,
    answers: [],
    result: null
  }
});

let state = loadState();
let elements = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  elements = {
    leadForm: document.getElementById("leadForm"),
    name: document.getElementById("name"),
    whatsapp: document.getElementById("whatsapp"),
    consent: document.getElementById("consent"),
    formStatus: document.getElementById("formStatus"),
    quizStatus: document.getElementById("quizStatus"),
    quizProgressBar: document.getElementById("quizProgressBar"),
    quizStepLabel: document.getElementById("quizStepLabel"),
    quizProgressPercent: document.getElementById("quizProgressPercent"),
    quizEnergyLabel: document.getElementById("quizEnergyLabel"),
    quizMilestone: document.getElementById("quizMilestone"),
    quizBadges: document.getElementById("quizBadges"),
    quizLocked: document.getElementById("quizLocked"),
    quizFlow: document.getElementById("quizFlow"),
    quizQuestion: document.getElementById("quizQuestion"),
    quizOptions: document.getElementById("quizOptions"),
    quizBackButton: document.getElementById("quizBackButton"),
    quizComplete: document.getElementById("quizComplete"),
    resetQuizButton: document.getElementById("resetQuizButton"),
    quizReward: document.getElementById("quizReward"),
    resultSection: document.getElementById("result"),
    resultCard: document.getElementById("resultCard"),
    resultSide: document.getElementById("resultSide")
  };

  hydrateExternalLinks();
  bindEvents();
  restoreLeadIntoForm();
  render();
}

function bindEvents() {
  elements.leadForm?.addEventListener("submit", handleLeadSubmit);
  elements.whatsapp?.addEventListener("input", handleWhatsappMask);
  elements.quizBackButton?.addEventListener("click", handleQuizBack);
  elements.resetQuizButton?.addEventListener("click", resetQuiz);
}

function handleLeadSubmit(event) {
  event.preventDefault();
  clearFormErrors();

  const validation = validateLeadForm();
  if (!validation.isValid) {
    showFormMessage("Revise os campos destacados para continuar.", "error");
    validation.firstInvalid?.focus();
    return;
  }

  state.lead = {
    ...validation.data,
    createdAt: state.lead?.createdAt || new Date().toISOString()
  };
  saveState();

  showFormMessage("Diagnóstico liberado. Agora responda às perguntas abaixo.", "success");
  sendLeadToWebhook(buildPayload("lead_capture"));

  render();
  scrollToSection("diagnosis");
}

function validateLeadForm() {
  const name = elements.name.value.trim();
  const whatsappRaw = elements.whatsapp.value.trim();
  const consent = elements.consent.checked;
  const whatsappDigits = onlyDigits(whatsappRaw).slice(0, 11);

  let firstInvalid = null;

  if (name.length < 2) {
    setFieldError("name", "Digite um nome válido para salvar seu diagnóstico.");
    firstInvalid = firstInvalid || elements.name;
  }

  if (!isValidBrazilPhone(whatsappDigits)) {
    setFieldError("whatsapp", "Informe um WhatsApp com DDD válido.");
    firstInvalid = firstInvalid || elements.whatsapp;
  }

  if (!consent) {
    setFieldError("consent", "Você precisa autorizar o contato para continuar.");
    firstInvalid = firstInvalid || elements.consent;
  }

  return {
    isValid: !firstInvalid,
    firstInvalid,
    data: {
      name,
      whatsapp: formatWhatsapp(whatsappDigits),
      whatsappDigits,
      consent
    }
  };
}

function setFieldError(field, message) {
  const fieldElement = document.getElementById(field);
  const errorElement = document.getElementById(`error-${field}`);

  if (fieldElement) {
    fieldElement.classList.add("is-invalid");
  }

  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearFormErrors() {
  ["name", "whatsapp", "consent"].forEach((field) => {
    document.getElementById(field)?.classList.remove("is-invalid");
    const errorElement = document.getElementById(`error-${field}`);
    if (errorElement) {
      errorElement.textContent = "";
    }
  });
}

function showFormMessage(message, type = "") {
  elements.formStatus.textContent = message;
  elements.formStatus.className = "form-status";

  if (type) {
    elements.formStatus.classList.add(type === "success" ? "is-success" : "is-error");
  }
}

function handleWhatsappMask(event) {
  event.target.value = formatWhatsapp(onlyDigits(event.target.value).slice(0, 11));
}

function render() {
  hydrateExternalLinks();
  renderLeadState();
  renderQuizState();
  renderResultState();
}

function renderLeadState() {
  if (!state.lead) {
    return;
  }

  elements.name.value = state.lead.name || "";
  elements.whatsapp.value = state.lead.whatsapp || "";
  elements.consent.checked = Boolean(state.lead.consent);

  if (!elements.formStatus.textContent) {
    showFormMessage("Seus dados já estão salvos. Você pode continuar de onde parou.", "success");
  }
}

function renderQuizState() {
  if (!state.lead) {
    elements.quizLocked.classList.remove("is-hidden");
    elements.quizFlow.classList.add("is-hidden");
    elements.quizComplete.classList.add("is-hidden");
    elements.quizStatus.textContent = "Preencha o formulário para destravar o diagnóstico.";
    updateQuizProgress(0, false, false);
    return;
  }

  if (state.quiz.result) {
    elements.quizLocked.classList.add("is-hidden");
    elements.quizFlow.classList.add("is-hidden");
    elements.quizComplete.classList.remove("is-hidden");
    elements.quizStatus.textContent = "Diagnóstico concluído. Seu resultado já está liberado abaixo.";
    updateQuizProgress(quizQuestions.length, true, true);
    updateQuizReward();
    return;
  }

  elements.quizLocked.classList.add("is-hidden");
  elements.quizComplete.classList.add("is-hidden");
  elements.quizFlow.classList.remove("is-hidden");
  elements.quizStatus.textContent =
    "Responda com honestidade. Aqui ninguém ganha ponto por parecer casal de comercial.";

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const questionIndex = Math.min(state.quiz.currentQuestion, quizQuestions.length - 1);
  const question = quizQuestions[questionIndex];
  const existingAnswer = state.quiz.answers[questionIndex];

  updateQuizProgress(questionIndex, false, true);

  animateQuizTransition(() => {
    elements.quizQuestion.innerHTML = `
      <span class="quiz-question__eyebrow">${question.eyebrow}</span>
      <h3>${question.question}</h3>
      <p>${question.helper}</p>
    `;

    elements.quizOptions.innerHTML = "";

    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";

      if (existingAnswer?.label === option.label) {
        button.classList.add("is-selected");
      }

      button.innerHTML = `
        <span class="quiz-option__index">${String.fromCharCode(65 + optionIndex)}</span>
        <span class="quiz-option__text">${option.label}</span>
      `;

      button.addEventListener("click", () => handleAnswerSelection(questionIndex, option));
      elements.quizOptions.appendChild(button);
    });
  });

  elements.quizBackButton.disabled = questionIndex === 0;
}

function animateQuizTransition(callback) {
  elements.quizFlow.classList.add("is-transitioning");
  window.setTimeout(() => {
    callback();
    requestAnimationFrame(() => {
      elements.quizFlow.classList.remove("is-transitioning");
    });
  }, 120);
}

function handleAnswerSelection(questionIndex, option) {
  state.quiz.answers[questionIndex] = {
    questionId: quizQuestions[questionIndex].id,
    need: quizQuestions[questionIndex].need,
    label: option.label,
    score: option.score
  };

  if (questionIndex === quizQuestions.length - 1) {
    completeQuiz();
    return;
  }

  state.quiz.currentQuestion = questionIndex + 1;
  saveState();
  renderQuizState();
}

function handleQuizBack() {
  if (state.quiz.currentQuestion === 0) {
    return;
  }

  state.quiz.currentQuestion -= 1;
  saveState();
  renderQuizState();
}

function completeQuiz() {
  const answers = state.quiz.answers.slice(0, quizQuestions.length);
  const totalScore = answers.reduce((total, answer) => total + answer.score, 0);
  const profile = getResultProfile(totalScore);
  const primaryNeed = getPrimaryNeed(answers);
  const secondaryNeed = getTopNeeds(answers, 2)[1] || primaryNeed;
  const strongestInsight = getStrongestAnswerInsight(answers);

  state.quiz.result = {
    profileId: profile.id,
    totalScore,
    primaryNeed,
    secondaryNeed,
    strongestInsight,
    completedAt: new Date().toISOString()
  };
  state.quiz.currentQuestion = quizQuestions.length;

  saveState();
  sendLeadToWebhook(buildPayload("quiz_completed"));

  render();
  scrollToSection("result");
}

function renderResultState() {
  if (!state.quiz.result) {
    elements.resultSection.classList.add("is-hidden");
    elements.resultCard.className = "result-card";
    elements.resultSide.className = "result-side";
    elements.resultCard.innerHTML = "";
    elements.resultSide.innerHTML = "";
    return;
  }

  const firstName = getFirstName(state.lead?.name);
  const profile = getResultProfile(state.quiz.result.totalScore);
  const primaryNeedKey = state.quiz.result.primaryNeed || getPrimaryNeed(state.quiz.answers);
  const primaryNeed = relationshipNeeds[primaryNeedKey] || relationshipNeeds.love;
  const topNeeds = getTopNeeds(state.quiz.answers, 2);
  const secondaryNeedKey = state.quiz.result.secondaryNeed || topNeeds[1] || topNeeds[0] || "growth";
  const secondaryNeed = relationshipNeeds[secondaryNeedKey] || relationshipNeeds.growth;
  const needBreakdown = getNeedBreakdown(state.quiz.answers);
  const frictionSignals = getNeedSignals(topNeeds);
  const strongestInsight = state.quiz.result.strongestInsight || getStrongestAnswerInsight(state.quiz.answers);
  const contrastInsight = getContrastInsight(needBreakdown);
  const score = state.quiz.result.totalScore;
  const shareMessage = buildResultShareMessage(profile, primaryNeed);
  const shareUrl = buildWhatsappShareUrl(shareMessage);
  const rewardBadge = getRewardBadge(profile, score);
  const maxScore = quizQuestions.length * 2;

  elements.resultSection.classList.remove("is-hidden");
  elements.resultCard.className = `result-card result-card--${profile.tone || "attention"}`;
  elements.resultSide.className = `result-side result-side--${profile.tone || "attention"}`;
  elements.resultCard.innerHTML = `
    <span class="result-card__eyebrow">Resultado liberado${firstName ? ` para ${firstName}` : ""}</span>
    <div class="result-card__badge">${rewardBadge}</div>
    <h3>${profile.title}</h3>
    <p>${profile.description}</p>
    <div class="result-card__metric">
      <strong>Necessidade mais sensível agora</strong>
      <span>${primaryNeed.label}</span>
    </div>
    <div class="result-card__metric">
      <strong>Segunda camada que influencia o quadro</strong>
      <span>${secondaryNeed.label}</span>
    </div>
    <div class="result-card__insight">
      <strong>Leitura fina do que você marcou</strong>
      <p>${strongestInsight}</p>
      <p>${contrastInsight}</p>
    </div>
    <div class="result-card__insight">
      <strong>O custo oculto desse padrão</strong>
      <p>${getNeedCost(primaryNeedKey)}</p>
    </div>
    <div class="result-card__alert">
      <strong>Se ninguém mexer nisso</strong>
      <p>${profile.consequence}</p>
    </div>
    <p>${profile.desire}</p>
    <p>Seu diagnóstico somou <strong>${score} de ${maxScore} pontos de atenção</strong>, o que mostra que essa fase merece menos improviso e mais intenção.</p>
    <div class="result-card__actions">
      <a class="btn btn--primary" data-checkout-link href="#">Ouvir o audiobook agora</a>
      <a class="btn btn--secondary" data-whatsapp-link href="#">Tirar dúvidas no WhatsApp</a>
    </div>
  `;

  elements.resultSide.innerHTML = `
    <span class="result-side__pill">Leitura personalizada</span>
    <h3>O que esse momento costuma revelar</h3>
    <ul>
      ${frictionSignals.map((signal) => `<li>${signal}</li>`).join("")}
    </ul>
    <div class="result-side__block">
      <strong>Como essa necessidade entra no relacionamento</strong>
      <p>${primaryNeed.summary}</p>
    </div>
    <div class="result-side__block">
      <strong>Mapa das 6 necessidades</strong>
      <div class="need-score-list">
        ${needBreakdown.map((need) => `
          <div class="need-score">
            <div class="need-score__top">
              <span>${need.label}</span>
              <strong>${need.score}/${need.maxScore}</strong>
            </div>
            <div class="need-score__bar" aria-hidden="true">
              <span style="width: ${need.percent}%"></span>
            </div>
            <small>${need.levelLabel}</small>
          </div>
        `).join("")}
      </div>
    </div>
    <h3>Próximos passos simples</h3>
    <ul>
      ${getPersonalizedActions(primaryNeedKey, secondaryNeedKey).map((action) => `<li>${action}</li>`).join("")}
    </ul>
    <div class="result-side__block">
      <strong>Plano de 7 dias</strong>
      <ul>
        ${getSevenDayPlan(primaryNeedKey, secondaryNeedKey).map((action) => `<li>${action}</li>`).join("")}
      </ul>
    </div>
    <div class="path-grid">
      <div class="path-card">
        <strong>Aprofundar</strong>
        <p>${profile.audioBridge}</p>
      </div>
      <div class="path-card">
        <strong>Agir com clareza</strong>
        <p>Se quiser tirar dúvidas antes de seguir, use o WhatsApp para conversar e decidir o melhor próximo passo.</p>
      </div>
    </div>
    <a class="btn btn--whatsapp btn--full" href="${shareUrl}" target="_blank" rel="noopener noreferrer">Enviar meu resultado no WhatsApp</a>
  `;

  hydrateExternalLinks();
}

function resetQuiz() {
  state.quiz = defaultState().quiz;
  saveState();
  render();
  scrollToSection("diagnosis");
}

function updateQuizProgress(questionIndex, complete = false, unlocked = false) {
  const totalQuestions = quizQuestions.length;
  const progressPercent = complete ? 100 : Math.round((questionIndex / totalQuestions) * 100);
  const visibleStep = unlocked ? Math.min(questionIndex + 1, totalQuestions) : 0;

  elements.quizProgressBar.style.width = `${progressPercent}%`;
  elements.quizProgressPercent.textContent = `${progressPercent}%`;
  elements.quizStepLabel.textContent = `Pergunta ${visibleStep} de ${totalQuestions}`;
  updateGameboardState(visibleStep, complete, unlocked);
}

function updateGameboardState(visibleStep, complete, unlocked) {
  const answeredCount = Math.min(Math.max(visibleStep - 1, 0), quizQuestions.length);
  const energyIndex = complete
    ? quizEnergyLevels.length - 1
    : Math.min(answeredCount, quizEnergyLevels.length - 2);
  const milestoneIndex = complete
    ? quizMilestones.length - 1
    : Math.min(visibleStep, quizMilestones.length - 2);

  if (elements.quizEnergyLabel) {
    elements.quizEnergyLabel.textContent = unlocked
      ? quizEnergyLevels[energyIndex]
      : quizEnergyLevels[0];
  }

  if (elements.quizMilestone) {
    elements.quizMilestone.textContent = unlocked
      ? quizMilestones[milestoneIndex]
      : quizMilestones[0];
  }

  if (!elements.quizBadges) {
    return;
  }

  const badgeUnlocks = unlocked
    ? [answeredCount >= 1, answeredCount >= 4, complete || answeredCount >= quizQuestions.length]
    : [false, false, false];

  Array.from(elements.quizBadges.children).forEach((badge, index) => {
    badge.classList.toggle("is-earned", Boolean(badgeUnlocks[index]));
  });
}

function updateQuizReward() {
  if (!elements.quizReward || !state.quiz.result) {
    return;
  }

  const profile = getResultProfile(state.quiz.result.totalScore);
  elements.quizReward.textContent = `Selo desbloqueado: ${getRewardBadge(profile, state.quiz.result.totalScore)}`;
}

function getRewardBadge(profile, score) {
  if (profile.tone === "healthy") {
    return "Base saudável com espaço para evoluir";
  }

  if (profile.tone === "attention") {
    return "Vínculo vivo, mas pedindo ajuste consciente";
  }

  if (profile.tone === "warning") {
    return "Hora da virada antes do desgaste crescer";
  }

  if (score >= 18) {
    return "Reconstrução necessária para sair do automático";
  }

  return "Leitura concluída com coragem e clareza";
}

function getResultProfile(score) {
  return resultProfiles.find((profile) => score <= profile.maxScore) || resultProfiles[resultProfiles.length - 1];
}

function getPrimaryNeed(answers) {
  return getTopNeeds(answers, 1)[0] || "love";
}

function getTopNeeds(answers, limit = 2) {
  return getNeedBreakdown(answers)
    .slice(0, limit)
    .map((need) => need.key);
}

function buildNeedTotals(answers) {
  const initialTotals = Object.keys(relationshipNeeds).reduce((accumulator, needKey) => {
    accumulator[needKey] = 0;
    return accumulator;
  }, {});

  return answers.reduce((accumulator, answer) => {
    if (!answer?.need || !Object.prototype.hasOwnProperty.call(accumulator, answer.need)) {
      return accumulator;
    }

    accumulator[answer.need] += answer.score || 0;
    return accumulator;
  }, initialTotals);
}

function getNeedBreakdown(answers) {
  const totals = buildNeedTotals(answers);
  const maxScores = buildNeedMaxScores();

  return Object.keys(relationshipNeeds)
    .map((needKey) => {
      const score = totals[needKey] || 0;
      const maxScore = maxScores[needKey] || 2;
      const percent = Math.round((score / maxScore) * 100);
      const level = getNeedLevel(percent);

      return {
        key: needKey,
        label: relationshipNeeds[needKey].label,
        score,
        maxScore,
        percent,
        level,
        levelLabel: getNeedLevelLabel(level)
      };
    })
    .sort((a, b) => {
      if (b.percent !== a.percent) {
        return b.percent - a.percent;
      }

      return b.score - a.score;
    });
}

function buildNeedMaxScores() {
  return quizQuestions.reduce((accumulator, question) => {
    accumulator[question.need] = (accumulator[question.need] || 0) + 2;
    return accumulator;
  }, {});
}

function getNeedLevel(percent) {
  if (percent >= 75) {
    return "critical";
  }

  if (percent >= 50) {
    return "warning";
  }

  if (percent >= 25) {
    return "attention";
  }

  return "stable";
}

function getNeedLevelLabel(level) {
  const labels = {
    stable: "base relativamente preservada",
    attention: "ponto de atenção leve",
    warning: "ponto sensível pedindo conversa",
    critical: "área crítica no momento"
  };

  return labels[level] || labels.attention;
}

function getStrongestAnswerInsight(answers) {
  const strongestAnswer = answers
    .filter(Boolean)
    .slice()
    .sort((a, b) => {
      if ((b.score || 0) !== (a.score || 0)) {
        return (b.score || 0) - (a.score || 0);
      }

      return quizQuestions.findIndex((question) => question.id === b.questionId)
        - quizQuestions.findIndex((question) => question.id === a.questionId);
    })[0];

  if (!strongestAnswer) {
    return "A leitura ainda precisa das respostas para identificar um padrão dominante.";
  }

  return questionInsights[strongestAnswer.questionId]?.[strongestAnswer.score]
    || "O ponto mais marcado mostra onde a conversa precisa começar com mais honestidade.";
}

function getContrastInsight(needBreakdown) {
  const highest = needBreakdown[0];
  const lowest = needBreakdown[needBreakdown.length - 1];

  if (!highest || !lowest) {
    return "Use o mapa como ponto de partida para uma conversa mais específica.";
  }

  if (highest.percent === 0) {
    return "As respostas apontam uma base preservada. O melhor uso desse diagnóstico é prevenir desgaste antes que ele ganhe força.";
  }

  if (highest.percent - lowest.percent >= 50) {
    return `O contraste entre ${highest.label} e ${lowest.label} mostra que o problema não está em tudo: existe uma área central puxando o desgaste.`;
  }

  return `Como várias áreas aparecem próximas, o foco não é procurar um culpado único; é criar um plano simples para reduzir tensão em ${highest.label} e ${needBreakdown[1]?.label || "conexão"}.`;
}

function getPersonalizedActions(primaryNeedKey, secondaryNeedKey) {
  const primaryActions = relationshipNeeds[primaryNeedKey]?.actions || [];
  const secondaryActions = relationshipNeeds[secondaryNeedKey]?.actions || [];
  const actions = [...primaryActions, ...secondaryActions];

  return [...new Set(actions)].slice(0, 4);
}

function getNeedCost(needKey) {
  return needCostMap[needKey] || "O custo oculto do padrão é continuar tentando resolver sintomas sem tocar na necessidade que organiza o comportamento.";
}

function getSevenDayPlan(primaryNeedKey, secondaryNeedKey) {
  const primaryPlan = needFocusPlan[primaryNeedKey] || [];
  const secondaryPlan = needFocusPlan[secondaryNeedKey] || [];

  return [...new Set([...primaryPlan, ...secondaryPlan])].slice(0, 4);
}

function getNeedSignals(needKeys) {
  const signals = needKeys.flatMap((needKey) => relationshipNeeds[needKey]?.signals || []);
  return signals.slice(0, 3);
}

function restoreLeadIntoForm() {
  if (!state.lead) {
    return;
  }

  elements.name.value = state.lead.name || "";
  elements.whatsapp.value = state.lead.whatsapp || "";
  elements.consent.checked = Boolean(state.lead.consent);
}

function hydrateExternalLinks() {
  syncExternalLinks("[data-checkout-link]", document.body.dataset.hotmartCheckout);
  syncExternalLinks("[data-whatsapp-link]", document.body.dataset.whatsappLink);
}

function buildResultShareMessage(profile, primaryNeed) {
  const checkoutUrl = getShareableLink(document.body.dataset.hotmartCheckout);
  const supportUrl = getShareableLink(document.body.dataset.whatsappLink);
  const pageUrl = getShareableCurrentPage();
  const practicalRecommendation = primaryNeed.actions?.[0] || "Vale conversar com calma e agir com intencionalidade.";

  const lines = [
    `Oi! Acabei de fazer um diagnóstico de relacionamento e meu resultado foi: *${profile.title}*.`,
    profile.shareSummary || profile.description,
    `A necessidade que mais pediu atenção foi *${primaryNeed.label}*.`,
    `Uma recomendação prática para agora: ${practicalRecommendation}`,
    "Se eu quiser agir hoje, tenho dois bons próximos passos:",
    checkoutUrl ? `1. Ouvir o audiobook: ${checkoutUrl}` : "1. Ouvir o audiobook e aprofundar essa mudança.",
    supportUrl ? `2. Tirar dúvidas no WhatsApp: ${supportUrl}` : "2. Falar no WhatsApp e decidir o melhor próximo passo.",
    pageUrl ? `Página do diagnóstico: ${pageUrl}` : ""
  ];

  return lines.filter(Boolean).join("\n\n");
}

function buildWhatsappShareUrl(message) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

function getShareableLink(url) {
  if (!url || /_LINK_HERE/.test(url)) {
    return "";
  }

  return url;
}

function getShareableCurrentPage() {
  if (window.location.protocol === "file:") {
    return "";
  }

  return window.location.href;
}

function syncExternalLinks(selector, url) {
  if (!url) {
    return;
  }

  document.querySelectorAll(selector).forEach((link) => {
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function buildPayload(eventType) {
  return {
    eventType,
    source: "diagnostico-seis-necessidades-humanas",
    capturedAt: new Date().toISOString(),
    lead: state.lead,
    quiz: state.quiz,
    page: {
      title: document.title,
      url: window.location.href
    }
  };
}

function sendLeadToWebhook(data) {
  // Integre aqui quando quiser enviar os dados para:
  // - n8n webhook
  // - Google Sheets / Apps Script
  // - Supabase Edge Function
  // - automação de WhatsApp
  //
  // Exemplo:
  // return fetch("https://SEU-WEBHOOK-AQUI", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data)
  // });
  void data;
}

function loadState() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) {
      return defaultState();
    }

    const parsed = JSON.parse(savedState);
    return {
      ...defaultState(),
      ...parsed,
      quiz: {
        ...defaultState().quiz,
        ...(parsed.quiz || {})
      }
    };
  } catch (error) {
    console.warn("Nao foi possível recuperar o estado salvo.", error);
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Nao foi possível salvar o estado localmente.", error);
  }
}

function onlyDigits(value) {
  return value.replace(/\D/g, "");
}

function formatWhatsapp(digits) {
  const cleanDigits = onlyDigits(digits).slice(0, 11);

  if (!cleanDigits) {
    return "";
  }

  if (cleanDigits.length <= 2) {
    return `(${cleanDigits}`;
  }

  if (cleanDigits.length <= 6) {
    return `(${cleanDigits.slice(0, 2)}) ${cleanDigits.slice(2)}`;
  }

  if (cleanDigits.length <= 10) {
    return `(${cleanDigits.slice(0, 2)}) ${cleanDigits.slice(2, 6)}-${cleanDigits.slice(6)}`;
  }

  return `(${cleanDigits.slice(0, 2)}) ${cleanDigits.slice(2, 7)}-${cleanDigits.slice(7)}`;
}

function isValidBrazilPhone(digits) {
  return digits.length >= 10 && digits.length <= 11;
}

function getFirstName(name = "") {
  return name.trim().split(/\s+/)[0] || "";
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
