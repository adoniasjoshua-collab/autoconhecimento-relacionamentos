const checkoutUrl = "https://hotm.io/diagnostico-despertar-audiobook";
const whatsappUrl =
  "https://wa.me/5549992993138?text=Ol%C3%A1!%20Fiz%20o%20teste%20de%20depend%C3%AAncia%20emocional%20e%20quero%20entender%20meu%20pr%C3%B3ximo%20passo.";

const questions = [
  {
    stage: "Medo",
    eyebrow: "Fase 1 - segurança emocional",
    question: "Quando a pessoa demora a responder, o que mais acontece por dentro?",
    helper: "Observe sua reação real, não a versão que parece mais bonita.",
    options: [
      { text: "Percebo a demora, mas consigo seguir meu dia.", score: 0 },
      { text: "Fico inquieto(a), mas tento me regular antes de reagir.", score: 1 },
      { text: "Minha mente dispara e começo a imaginar rejeição, traição ou abandono.", score: 2 }
    ]
  },
  {
    stage: "Medo",
    eyebrow: "Fase 1 - medo de abandono",
    question: "Quando surge um conflito, você costuma sentir que pode perder a relação?",
    helper: "A pergunta é sobre intensidade emocional, não sobre existir amor.",
    options: [
      { text: "Não necessariamente. Consigo conversar sem entrar em pânico.", score: 0 },
      { text: "Às vezes sinto medo, mas consigo diferenciar conflito de término.", score: 1 },
      { text: "Sim. Qualquer tensão parece ameaça de abandono.", score: 2 }
    ]
  },
  {
    stage: "Limites",
    eyebrow: "Fase 2 - limites pessoais",
    question: "Como você lida quando precisa dizer não?",
    helper: "Limite saudável não é rejeição. É presença com dignidade.",
    options: [
      { text: "Digo não quando preciso, mesmo que seja desconfortável.", score: 0 },
      { text: "Digo não algumas vezes, mas ainda sinto culpa.", score: 1 },
      { text: "Evito dizer não para não decepcionar, irritar ou perder a pessoa.", score: 2 }
    ]
  },
  {
    stage: "Limites",
    eyebrow: "Fase 2 - identidade",
    question: "Quanto da sua rotina muda para caber no humor, vontade ou disponibilidade do outro?",
    helper: "Amor ajusta. Dependência apaga.",
    options: [
      { text: "Minha rotina tem flexibilidade, mas continuo tendo vida própria.", score: 0 },
      { text: "Às vezes me adapto demais e depois percebo que exagerei.", score: 1 },
      { text: "Mudo planos, prioridades e humor com frequência para não perder conexão.", score: 2 }
    ]
  },
  {
    stage: "Valor",
    eyebrow: "Fase 3 - validação",
    question: "Sua autoestima depende muito da atenção ou aprovação dessa pessoa?",
    helper: "Aqui vale pensar em mensagem, elogio, presença e demonstrações.",
    options: [
      { text: "Não muito. Gosto de receber carinho, mas meu valor não depende disso.", score: 0 },
      { text: "Depende em algumas fases, principalmente quando estou inseguro(a).", score: 1 },
      { text: "Sim. Se a pessoa se afasta, eu me sinto insuficiente ou descartável.", score: 2 }
    ]
  },
  {
    stage: "Valor",
    eyebrow: "Fase 3 - clareza",
    question: "Quando você percebe sinais ruins, qual é sua tendência?",
    helper: "Sinal ruim pode ser desrespeito, indiferença, instabilidade ou promessa repetida.",
    options: [
      { text: "Observo, converso e considero meus limites.", score: 0 },
      { text: "Demoro para agir, mas começo a reconhecer o padrão.", score: 1 },
      { text: "Justifico quase tudo para manter a relação viva.", score: 2 }
    ]
  },
  {
    stage: "Virada",
    eyebrow: "Fase 4 - autonomia emocional",
    question: "Se essa relação ficasse instável hoje, você sentiria que ainda tem chão em si mesmo(a)?",
    helper: "Chão não significa não sofrer. Significa não desaparecer.",
    options: [
      { text: "Sim. Eu sofreria, mas sei que continuo existindo inteiro(a).", score: 0 },
      { text: "Mais ou menos. Eu precisaria reorganizar minha base.", score: 1 },
      { text: "Não. Eu sentiria que perdi meu eixo, meu valor e minha direção.", score: 2 }
    ]
  }
];

