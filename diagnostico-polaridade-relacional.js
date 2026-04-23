const checkoutLink = document.body.dataset.checkoutLink || "#aprofundamento";
const whatsappLink = document.body.dataset.whatsappLink || "#aprofundamento";

const optionScale = [
  {
    label: "Quase nunca",
    value: 0,
    hint: "Isso raramente aparece no seu momento atual."
  },
  {
    label: "Às vezes",
    value: 1,
    hint: "Esse sinal aparece, mas ainda não domina a dinâmica."
  },
  {
    label: "Com frequência",
    value: 2,
    hint: "Esse padrão já influencia sua forma de sentir e reagir."
  },
  {
    label: "Quase sempre",
    value: 3,
    hint: "Esse é um traço bem presente na sua energia relacional hoje."
  }
];

const stageContent = [
  {
    id: 1,
    label: "Leitura inicial",
    title: "Sua Postura Emocional",
    description: "Vamos começar observando como você tende a se posicionar por dentro.",
    transitionTitle: "Primeira camada concluída.",
    transitionText: "Agora vamos observar como essa energia entra na relação."
  },
  {
    id: 2,
    label: "Padrões em foco",
    title: "Sua Dinâmica na Relação",
    description: "Agora vamos perceber como essa energia aparece no vínculo com o outro.",
    transitionTitle: "Sua dinâmica relacional está ficando mais clara.",
    transitionText: "Falta pouco para identificarmos o eixo mais sensível da sua polaridade relacional."
  },
  {
    id: 3,
    label: "Síntese da polaridade",
    title: "Seu Equilíbrio de Polaridade",
    description: "Nesta última etapa, a leitura fica mais precisa sobre equilíbrio, oscilação e presença relacional."
  }
];

const questions = [
  {
    id: "q1",
    stage: 1,
    eyebrow: "Camada 1 • postura emocional",
    text: "Quando algo me incomoda, eu tendo a querer conduzir a situação em vez de apenas sentir o que estou vivendo.",
    helper: "Observe se sua primeira reação é controlar o cenário ou acolher o que está acontecendo dentro de você.",
    type: "masculine"
  },
  {
    id: "q2",
    stage: 1,
    eyebrow: "Camada 1 • postura emocional",
    text: "Eu me sinto confortável em desacelerar, receber cuidado e baixar a guarda.",
    helper: "Aqui o foco é receptividade, confiança e permissão para não sustentar tudo sozinho(a).",
    type: "feminine"
  },
  {
    id: "q3",
    stage: 1,
    eyebrow: "Camada 1 • postura emocional",
    text: "Em momentos de tensão, minha tendência é controlar o ambiente para não me sentir vulnerável.",
    helper: "Repare se a proteção aparece como rigidez, necessidade de comando ou excesso de defesa.",
    type: "masculine_imbalance"
  },
  {
    id: "q4",
    stage: 1,
    eyebrow: "Camada 1 • postura emocional",
    text: "Eu consigo expressar sensibilidade sem sentir que estou perdendo força.",
    helper: "A pergunta mede integração: sentir sem se fragilizar demais e sustentar presença sem endurecer.",
    type: "feminine"
  },
  {
    id: "q5",
    stage: 2,
    eyebrow: "Camada 2 • dinâmica relacional",
    text: "No relacionamento, normalmente sou eu quem toma a frente, decide e direciona o ritmo.",
    helper: "Pense em iniciativa, condução, direção e espaço interno que você costuma ocupar na relação.",
    type: "masculine"
  },
  {
    id: "q6",
    stage: 2,
    eyebrow: "Camada 2 • dinâmica relacional",
    text: "Eu consigo confiar no outro sem precisar monitorar tudo o tempo inteiro.",
    helper: "Aqui a leitura observa entrega saudável, segurança e capacidade de relaxar no vínculo.",
    type: "feminine"
  },
  {
    id: "q7",
    stage: 2,
    eyebrow: "Camada 2 • dinâmica relacional",
    text: "Percebo que oscilo entre querer dominar a dinâmica e, em outros momentos, me desconectar completamente.",
    helper: "Essa pergunta mede extremos: excesso de controle em um lado, afastamento ou fuga no outro.",
    type: "imbalance"
  },
  {
    id: "q8",
    stage: 2,
    eyebrow: "Camada 2 • dinâmica relacional",
    text: "Sinto que existe equilíbrio entre iniciativa, entrega, presença e troca dentro da relação.",
    helper: "Essa é a leitura global da qualidade de contraste entre os polos na relação atual.",
    type: "polarity"
  },
  {
    id: "q9",
    stage: 3,
    eyebrow: "Camada 3 • equilíbrio energético",
    text: "Tenho dificuldade em relaxar emocionalmente mesmo quando estou com alguém em quem confio.",
    helper: "Observe se o corpo e a mente continuam em estado de alerta mesmo quando a conexão parece segura.",
    type: "imbalance"
  },
  {
    id: "q10",
    stage: 3,
    eyebrow: "Camada 3 • equilíbrio energético",
    text: "Às vezes fico rígido(a), reativo(a) ou defensivo(a) quando me sinto emocionalmente exposto(a).",
    helper: "A pergunta mede quando força vira endurecimento e proteção vira fechamento.",
    type: "masculine_imbalance"
  },
  {
    id: "q11",
    stage: 3,
    eyebrow: "Camada 3 • equilíbrio energético",
    text: "Em outros momentos, percebo excesso de passividade, carência ou necessidade de validação.",
    helper: "Aqui observamos quando sensibilidade perde eixo e passa a depender demais da resposta do outro.",
    type: "imbalance"
  },
  {
    id: "q12",
    stage: 3,
    eyebrow: "Camada 3 • equilíbrio energético",
    text: "Hoje sinto que minha energia afetiva está equilibrada, viva e complementar dentro da relação.",
    helper: "Esta pergunta fecha a leitura observando o quanto há integração real entre firmeza, entrega e presença.",
    type: "feminine_polarity"
  }
];

