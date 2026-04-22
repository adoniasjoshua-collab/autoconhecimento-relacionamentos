const checkoutLink = "https://hotm.io/diagnostico-despertar-audiobook";
const whatsappPhone = "5549992993138";
const whatsappMessage =
  "Olá! Tenho algumas dúvidas sobre a experiência Despertar com audiobook, ebook interativo, diagnóstico e plano de ação. Pode me ajudar?";
const oldPrice = "R$ 97,90";
const newPrice = "R$ 37,90";
const headlineText =
  "Autoconhecimento para relacionamentos: entenda seus padrões e receba um plano prático para agir com mais clareza";
const subheadlineText =
  "Uma experiência guiada com audiobook transformacional, ebook interativo gamificado, diagnóstico inteligente e plano de ação prático para quem quer melhorar relacionamentos, fortalecer o amor-próprio e sair do piloto automático emocional.";
const fallbackCheckoutSection = "#oferta";

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  setupFaq();
  setupScrollLinks();
  setupRevealOnScroll();
  setupStickyCta();
  setCurrentYear();
});

function applyConfig() {
  const buttons = document.querySelectorAll("[data-checkout-button]");
  const whatsappButtons = document.querySelectorAll("[data-whatsapp-button]");
  const oldPriceNodes = document.querySelectorAll("[data-old-price]");
  const newPriceNodes = document.querySelectorAll("[data-new-price]");
  const headlineNode = document.querySelector("[data-headline]");
  const subheadlineNode = document.querySelector("[data-subheadline]");
  const checkoutStatusNodes = document.querySelectorAll("[data-checkout-status]");
  const resolvedCheckoutLink = getCheckoutLink();
  const resolvedWhatsappLink = getWhatsappLink();

  buttons.forEach((button) => {
    button.setAttribute("href", resolvedCheckoutLink);

    if (resolvedCheckoutLink.startsWith("#")) {
      button.removeAttribute("target");
      button.removeAttribute("rel");
    } else {
      button.setAttribute("target", "_blank");
      button.setAttribute("rel", "noopener noreferrer");
    }
  });

  whatsappButtons.forEach((button) => {
    button.setAttribute("href", resolvedWhatsappLink);
    button.setAttribute("target", "_blank");
    button.setAttribute("rel", "noopener noreferrer");
  });

  oldPriceNodes.forEach((node) => {
    node.textContent = oldPrice;
  });

  newPriceNodes.forEach((node) => {
    node.textContent = newPrice;
  });

  if (headlineNode) {
    headlineNode.textContent = headlineText;
  }

  if (subheadlineNode) {
    subheadlineNode.textContent = subheadlineText;
  }

  const checkoutReady = !resolvedCheckoutLink.startsWith("#");
  document.body.dataset.checkoutReady = String(checkoutReady);

  checkoutStatusNodes.forEach((node) => {
    node.hidden = checkoutReady;
  });

  if (!checkoutReady) {
    console.warn(
      'Checkout não configurado. Atualize a constante "checkoutLink" em script.js com uma URL https:// válida.'
    );
  }
}

function getCheckoutLink() {
  const sanitizedLink = checkoutLink.trim();

  if (/^https?:\/\//i.test(sanitizedLink)) {
    return sanitizedLink;
  }

  return fallbackCheckoutSection;
}

function getWhatsappLink() {
  const sanitizedPhone = whatsappPhone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(whatsappMessage.trim());

  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}

function setupFaq() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((otherItem) => closeFaqItem(otherItem));

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

function closeFaqItem(item) {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) return;

  item.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
  answer.style.maxHeight = "0px";
}

function setupScrollLinks() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupRevealOnScroll() {
  const items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
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
      rootMargin: "0px 0px -40px 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
}

function setupStickyCta() {
  const stickyCta = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero");

  if (!stickyCta || !hero) return;

  const updateStickyState = () => {
    const isMobile = window.innerWidth < 960;
    const triggerPoint = hero.offsetHeight * 0.55;
    const shouldShow = isMobile && window.scrollY > triggerPoint;

    stickyCta.classList.toggle("is-visible", shouldShow);
  };

  updateStickyState();
  window.addEventListener("scroll", updateStickyState, { passive: true });
  window.addEventListener("resize", updateStickyState);
}

function setCurrentYear() {
  const yearNode = document.querySelector("[data-current-year]");

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}
