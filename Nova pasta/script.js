// Animação simples ao rolar (caso esteja usando)
const animarElementos = () => {
  const elementos = document.querySelectorAll('.animate');
  const trigger = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    if (topo < trigger) el.classList.add('visible');
  });
};

window.addEventListener('scroll', animarElementos);
window.addEventListener('load', animarElementos);