const resultProfiles = {
  masculine: {
    pill: "Força em excesso",
    title: "Predominância masculina",
    summary:
      "Sua energia atual tende mais à condução, ação e direção. Isso pode trazer clareza e firmeza, mas corre o risco de endurecer quando controle e proteção ocupam espaço demais."
  },
  feminine: {
    pill: "Entrega sem estrutura",
    title: "Predominância feminina",
    summary:
      "Sua energia atual tende mais à sensibilidade, receptividade e entrega. Isso favorece conexão e profundidade, mas pode perder firmeza quando falta estrutura emocional para sustentar o que você sente."
  },
  mixed: {
    pill: "Equilíbrio em construção",
    title: "Energia mista",
    summary:
      "Os dois polos estão presentes de forma relativamente próxima. O ponto agora é observar se isso está virando integração saudável ou apenas oscilação em momentos de tensão."
  },
  unstable: {
    pill: "Polaridade instável",
    title: "Oscilação emocional",
    summary:
      "Seu momento atual aponta alternância entre controle, sensibilidade, afastamento e necessidade de validação. Existe energia na relação, mas ela perde consistência quando a tensão cresce."
  }
};

const attentionMap = {
  control: "Existe força, mas com risco de excesso de controle ou rigidez emocional.",
  passivity: "Existe sensibilidade, mas com pouca estrutura para sustentar sua energia com firmeza.",
  oscillation: "Há oscilação entre aproximação, defesa e afastamento, o que enfraquece presença relacional.",
  lowPolarity: "A polaridade está perdendo contraste, direção e sensação de troca viva.",
  adjustment: "Há potencial de equilíbrio, mas alguns ajustes finos ainda precisam ganhar consistência."
};

