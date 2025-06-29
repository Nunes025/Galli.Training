// Animação de scroll
const animarElementos = () => {
  const elementos = document.querySelectorAll(".animate-on-scroll")
  const trigger = window.innerHeight * 0.85

  elementos.forEach((el) => {
    const topo = el.getBoundingClientRect().top
    if (topo < trigger) {
      el.classList.add("animate-visible")
    }
  })
}

// Event listeners
window.addEventListener("scroll", animarElementos)
window.addEventListener("load", animarElementos)

// Executar animação inicial
document.addEventListener("DOMContentLoaded", () => {
  animarElementos()

  // Adicionar efeito de hover nos cards
  const cards = document.querySelectorAll(".benefit-card, .methodology-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

  // Smooth scroll para links internos
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute("href"))

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Adicionar efeito de parallax sutil nos elementos flutuantes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const floating1 = document.querySelector(".floating-1")
  const floating2 = document.querySelector(".floating-2")

  if (floating1) {
    floating1.style.transform = `translateY(${scrolled * 0.1}px)`
  }

  if (floating2) {
    floating2.style.transform = `translateY(${scrolled * -0.1}px)`
  }
})