const profiles = [
  {
    max: 3,
    tone: "low",
    title: "Autonomia emocional preservada",
    badge: "Base segura",
    description:
      "Seu resultado indica boa capacidade de vínculo sem perda forte de identidade. Ainda assim, vale cuidar dos pequenos sinais para que amor, rotina e limites continuem andando juntos.",
    actions: [
      "Continue mantendo rotina, vínculos e decisões próprias.",
      "Use conversas difíceis como oportunidade de maturidade, não como prova de valor.",
      "Aprofunde autoconhecimento para prevenir padrões antes que eles cresçam."
    ]
  },
  {
    max: 7,
    tone: "medium",
    title: "Alerta moderado de dependência emocional",
    badge: "Ponto de ajuste",
    description:
      "Existe vínculo, mas alguns gatilhos já mexem bastante com sua segurança interna. O foco agora é fortalecer limites, reduzir leitura ansiosa e recuperar espaço pessoal dentro da relação.",
    actions: [
      "Antes de reagir, pergunte: isso é fato ou medo contando uma história?",
      "Escolha um limite pequeno para praticar nesta semana.",
      "Use o audiobook e os diagnósticos para organizar seus padrões com mais clareza."
    ]
  },
  {
    max: 14,
    tone: "high",
    title: "Alerta alto de dependência emocional",
    badge: "Reconstrução de centro",
    description:
      "Seu resultado sugere que a relação pode estar ocupando espaço demais na sua estabilidade emocional. O próximo passo não é se culpar, nem tomar decisões no impulso. É recuperar centro, limites e leitura clara do que está acontecendo.",
    actions: [
      "Procure apoio de alguém confiável e considere suporte terapêutico se o sofrimento estiver intenso.",
      "Não negocie respeito básico para manter presença.",
      "Comece por um plano simples: regular ansiedade, reativar sua rotina e nomear os padrões repetidos."
    ]
  }
];

let state = {
  index: 0,
  answers: [],
  complete: false
};

const nodes = {};

document.addEventListener("DOMContentLoaded", () => {
  Object.assign(nodes, {
    stepLabel: document.getElementById("stepLabel"),
    progressPercent: document.getElementById("progressPercent"),
    progressBar: document.getElementById("progressBar"),
    stages: Array.from(document.querySelectorAll("[data-stage]")),
    question: document.getElementById("question"),
    options: document.getElementById("options"),
    backButton: document.getElementById("backButton"),
    resetButton: document.getElementById("resetButton"),
    scoreRing: document.getElementById("scoreRing"),
    scoreNumber: document.getElementById("scoreNumber"),
    scoreLabel: document.getElementById("scoreLabel"),
    resultSection: document.getElementById("resultado"),
    resultCard: document.getElementById("resultCard"),
    resultSide: document.getElementById("resultSide")
  });

  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    link.href = checkoutUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  nodes.backButton.addEventListener("click", goBack);
  nodes.resetButton.addEventListener("click", resetQuiz);
  render();
});

function render() {
  renderProgress();

  if (state.complete) {
    renderResult();
    return;
  }

  const current = questions[state.index];
  nodes.question.innerHTML = `
    <small>${current.eyebrow}</small>
    <h3>${current.question}</h3>
    <p>${current.helper}</p>
  `;

  nodes.options.innerHTML = "";
  current.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    if (state.answers[state.index]?.text === option.text) {
      button.classList.add("is-selected");
    }
    button.innerHTML = `
      <span class="option__letter">${String.fromCharCode(65 + optionIndex)}</span>
      <span>${option.text}</span>
    `;
    button.addEventListener("click", () => chooseOption(option));
    nodes.options.appendChild(button);
  });

  nodes.backButton.disabled = state.index === 0;
  nodes.resultSection.classList.add("is-hidden");
}

