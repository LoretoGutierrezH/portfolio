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


// SKILLS > INDIVIDUAL SKILL DESCRIPTION

// Basics
const basicsSkillDescription = document.querySelector('#basics-skill-description');
const basicsImage = document.querySelector('#basics-image');


const html5Skill = document.querySelector('#html5');
const css3Skill = document.querySelector('#css3');
const vanillaJavascriptSkill = document.querySelector('#vanilla-js');
const reactSkill = document.querySelector('#react');
const firebaseSkill = document.querySelector('#firebase');
const figmaSkill = document.querySelector('#figma');
const gitSkill = document.querySelector('#git');
const ubuntuAndTerminalSkill = document.querySelector('#ubuntu');

const basicsArray = [html5Skill, css3Skill, vanillaJavascriptSkill, reactSkill, firebaseSkill, figmaSkill, gitSkill, ubuntuAndTerminalSkill];

basicsArray.forEach((skill) => {
  skill.addEventListener('click', (event) => {
    basicsSkillDescription.textContent = "";
    basicsImage.src = ""; // spinner? + adding imgs to variables on load
    const targetId = event.target.id;
    switch (targetId) {
      case 'html5':
        basicsSkillDescription.textContent = "Conozco las principales etiquetas de html, sé utilizar las etiquetas semánticas para estructurar correctamente el contenido y uso los comandos básicos de emmet para agilizar el trabajo.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fhtml52.png?alt=media&token=cb5b6b68-e8ba-4294-9617-21d04609a7a3"
        break;
      case 'css3':
        basicsSkillDescription.textContent = "Comprendo las reglas de especificidad, sé utilizar correctamente las media queries para desarrollar aplicaciones web responsive, conozco bastantes propiedades de uso general y sé utilizar flexbox y css grid, por lo que puedo crear interfaces con interfaces simples sin el uso de frameworks.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fcss-icon-png-0.jpg?alt=media&token=5e56f77a-ca1c-459a-a27b-1a3fddd7dfd7";
        break;
      case 'vanilla-js':
        basicsSkillDescription.textContent = "Estoy familiarizada con el funcionamiento de javascript 'behind the scenes' (event loop), sé utilizar vanilla javascript correctamente, puedo manejar el DOM manualmente, conozco y sé usar los principales métodos para el trabajo con arrays, sé trabajar con objetos, puedo crear y consumir promesas con fetch y axios.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fpictures-of-javascript-icon-png-892812.png?alt=media&token=e0aeaea1-5e07-403f-b62c-c271a68306b3"
        break;
      case 'react':
        basicsSkillDescription.textContent = "Sé utilizar los componentes de clase con sus lifecycle hooks, los componentes funcionales con React Hooks y React Router. Estoy familiarizada con Context API y Redux. Puedo desarrollar aplicaciones web utilizando correctamente el estado.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Freactvectorblue.png?alt=media&token=017106e3-7694-4dea-b1e5-b69ea5bee117"
        break;
      case 'firebase':
        basicsSkillDescription.textContent = "Puedo crear proyectos desde cero configurando correctamente la autenticación, base de datos, el storage, las reglas de seguridad y la creación de roles. Sé desplegar correctamente las aplicaciones.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Ffirebase.png?alt=media&token=1509743b-b931-4961-ba39-474d76dcbb4e"
        break;
      case 'figma':
        basicsSkillDescription.textContent = "Puedo realizar prototipos de alta fidelidad utilizando las principales herramientas de la plataforma.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Ffigmavector.png?alt=media&token=533a15c2-8eac-4604-a925-a4952a4175bc";
        break;
      case 'git':
        basicsSkillDescription.textContent = "Sé cómo crear repositorios locales y remotos y conectarlos, estoy familiarizada con el trabajo en ramas, puedo trabajar de manera correcta tanto en el rol de master como de colaboradora, utilizando los comandos para respaldar mi trabajo.";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fgit.png?alt=media&token=d1c89955-c29a-4def-aa7c-7c4b2545b948";
        break;
      case 'ubuntu':
        basicsSkillDescription.textContent = "Manejo Ubuntu a nivel usuario, conozco los comandos escenciales de la terminal (cd, mkdir, touch, rm, etc.) y puedo trabajar correctamente en este entorno... puedo escapar solita de la consola de VIM y Nano :P";
        basicsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fubuntuvector.png?alt=media&token=26c21d25-ed27-4d53-8254-1106b11461f3"
        break;
      default:
        basicsSkillDescription.textContent = "";
    }
  })
})

// Notions
const notionsSkillDescription = document.querySelector('#notions-skill-description');
const notionsImage = document.querySelector('#notions-image');