const guidanceMap = {
  control: "Observe onde você está tentando proteger demais o que precisaria ser apenas sentido com mais presença.",
  passivity: "Seu próximo passo é unir entrega com posicionamento emocional mais claro e menos dependente da resposta do outro.",
  oscillation: "Reduza os extremos e procure consistência antes de agir no impulso ou se afastar demais.",
  lowPolarity: "Fortaleça pequenos rituais de presença, conversa honesta e direção para recuperar contraste relacional.",
  adjustment: "Sustente com mais consciência a combinação entre firmeza e entrega para não perder o que já está vivo."
};

const state = {
  started: false,
  currentIndex: 0,
  answers: []
};

const elements = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindElements();
  hydrateExternalLinks();
  bindEvents();
  setupRevealOnScroll();
  updateHeaderContent(1);
  updateProgress();
}

function bindElements() {
  elements.startButtons = [
    document.getElementById("startDiagnosisButton"),
    document.getElementById("introStartButton")
  ];
  elements.prevButton = document.getElementById("prevButton");
  elements.continueButton = document.getElementById("continueButton");
  elements.stageLabel = document.getElementById("stageLabel");
  elements.stageTitle = document.getElementById("stageTitle");
  elements.stageDescription = document.getElementById("stageDescription");
  elements.stepCounter = document.getElementById("stepCounter");
  elements.progressPercent = document.getElementById("progressPercent");
  elements.progressBar = document.getElementById("progressBar");
  elements.progressStages = Array.from(document.querySelectorAll(".progress__stage"));
  elements.microStatus = document.getElementById("microStatus");
  elements.introState = document.getElementById("introState");
  elements.questionState = document.getElementById("questionState");
  elements.transitionState = document.getElementById("transitionState");
  elements.loadingState = document.getElementById("loadingState");
  elements.resultState = document.getElementById("resultState");
  elements.questionEyebrow = document.getElementById("questionEyebrow");
  elements.questionText = document.getElementById("questionText");
  elements.questionHelper = document.getElementById("questionHelper");
  elements.optionsContainer = document.getElementById("optionsContainer");
  elements.transitionPill = document.getElementById("transitionPill");
  elements.transitionTitle = document.getElementById("transitionTitle");
  elements.transitionText = document.getElementById("transitionText");
  elements.resultProfilePill = document.getElementById("resultProfilePill");
  elements.resultProfileTitle = document.getElementById("resultProfileTitle");
  elements.resultProfileSummary = document.getElementById("resultProfileSummary");
  elements.resultEnergy = document.getElementById("resultEnergy");
  elements.resultPolarity = document.getElementById("resultPolarity");
  elements.resultAttention = document.getElementById("resultAttention");
  elements.resultGuidance = document.getElementById("resultGuidance");
  elements.resultHeading = document.getElementById("resultHeading");
  elements.resultLead = document.getElementById("resultLead");
}

function bindEvents() {
  elements.startButtons.forEach((button) => {
    button?.addEventListener("click", startDiagnosis);
  });

  elements.prevButton?.addEventListener("click", handlePrevQuestion);
  elements.continueButton?.addEventListener("click", continueAfterTransition);
}

function startDiagnosis() {
  state.started = true;
  showState("question");
  renderQuestion();
}

function handlePrevQuestion() {
  if (state.currentIndex === 0) return;

  state.currentIndex -= 1;
  showState("question");
  renderQuestion();
}

function continueAfterTransition() {
  showState("question");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const answer = state.answers[state.currentIndex];

  updateHeaderContent(question.stage);
  updateProgress();

  elements.questionEyebrow.textContent = question.eyebrow;
  elements.questionText.textContent = question.text;
  elements.questionHelper.textContent = question.helper;
  elements.optionsContainer.innerHTML = "";

  optionScale.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `
      <span class="option__label">${option.label}</span>
      <span class="option__hint">${option.hint}</span>
    `;

    if (answer?.value === option.value) {
      button.classList.add("is-selected");
      button.setAttribute("aria-pressed", "true");
    }

    button.addEventListener("click", () => handleAnswer(question, option, button));
    elements.optionsContainer.appendChild(button);
  });

  elements.prevButton.disabled = state.currentIndex === 0;
  elements.microStatus.textContent = getMicroStatus(state.currentIndex, question.stage);
}

