/*
 <form action="">
               <h1>Escríbeme</h1>
               <input id="user_name" type="text" placeholder="Nombre"><br>
               <input id="user_email" type="text" placeholder="Correo electrónico"><br>
               <textarea id="content" type="text" placeholder="Escribe aquí..."></textarea><br>
               <button class="send-btn">Enviar</button>
             </form>
*/
window.onload = function() {
  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /* this.contact_number.value = Math.random() * 1000 | 0; */
    emailjs.sendForm('loretocgh', 'template_73f8ynt', contactForm)
    .then(result => console.log(result.text))
    .catch(error => console.log(error.text));
    alert("Mensaje enviado correctamente, revisa tu correo");
    event.target.reset();
  })
}