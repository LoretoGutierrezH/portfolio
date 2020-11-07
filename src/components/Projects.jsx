import React from 'react';
import style from './Projects.module.css';
import pawLovers from '../assets/logoPawLovers.png';
import japanQueen from '../assets/japanqueenlogo.jpeg';
import dataLovers from '../assets/wizards-unite-logo.png';

const Projects = (props) => {
  return (
    <section className="projects">
      <h1>Mi trabajo</h1>
      <section className={style.projectContainer}>
        <div className={style.card}>
            <div className={style.imageContainer}>
              <a href="https://paw-lovers-2.web.app/" target="_blank">

                <img src={pawLovers} alt="Paw Lovers, Red Social" />
              </a>
            </div>
        </div>
        <div className={style.projectInfo}>
          <h3>Paw Lovers</h3>
          <p>Red social para amantes de los animales.</p>
          <h4>Tecnologías utilizadas</h4>
          <p>HTML5, CSS3 (flexbox), Javascript, React, React-Router, Redux, Firebase</p>
        </div>
        <a href="https://paw-lovers-2.web.app/" target="_blank"><button>Ver proyecto</button></a>
      </section>
      
      

      <section className={style.projectContainer}>
        <div className={style.card}>
            <div className={style.imageContainer}>
              <a href="https://burger-queen2020.web.app/" target="_blank">
                <img src={japanQueen} alt="Japan Queen, Aplicación de toma de pedidos" />
              </a>
            </div>
        </div>
        <div className={style.projectInfo}>
          <h3>Japan Queen</h3>
          <p>Aplicación para la toma de pedidos y la coordinación con cocina dentro del restaurante ficticio "Japan Queen".</p>
          <h4>Tecnologías utilizadas</h4>
          <p>HTML5, CSS3 (flexbox), React, React-Router, Firebase</p>
        </div>
        <a href="https://burger-queen2020.web.app/" target="_blank"><button>Ver proyecto</button></a>

      </section>
     
      <section className={style.projectContainer}>
        <div className={style.card}>
            <div className={style.imageContainer}>
              <a href="https://loretogutierrezh.github.io/SCL013-data-lovers/src/index.html" target="_blank"> 
                <img src={dataLovers} alt="Data Lovers, Aplicación informativa sobre Harry Potter Wizards Unite" />
              </a>
            </div>
        </div>
        <div className={style.projectInfo}>
          <h3>Data Lovers</h3>
          <p>Aplicación informativa para los jugadores de Harry Potter Wizards Unite.</p>
          <h4>Tecnologías utilizadas</h4>
          <p>HTML5, CSS3 (CSS Grid y Flexbox), Vanilla Javascript</p>
        </div>
        <a href="https://loretogutierrezh.github.io/SCL013-data-lovers/src/index.html" target="_blank"><button>Ver proyecto</button></a>


      </section>
    </section>
  );
}

export default Projects;