function chooseOption(option) {
  state.answers[state.index] = option;

  if (state.index === questions.length - 1) {
    state.complete = true;
    render();
    document.getElementById("resultado").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  state.index += 1;
  render();
}

function goBack() {
  if (state.index === 0) return;
  state.index -= 1;
  state.complete = false;
  render();
}

function resetQuiz() {
  state = { index: 0, answers: [], complete: false };
  render();
  document.getElementById("teste").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProgress() {
  const answered = state.complete ? questions.length : state.index;
  const percent = Math.round((answered / questions.length) * 100);
  const score = getScore();
  const maxScore = questions.length * 2;

  nodes.stepLabel.textContent = `Pergunta ${Math.min(state.index + 1, questions.length)} de ${questions.length}`;
  nodes.progressPercent.textContent = `${percent}%`;
  nodes.progressBar.style.width = `${percent}%`;
  nodes.scoreNumber.textContent = score;
  nodes.scoreLabel.textContent = `de ${maxScore} pontos de alerta`;
  nodes.scoreRing.style.setProperty("--score", `${Math.round((score / maxScore) * 360)}deg`);

  nodes.stages.forEach((stage, index) => {
    stage.classList.toggle("is-done", answered > index * 2);
    stage.classList.toggle("is-active", !state.complete && Math.floor(state.index / 2) === index);
  });
}

function renderResult() {
  const score = getScore();
  const profile = getProfile(score);
  const topTriggers = getTopTriggers();
  const shareMessage = encodeURIComponent(
    `Fiz o teste de dependência emocional e meu resultado foi: ${profile.title}. Pontuação: ${score}/${questions.length * 2}.`
  );

  nodes.resultSection.classList.remove("is-hidden");
  nodes.resultCard.dataset.tone = profile.tone;
  nodes.resultCard.innerHTML = `
    <span class="pill">${profile.badge}</span>
    <h2 class="result-title">${profile.title}</h2>
    <p>${profile.description}</p>
    <ul class="check-list">
      ${profile.actions.map((action) => `<li>${action}</li>`).join("")}
    </ul>
    <div class="result-actions">
      <a class="btn btn--primary" data-checkout-link href="${checkoutUrl}" target="_blank" rel="noopener noreferrer">Aprofundar com o audiobook</a>
      <a class="btn btn--secondary" href="autoconhecimento-para-relacionamentos.html">Ler guia pilar</a>
    </div>
  `;

  nodes.resultSide.innerHTML = `
    <h3>Seus gatilhos mais sensíveis</h3>
    <ul class="check-list">
      ${topTriggers.map((trigger) => `<li>${trigger}</li>`).join("")}
    </ul>
    <p>Use esse resultado como ponto de partida. Ele não substitui terapia, mas ajuda a nomear padrões e escolher o próximo passo com mais lucidez.</p>
    <p><a class="btn btn--ghost btn--full" href="https://wa.me/?text=${shareMessage}" target="_blank" rel="noopener noreferrer">Compartilhar resultado no WhatsApp</a></p>
    <p><a class="btn btn--ghost btn--full" data-whatsapp-link href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Tirar dúvidas</a></p>
  `;
}

function getScore() {
  return state.answers.reduce((total, answer) => total + (answer?.score || 0), 0);
}

function getProfile(score) {
  return profiles.find((profile) => score <= profile.max) || profiles[profiles.length - 1];
}

function getTopTriggers() {
  return state.answers
    .map((answer, index) => ({ answer, question: questions[index] }))
    .filter((item) => item.answer?.score > 0)
    .sort((a, b) => b.answer.score - a.answer.score)
    .slice(0, 3)
    .map((item) => `${item.question.stage}: ${item.answer.text}`);
}
