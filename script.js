const translationCircle = document.querySelector('.translation');
const rubyCircle = document.querySelector('.ruby');
const udemyCircle = document.querySelector('.udemy');
const laboratoriaCircle = document.querySelector('.laboratoria');
const developmentCircle = document.querySelector('.development');

const contentParagraph = document.querySelector('.aboutMe-content');

translationCircle.addEventListener('click', () => {
  translationCircle.classList.add('active-svg-circle');
  rubyCircle.classList.remove('active-svg-circle');
  udemyCircle.classList.remove('active-svg-circle');
  laboratoriaCircle.classList.remove('active-svg-circle');
  developmentCircle.classList.remove('active-svg-circle');

  contentParagraph.textContent = "";
  contentParagraph.textContent = "Soy traductora inglés-español de profesión, pero ahora estoy totalmente enfocada en la programación. Poseo una base sólida de HTML5, CSS3, Vanilla Javascript y React, y me interesan tanto las tecnologías de Front-End como las de Back-End.";
})

rubyCircle.addEventListener('click', () => {
  rubyCircle.classList.add('active-svg-circle');
  translationCircle.classList.remove('active-svg-circle');
  udemyCircle.classList.remove('active-svg-circle');
  laboratoriaCircle.classList.remove('active-svg-circle');
  developmentCircle.classList.remove('active-svg-circle');
  contentParagraph.textContent = "";
  contentParagraph.textContent = "Durante el 2019 participé de un bootcamp de desarrollo full-stack, en el que aprendí bastante de programación y desarrollo a nivel global, además de aprender a trabajar con Ruby on Rails.";
})

udemyCircle.addEventListener('click', () => {
  udemyCircle.classList.add('active-svg-circle');
  translationCircle.classList.remove('active-svg-circle');
  rubyCircle.classList.remove('active-svg-circle');
  laboratoriaCircle.classList.remove('active-svg-circle');
  developmentCircle.classList.remove('active-svg-circle');
  contentParagraph.textContent = "";
  contentParagraph.textContent = "A principios del 2020 completé el curso Complete Javascript en Udemy lo que me brindó una fuerte base de vanilla javascript. Desde entonces, he realizado varios cursos en plataformas como Udemy, Front-End Masters y Ui.dev para potenciar mi aprendizaje autodidacta.";
})

laboratoriaCircle.addEventListener('click', () => {
  laboratoriaCircle.classList.add('active-svg-circle');
  translationCircle.classList.remove('active-svg-circle');
  rubyCircle.classList.remove('active-svg-circle');
  udemyCircle.classList.remove('active-svg-circle');
  developmentCircle.classList.remove('active-svg-circle');
  contentParagraph.textContent = "";
  contentParagraph.textContent = "En marzo del 2020 empecé a estudiar desarrollo front-end de manera más estructurada a través del bootcamp de Laboratoria, durante el cual trabajé en equipo junto a mis compañeras para desarrollar distintas aplicaciones web.";
})

developmentCircle.addEventListener('click', () => {
  developmentCircle.classList.add('active-svg-circle');
  translationCircle.classList.remove('active-svg-circle');
  rubyCircle.classList.remove('active-svg-circle');
  udemyCircle.classList.remove('active-svg-circle');
  laboratoriaCircle.classList.remove('active-svg-circle');
  contentParagraph.textContent = "";
  contentParagraph.textContent = "Hoy, me siento totalmente preparada para comenzar a trabajar como desarrolladora, con la confianza de que podré enfrentar adecuadamente los desafíos que se me presenten y con muchas ganas de continuar aprendiendo.";
})

// Skills

const skillsNavbar = document.querySelector('#skills-navbar');

console.log(skillsNavbar)

const strongBasics = skillsNavbar.children[0];
const notions = skillsNavbar.children[1];
const interest = skillsNavbar.children[2];
console.log(strongBasics, notions, interest);

const strongBasicsContent = document.querySelector('#strong-basics-option');
const notionsContent = document.querySelector('#notions-option');
const interestContent = document.querySelector('#interest-option');

console.log(strongBasicsContent, notionsContent, interestContent);
const skillsNavbarArray = Array.from(skillsNavbar.children);

skillsNavbarArray.forEach((option) => {
  option.addEventListener('click', (event) => {    
    if (event.target.innerText === "Base sólida") {
      event.target.classList.add('active-option')
      notions.classList.remove('active-option');
      interest.classList.remove('active-option');

      strongBasicsContent.classList.replace('hidden', 'active');
      notionsContent.classList.replace('active', 'hidden');
      interestContent.classList.replace('active', 'hidden');
    } else if (event.target.innerText === "Nociones") {
      event.target.classList.add('active-option');
      strongBasics.classList.remove('active-option');
      interest.classList.remove('active-option');

      notionsContent.classList.replace('hidden', 'active');
      strongBasicsContent.classList.replace('active', 'hidden');
      interestContent.classList.replace('active', 'hidden');
    } else {
      event.target.classList.add('active-option');
      strongBasics.classList.remove('active-option');
      notions.classList.remove('active-option');

      interestContent.classList.replace('hidden', 'active');
      notionsContent.classList.replace('active', 'hidden');
      strongBasicsContent.classList.replace('active', 'hidden');
    }

  })
})
