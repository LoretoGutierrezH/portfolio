const translationCircle = document.querySelector('.translation');
const rubyCircle = document.querySelector('.ruby');
const udemyCircle = document.querySelector('.udemy');
const laboratoriaCircle = document.querySelector('.laboratoria');
const developmentCircle = document.querySelector('.development');

const contentParagraph = document.querySelector('.aboutMe-content');

translationCircle.addEventListener('click', () => {
  contentParagraph.textContent = "";
  contentParagraph.classList.add('slideInFromLeft');
  contentParagraph.textContent = "Soy traductora inglés-español de profesión, pero hace algún tiempo tomé la decisión de cambiar radicalmente de rubro, esta vez al área de la tecnología.Poseo una base sólida de HTML5, CSS3, Vanilla Javascript y React, y me interesan tanto las tecnologías de Front - End como las de Back - End.A nivel personal, soy adicta al ceviche, me encantan los libros, las películas, los animales y la naturaleza y tengo un lazo inquebrantable con mi taza de café";
})

rubyCircle.addEventListener('click', () => {
  contentParagraph.textContent = "";
  contentParagraph.classList.add('slideInFromLeft');
  contentParagraph.textContent = "Información sobre bootcamp Ruby on Rails";
})

udemyCircle.addEventListener('click', () => {
  contentParagraph.textContent = "";
  contentParagraph.textContent = "Información sobre cursos Udemy";
})

laboratoriaCircle.addEventListener('click', () => {
  contentParagraph.textContent = "";
  contentParagraph.textContent = "Información sobre bootcamp Laboratoria";
})

developmentCircle.addEventListener('click', () => {
  contentParagraph.textContent = "";
  contentParagraph.textContent = "Información sobre mi inicio como Front-End Developer";
})

//cards slider horizontal for my work section