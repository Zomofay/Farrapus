// REVEAL SCROLL (efeito luxo)
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


// LOGO ANIMAÇÃO
window.addEventListener('load', () => {
  document.querySelector('.logo').classList.add('active');
});


// PARALLAX SUAVE
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.getElementById('hero').style.backgroundPositionY = scroll * 0.5 + 'px';
});