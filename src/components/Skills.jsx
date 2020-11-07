import React, { useState, useRef } from 'react';
import style from './Skills.module.css';

const Skills = (props) => {
  const [activeSkillOption, setActiveSkillOption] = useState('strong-basics');
  const skillParagraph = useRef();

  const changeRef = (event) => {
    skillParagraph.current = event.currentTarget;
    setActiveSkillOption(event.currentTarget.getAttribute('data-option'));
  }

  return (
    <section className="skills">
      <h1>Mis habilidades</h1>
      <nav className={style.skillsNavbar}>
          <p data-option="strong-basics" onClick={changeRef} ref={skillParagraph} className={activeSkillOption === 'strong-basics' ? `${style.activeOption}` : null}>Base sólida</p>
          <p data-option="notions" onClick={changeRef} ref={skillParagraph} className={activeSkillOption === 'notions' ? `${style.activeOption}` : null}>Nociones</p>
          <p data-option="interest" onClick={changeRef} ref={skillParagraph} className={activeSkillOption === 'interest' ? `${style.activeOption}` : null}>Interés</p>
      </nav>

      <section className={style.skillsContent}>
            <div className={activeSkillOption === 'strong-basics' ? `${style.strongBasics}` : `${style.inactiveOption}`}>
              <div className={style.imagesContainer}>
                <div className={style.skillIcon}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fpictures-of-javascript-icon-png-892812.png?alt=media&token=e0aeaea1-5e07-403f-b62c-c271a68306b3" alt="Javascript"/>
                </div>
                <div className={style.skillIcon}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Freactvectorblue.png?alt=media&token=017106e3-7694-4dea-b1e5-b69ea5bee117" alt="React"/>
                </div>
                <div className={style.skillIcon}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Ffirebase.png?alt=media&token=1509743b-b931-4961-ba39-474d76dcbb4e" alt="Firebase"/>
                </div>
              </div>
              <div className={style.description}>
                <p>Cuento con las competenias necesarias para desarrollar aplicaciones web funcionales utilizando estas
                  herramientas y puedo resolver de manera independiente la mayoría de los problemas que se me presentan.
                </p>
                <ul>
                  <li><b>HTML5:</b> <br /> <br /> Conozco las principales etiquetas de html, sé utilizar las etiquetas semánticas para estructurar correctamente el contenido y uso los comandos básicos de emmet para agilizar el trabajo. <br/><br/></li>
                  <li><b>CSS3</b> <br /> <br /> Comprendo las reglas de especificidad, sé utilizar correctamente las media queries para desarrollar aplicaciones web responsive, conozco bastantes propiedades de uso general y sé utilizar flexbox y css grid, por lo que puedo crear interfaces simples sin el uso de frameworks.<br/><br/></li>
                  <li><b>Vanilla Javascript</b> <br /> <br /> Estoy familiarizada con el funcionamiento de javascript 'behind the scenes' (event loop), sé utilizar vanilla javascript correctamente, puedo manejar el DOM de forma manual, conozco y sé usar los principales métodos para el trabajo con arrays, sé trabajar con objetos, puedo crear y consumir promesas con then/catch y async/await, sé consumir APIs con fetch y axios.<br/><br/></li>
                  <li><b>React (Clases, Hooks, Router, Redux básico)</b> <br /> <br /> Sé utilizar los componentes de clase con sus lifecycle hooks, los componentes funcionales con React Hooks y React Router. Estoy familiarizada con Context API y Redux. Puedo desarrollar aplicaciones web utilizando correctamente el estado.<br/><br/></li>
                  <li><b>Firebase</b> <br /> <br /> Puedo crear proyectos desde cero configurando correctamente la autenticación, base de datos, el storage, las reglas de seguridad y la creación de roles. Sé desplegar correctamente las aplicaciones.<br/><br/></li>
                  <li><b>Figma</b> <br /> <br /> Puedo realizar prototipos de alta fidelidad utilizando las principales herramientas de la plataforma.</li>
                  <li><b>Git y GitHub</b> <br /> <br /> Sé cómo crear repositorios locales y remotos y conectarlos, estoy familiarizada con el trabajo en ramas.<br/><br/></li>
                  <li><b>Ubuntu y la terminal</b> <br /> <br /> Manejo Ubuntu a nivel usuario, conozco los comandos escenciales de la terminal (cd, mkdir, touch, rm, etc.) y puedo trabajar correctamente en este entorno... puedo escapar solita de la consola de VIM y Nano :P<br/><br/></li>
                </ul>
              </div>
            </div>

            <div className={activeSkillOption === 'notions' ? `${style.notions}` : `${style.inactiveOption}`}>
                <div className={style.imagesContainer}>
                  <div className={style.skillIcon}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fnodevector.jpg?alt=media&token=8c09c63e-3c96-40bd-abe1-159d0b923d5f" alt="Node"/>
                  </div>
                  <div className={style.skillIcon}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fexressvector.png?alt=media&token=a17d9f9c-2351-4417-ab3e-93f40e48a4e0" alt="Express"/>
                  </div>
                  <div className={style.skillIcon}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fmongodbvector.png?alt=media&token=9e2673c7-3f2d-4e03-ab04-c91b367861f2" alt="MongoDB"/>
                  
                  </div>
                </div>
                <div className={style.description}>
                  <p>Poseo conocimientos en estas tecnologías y las he utilizado, pero actualmente no soy usuaria activa de
                  ellas, por lo que podría necesitar práctica.</p>
                  <ul>
                    <li><b>Node</b> <br /> <br /> Tengo conocimientos básicos de Node, sé pasar argumentos por medio de la terminal, leer archivos y crear nuevos. Como parte del bootcamp de Laboratoria, desarrollé una pequeña libreria. <br/> <br/></li>
                    <li><b>Express</b> <br /> <br /> Puedo crear un CRUD en conexión con una base de datos Mongo. <br/><br/></li>
                    <li><b>MongoDB</b> <br /> <br /> Sé modelar esta base de datos y realizar queries básicas correctamente. <br/><br/></li>
                    <li><b>PostgreSQL</b> <br /> <br /> Sé modelar esta base de datos y realizar queries correctamente. *Llevo un año sin tocar Postgres. <br/><br/></li>
                    <li><b>Testing</b> <br /> <br /> Poseo un conocimiento básico de unit testing de componentes React con Jest y Enzyme. <br/><br/></li>
                  </ul>
                </div>
            </div>

            <div className={activeSkillOption === 'interest' ? `${style.interest}` : `${style.inactiveOption}`}>
                <div className={style.imagesContainer}>
                  <div className={style.skillIcon}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fpythonvector.png?alt=media&token=9248d197-1485-401e-b23b-e9bfa1d20a0e" alt="Desarrollo back-end"/>
                  </div>
                  <div className={style.skillIcon}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2FPostgresql_elephant.svg?alt=media&token=ab5b0ac6-1c85-409a-939a-580df1edcda2" alt="PostgreSQL"/>
                  </div>
                  <div className={style.skillIcon}>
                     <img src="https://firebasestorage.googleapis.com/v0/b/loreto-gutierrez.appspot.com/o/skills%2Fandroid.png?alt=media&token=de5785f6-ccd1-4f34-a8f2-8ffd96f026ba" alt="Desarrollo mobile"/>
                  </div>
                </div>
                <div className={style.description}>
                  <p>Me gustaría aprender a utilizar estas herramientas y/o quiero enfocar mi desarrollo profesional en
                  estas áreas.</p>
                  <ul>
                    <li><b>Desarrollo Fullstack (Javascript) y Back-End</b> <br /> <br /> Me gustaría aprender a fondo a desarrollar el back-end de distintas aplicaciones, API Rest, implementar sistemas de pago, autenticación, definición de roles, uso de variables de entorno, etc. con lenguajes 100% back-end, especialmente Python. Actualmente, me encuentro aprendiendo Node, Express y MongoDB. <br/><br/></li>
                    <li><b>Desarrollo mobile</b> <br /> <br /> Me gustaría aprender desarrollo mobile, tanto nativo como multiplataforma. <br/><br/></li>
                    <li><b>Testing</b> <br /> <br /> Me gustaría ampliar mis conocimientos en cuanto a unit testing y integration testing para producir código sólido y aprueba de fallas. <br/><br/></li>
                  </ul>
                </div>
            </div>
      </section>
    </section>
  );
}

export default Skills;