function handleAnswer(question, option, button) {
  state.answers[state.currentIndex] = {
    id: question.id,
    type: question.type,
    value: option.value,
    label: option.label
  };

  elements.optionsContainer.querySelectorAll(".option").forEach((item) => {
    item.classList.remove("is-selected");
    item.setAttribute("aria-pressed", "false");
  });
  button.classList.add("is-selected");
  button.setAttribute("aria-pressed", "true");

  window.setTimeout(() => {
    const nextIndex = state.currentIndex + 1;
    const currentStage = question.stage;
    const nextQuestion = questions[nextIndex];

    if (!nextQuestion) {
      finalizeDiagnosis();
      return;
    }

    state.currentIndex = nextIndex;

    if (nextQuestion.stage !== currentStage) {
      renderTransition(nextQuestion.stage);
      return;
    }

    renderQuestion();
  }, 180);
}

function renderTransition(nextStageId) {
  const stage = stageContent.find((item) => item.id === nextStageId - 1) || stageContent[0];
  const nextStage = stageContent.find((item) => item.id === nextStageId) || stageContent[0];

  updateProgress();
  elements.transitionPill.textContent = `${stage.label} concluída`;
  elements.transitionTitle.textContent = stage.transitionTitle;
  elements.transitionText.textContent = stage.transitionText;
  elements.microStatus.textContent = nextStage.description;
  updateHeaderContent(nextStageId);
  showState("transition");
}