const nodeSkill = document.querySelector('#node');
const expressSkill = document.querySelector('#express');
const mongoDbSkill = document.querySelector('#mongodb');
const postgreSkill = document.querySelector('#postgresql');
const rubySkill = document.querySelector('#ror');
const notionsArray = [nodeSkill, expressSkill, mongoDbSkill, postgreSkill, rubySkill];

notionsArray.forEach((skill) => {
  skill.addEventListener('click', (event) => {
    notionsSkillDescription.textContent = "";
    notionsImage.src = "";
    const targetId = event.target.id;
    switch (targetId) {
      case 'node':
        notionsSkillDescription.textContent = "Tengo conocimientos básicos de Node, sé pasar argumentos por medio de la terminal, leer archivos y crear nuevos. Como parte del bootcamp de Laboratoria, desarrollé una pequeña libreria.";
        notionsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fnodevector.jpg?alt=media&token=8c09c63e-3c96-40bd-abe1-159d0b923d5f";
        break;
      case 'express':
        notionsSkillDescription.textContent = "Puedo crear los elementos básicos de un back-end.";
        notionsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fexressvector.png?alt=media&token=a17d9f9c-2351-4417-ab3e-93f40e48a4e0";
        break;
      case 'mongodb':
        notionsSkillDescription.textContent = "Sé modelar esta base de datos y realizar queries correctamente.";
        notionsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fmongodbvector.png?alt=media&token=9e2673c7-3f2d-4e03-ab04-c91b367861f2";
        break;
      case 'postgresql':
        notionsSkillDescription.textContent = "Sé modelar esta base de datos y realizar queries correctamente.";
        notionsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2FPostgresql_elephant.svg?alt=media&token=ab5b0ac6-1c85-409a-939a-580df1edcda2";
        break;
      case 'ror':
        notionsSkillDescription.textContent = "Estoy familiarizada con la sintaxis de Ruby y los procesos de Rails para crear rápidamente aplicaciones básicas por medio de las gemas fundamentales, como devise y cancancan, en conjunto con una base de datos PostgreSQL.";
        notionsImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Frailsvector.png?alt=media&token=e8c53f67-6a3f-4381-9da3-27506ef47e8e";
        break;
      case 'testing':
        notionsSkillDescription.textContent = "Poseo nociones de testing con Jest y Enzyme que quiero seguir desarrollando para lograr realizar pruebas más complejas y crear funcionalidades que se integren a las aplicaciones sin inconvenientes."
      default:
        notionsSkillDescription.textContent = "";
    }
  })
})



// Interest
const interestSkillDescription = document.querySelector('#interest-skill-description');
const interestImage = document.querySelector('#interest-image');

const backendSkill = document.querySelector('#backend');
const backendJsSkill = document.querySelector('#backend-js');
const cssFrameworksSkill = document.querySelector('#cssframeworks');
const interestArray = [backendSkill, backendJsSkill, cssFrameworksSkill];

interestArray.forEach((skill) => {
  skill.addEventListener('click', (event) => {
    interestImage.src = "";
    interestSkillDescription.textContent = "";
    const targetId = event.target.id;
    switch (targetId) {
      case 'backend':
        interestSkillDescription.textContent = "Me gustaría aprender a fondo a desarrollar el back-end de distintas aplicaciones, API Rest, implementar sistemas de pago, autenticación, definición de roles, uso de variables de entorno, etc. con lenguajes 100% back-end, especialmente Python. Durante el bootcamp de Ruby on Rails tuve una introducción a estos conceptos, pero no logré aplicarlos completamente y en distintos proyectos.";
        interestImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fpythonvector.png?alt=media&token=9248d197-1485-401e-b23b-e9bfa1d20a0e";
        break;
      case 'backend-js':
        interestSkillDescription.textContent = "Me gustaría aprender a fondo a desarrollar el back-end de distintas aplicaciones, API Rest, implementar sistemas de pago, autenticación, definición de roles, uso de variables de entorno, etc. utilizando Node, Express, MongoDB y contenedores Docker.";
        interestImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fdocker2.png?alt=media&token=9ab8b767-b6cb-4d3a-a8b0-c4d9cc242c14";
        break;
      case 'cssframeworks':
        interestSkillDescription.textContent = "Quiero aprender a utilizar distintos frameworks de CSS para maquetar de forma más rápida.";
        interestImage.src = "https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Ftailwind-css-seeklogo.com.svg?alt=media&token=b9d3af63-5537-48a1-9885-4550c8ea4ccd";
        break;
      default:
        interestSkillDescription.textContent = "";      
    }
  })
})

