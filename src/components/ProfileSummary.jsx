import React from 'react';
import style from './ProfileSummary.module.css';
import profileImg from '../assets/profile-pic1-light.jpg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const ProfileSummary = (props) => {
  return (
    <section className="profile">
      <h1>Sobre mí</h1>
      <div className={style.profileImg}>
        <img src={profileImg} alt="Foto de perfil de Loreto Gutiérrez"/>
      </div>
      <p className={style.about}>Mi nombre es Loreto Gutiérrez y soy traductora inglés-español de profesión, pero ahora estoy totalmente enfocada en la programación. Poseo una base sólida de HTML5, CSS3, Vanilla Javascript y React, y me interesan tanto las tecnologías de Front-End como las de Back-End.</p>

      <p className={style.about}>Tengo una actitud positiva frente a la vida, un enfoque práctico hacia los problemas y mi superpoder es el aprendizaje autodidacta.</p>

      <p className={style.about}>
      Me encantan la naturaleza y los animales, especialmente los perros. Soy adicta al ceviche y el café es mi compañero fiel durante las horas de codeo.
      </p>

      <p className={style.about}>Escríbeme a <b>loretocgh@gmail.com</b> o revisa mis perfiles:</p>
      <section style={{textAlign: "center"}} className={style.about}>
        <a style={{margin: '1rem'}} href="https://www.linkedin.com/in/loretogutierh/" target="_blank" className={style.link}><img src={linkedin} alt="LinkedIn"/></a>
        <a style={{margin: '1rem'}} href="https://github.com/LoretoGutierrezH" target="_blank" className={style.link}><img src={github} alt="GitHub"/></a>
      </section>
    </section>
  );
}

export default ProfileSummary;