function finalizeDiagnosis() {
  updateProgress(true);
  showState("loading");

  window.setTimeout(() => {
    const result = calculateDiagnosisResult();
    renderResult(result);
    showState("result");
    elements.resultState.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 850);
}

function calculateDiagnosisResult() {
  let masculineScore = 0;
  let feminineScore = 0;
  let imbalanceScore = 0;
  let polarityBaseScore = 0;

  state.answers.forEach((answer) => {
    const { type, value } = answer;

    if (type === "masculine") masculineScore += value;
    if (type === "feminine") feminineScore += value;
    if (type === "imbalance") imbalanceScore += value;
    if (type === "polarity") polarityBaseScore += value;

    if (type === "masculine_imbalance") {
      masculineScore += value;
      if (value >= 2) imbalanceScore += value;
    }

    if (type === "feminine_polarity") {
      feminineScore += value;
      polarityBaseScore += value;
    }
  });

  const energyDifference = masculineScore - feminineScore;
  const balanceGap = Math.abs(energyDifference);
  const rawPolarityScore = polarityBaseScore + (12 - imbalanceScore);

  const energy = getEnergyType(energyDifference, imbalanceScore);
  const balance = getBalanceLevel(balanceGap);
  const polarity = getPolarityLevel(rawPolarityScore);
  const attention = getAttentionPoint({
    masculineScore,
    feminineScore,
    imbalanceScore,
    balanceGap,
    rawPolarityScore
  });

  const profile = getProfileByEnergy(energy);

  return {
    energy,
    balance,
    polarity,
    attention,
    profile
  };
}

function getEnergyType(diff, imbalanceScore) {
  if (imbalanceScore >= 8) return "unstable";
  if (diff >= 3) return "masculine";
  if (diff <= -3) return "feminine";
  return "mixed";
}

function getBalanceLevel(gap) {
  if (gap <= 2) return "Equilíbrio alto";
  if (gap <= 5) return "Equilíbrio moderado";
  return "Equilíbrio baixo";
}

function getPolarityLevel(score) {
  if (score >= 15) return "Polaridade alta";
  if (score >= 10) return "Polaridade média";
  return "Polaridade baixa";
}

function getAttentionPoint(data) {
  if (data.imbalanceScore >= 8) return "oscillation";
  if (data.masculineScore > data.feminineScore && data.balanceGap >= 6) return "control";
  if (data.feminineScore > data.masculineScore && data.balanceGap >= 6) return "passivity";
  if (data.rawPolarityScore <= 9) return "lowPolarity";
  return "adjustment";
}

function getProfileByEnergy(energy) {
  return resultProfiles[energy] || resultProfiles.mixed;
}

function renderResult(result) {
  const energyLabels = {
    masculine: "Predominância masculina",
    feminine: "Predominância feminina",
    mixed: "Energia mista",
    unstable: "Oscilação emocional"
  };

  elements.resultProfilePill.textContent = result.profile.pill;
  elements.resultProfileTitle.textContent = result.profile.title;
  elements.resultProfileSummary.textContent = result.profile.summary;
  elements.resultEnergy.textContent = energyLabels[result.energy];
  elements.resultPolarity.textContent = result.polarity;
  elements.resultAttention.textContent = attentionMap[result.attention];
  elements.resultGuidance.textContent = guidanceMap[result.attention];
  elements.resultHeading.textContent = "O padrão mais presente no seu momento atual aponta uma direção importante.";
  elements.resultLead.textContent =
    `Sua leitura sugere ${energyLabels[result.energy].toLowerCase()}, ${result.balance.toLowerCase()} e ${result.polarity.toLowerCase()} na dinâmica relacional atual.`;
  elements.microStatus.textContent = "Leitura concluída. Seu resultado gratuito já está liberado abaixo.";
}

function updateHeaderContent(stageId) {
  const stage = stageContent.find((item) => item.id === stageId) || stageContent[0];
  elements.stageLabel.textContent = stage.label;
  elements.stageTitle.textContent = stage.title;
  elements.stageDescription.textContent = stage.description;

  elements.progressStages.forEach((item, index) => {
    const stageNumber = index + 1;
    item.classList.toggle("is-active", stageNumber === stageId);
    item.classList.toggle("is-complete", stageNumber < stageId);
  });
}

function updateProgress(isComplete = false) {
  const answered = state.answers.filter(Boolean).length;
  const total = questions.length;
  const visibleCount = isComplete ? total : answered;
  const percentage = isComplete ? 100 : Math.round((visibleCount / total) * 100);

  elements.stepCounter.textContent = `${visibleCount} de ${total}`;
  elements.progressPercent.textContent = `${percentage}%`;
  elements.progressBar.style.width = `${percentage}%`;
}

function getMicroStatus(index, stage) {
  if (stage === 1 && index < 2) {
    return "Sua leitura está começando a ganhar forma.";
  }

  if (stage === 1) {
    return "Alguns sinais importantes já começaram a aparecer.";
  }

  if (stage === 2 && index < 7) {
    return "Sua dinâmica relacional está ficando mais clara.";
  }

  if (stage === 2) {
    return "Falta pouco para cruzarmos os padrões mais relevantes.";
  }

  if (stage === 3 && index < 11) {
    return "Agora entramos na parte mais sensível da leitura: equilíbrio, presença e direção.";
  }

  return "Última resposta: sua síntese está quase pronta.";
}

function showState(stateName) {
  const visibilityMap = {
    intro: elements.introState,
    question: elements.questionState,
    transition: elements.transitionState,
    loading: elements.loadingState,
    result: elements.resultState
  };

  Object.values(visibilityMap).forEach((section) => {
    section.classList.add("is-hidden");
  });

  visibilityMap[stateName].classList.remove("is-hidden");
}

function hydrateExternalLinks() {
  document.querySelectorAll("[data-checkout-button]").forEach((link) => {
    link.href = checkoutLink;
    if (!checkoutLink.startsWith("#")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  document.querySelectorAll("[data-whatsapp-button]").forEach((link) => {
    link.href = whatsappLink;
    if (!whatsappLink.startsWith("#")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
}

function setupRevealOnScroll() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}
