// Animate project cards on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".project-card").forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight - 50) {
        card.classList.add("animate-in");
      }
    });
  });
  
  