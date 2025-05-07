document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".fade-in");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.animation = "fadeInUp 0.6s ease forwards";
      }, index * 200);
    });
  });
  
  // Circular progress bars for languages
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  
  // Spanish language - 75%
  styleEl.sheet.insertRule(`.language-progress:nth-child(1) {
    background: conic-gradient(#2d7788 0% 75%, #e0e0e0 75% 100%);
  }`, 0);
  
  // English language - 60%
  styleEl.sheet.insertRule(`.language-progress:nth-child(1) + .language-item .language-progress {
    background: conic-gradient(#2d7788 0% 60%, #e0e0e0 60% 100%);
  }`, 1);
  
  // Add any additional animations here
  const keyframesStyle = document.createElement("style");
  keyframesStyle.innerHTML = `
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  `;
  document.head.appendChild(keyframesStyle);
