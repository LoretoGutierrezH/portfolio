import React, { useRef } from 'react';
import emailjs from 'emailjs-com';  
import{ init } from 'emailjs-com';
init("user_iuRRBJ90PGHW6S5mCoigV");

const Contact = (props) => {
  const formRef = useRef();
  const submitForm = (event) => {
    console.log(formRef.current)
      event.preventDefault();
      /* this.contact_number.value = Math.random() * 1000 | 0; */
      emailjs.sendForm('loretocgh', 'template_73f8ynt', formRef.current)
        .then(result => {
          console.log(result.text)
          /* formActionMessage.textContent = 'Correo enviado correctamente, te responderé cuanto antes :)' */
        })
        .catch(error => {
          console.log(error)
         /*  error.status === 400 ? formActionMessage.textContent = 'Si ves este mensaje es porque hubo un problema durante el envío del formulario web. Por favor, envíame un correo directamente a loretocgh@gmail.com y te responderé cuanto antes :)' : ""; */
        });
      /* event.target.reset();
      setTimeout(() => {
        formActionMessage.classList.add('hidden');
      }, 10000)
   */
   
  }

  return (
    <section className="contact">
      <p>Escríbeme a loretocgh@gmail.com o revisa mi perfil de</p>
      <p>LinkedIn</p>
      <p>GitHub</p>
      <p>Laboratoria</p>

     {/*  <h1>Formulario de contacto</h1>
       <form ref={formRef} onSubmit={submitForm}>
          <h3>Escríbeme</h3>
          <input name="user_name" type="text" placeholder="Nombre" required /><br />
          <input name="user_email" type="text" placeholder="Correo electrónico" required /><br />
          <textarea name="message" type="text" placeholder="Escribe aquí..." required></textarea><br />
          <button type="submit" className="send-btn">Enviar</button>
        </form>
        <p className="form-action-message"></p> */}
    </section>
  );
}

export default Contact;