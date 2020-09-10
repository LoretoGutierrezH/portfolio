// ABLE/DISABLE SVG ACCORDING TO VIEWPORT SIZE
const viewPortWidth = document.documentElement.clientWidth;
const desktopSVG = document.querySelector('#desktop-svg');
const mobileSVG = document.querySelector('#mobile-svg');

if (viewPortWidth > 425) {
  desktopSVG.classList.replace('hidden', 'active-svg');
  mobileSVG.classList.add('hidden');
} else {
  desktopSVG.classList.replace('active-svg', 'hidden');
  mobileSVG.classList.replace('hidden', 'active-svg');
}
// SVG CIRCLE ACTIVATION AND SHOW/HIDE ABOUT ME CONTENT
const translationCircle = document.querySelectorAll('.translation');
const rubyCircle = document.querySelectorAll('.ruby');
const udemyCircle = document.querySelectorAll('.udemy');
const laboratoriaCircle = document.querySelectorAll('.laboratoria');
const developmentCircle = document.querySelectorAll('.development');
const extraInfoCircle = document.querySelector('.extra-info');
const contentParagraph = document.querySelector('.aboutMe-content');

translationCircle.forEach((circle) => {
  circle.addEventListener('click', () => {
    circle.classList.add('active-svg-circle');
    const inactiveCircles = [...rubyCircle, ...udemyCircle, ...laboratoriaCircle, ...developmentCircle];
    inactiveCircles.forEach(inactiveCircle => {
      inactiveCircle.classList.remove('active-svg-circle');
    })
    extraInfoCircle.classList.remove('active-svg-circle');
    
    contentParagraph.textContent = "";
    contentParagraph.textContent = "Soy traductora inglés-español de profesión, pero ahora estoy totalmente enfocada en la programación. Poseo una base sólida de HTML5, CSS3, Vanilla Javascript y React, y me interesan tanto las tecnologías de Front-End como las de Back-End.";
  })
})

rubyCircle.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.add('active-svg-circle');
    const inactiveCircles = [...translationCircle, ...udemyCircle, ...laboratoriaCircle, ...developmentCircle];
    inactiveCircles.forEach(inactiveCircle => {
      inactiveCircle.classList.remove('active-svg-circle');
    })
    extraInfoCircle.classList.remove('active-svg-circle');

    contentParagraph.textContent = "";
    contentParagraph.textContent = "Durante el 2019 participé de un bootcamp de desarrollo full-stack, en el que aprendí bastante de programación y desarrollo a nivel global, además de aprender a trabajar con Ruby on Rails.";
  })
})


udemyCircle.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.add('active-svg-circle');
    const inactiveCircles = [...translationCircle, ...rubyCircle, ...laboratoriaCircle, ...developmentCircle];
    inactiveCircles.forEach(inactiveCircle => {
      inactiveCircle.classList.remove('active-svg-circle');
    })
    extraInfoCircle.classList.remove('active-svg-circle');

    contentParagraph.textContent = "";
    contentParagraph.textContent = "A principios del 2020 completé el curso Complete Javascript en Udemy lo que me brindó una fuerte base de vanilla javascript. Desde entonces, he realizado varios cursos en plataformas como Udemy, Front-End Masters y Ui.dev para potenciar mi aprendizaje autodidacta.";
  })
})

laboratoriaCircle.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.add('active-svg-circle');
    const inactiveCircles = [...translationCircle, ...rubyCircle, ...udemyCircle, ...developmentCircle];
    inactiveCircles.forEach(inactiveCircle => {
      inactiveCircle.classList.remove('active-svg-circle');
    })
    extraInfoCircle.classList.remove('active-svg-circle');

    contentParagraph.textContent = "";
    contentParagraph.textContent = "En marzo del 2020 empecé a estudiar desarrollo front-end de manera más estructurada a través del bootcamp de Laboratoria, durante el cual trabajé en equipo junto a mis compañeras para desarrollar distintas aplicaciones web.";
  })
})


developmentCircle.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.add('active-svg-circle');
    const inactiveCircles = [...translationCircle, ...rubyCircle, ...udemyCircle, ...laboratoriaCircle];
    inactiveCircles.forEach(inactiveCircle => {
      inactiveCircle.classList.remove('active-svg-circle');
    })
    extraInfoCircle.classList.remove('active-svg-circle');
    contentParagraph.textContent = "";
    contentParagraph.textContent = "Hoy, me siento totalmente preparada para comenzar a trabajar como desarrolladora, con la confianza de que podré enfrentar adecuadamente los desafíos que se me presenten y con muchas ganas de continuar aprendiendo.";
  })
})

extraInfoCircle.addEventListener('click', () => {
  extraInfoCircle.classList.add('active-svg-circle');
  const inactiveCircles = [...translationCircle, ...rubyCircle, ...udemyCircle, ...laboratoriaCircle, ...developmentCircle];
  inactiveCircles.forEach(inactiveCircle => {
    inactiveCircle.classList.remove('active-svg-circle');
  })
  contentParagraph.textContent = "";
  contentParagraph.textContent = "Información extra sobre mí";
})

// SKILLS NAVBAR AND CONTENT

const skillsNavbar = document.querySelector('#skills-navbar');


const strongBasics = skillsNavbar.children[0];
const notions = skillsNavbar.children[1];
const interest = skillsNavbar.children[2];

const strongBasicsContent = document.querySelector('#strong-basics-option');
const notionsContent = document.querySelector('#notions-option');
const interestContent = document.querySelector('#interest-option');

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
