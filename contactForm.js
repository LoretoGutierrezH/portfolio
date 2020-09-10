window.onload = function() {
  console.log('función de formulario iniciada');
  const contactForm = document.querySelector('#contact-form-client');
  const formActionMessage = document.querySelector('.form-action-message');
  console.log(contactForm, formActionMessage)
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /* this.contact_number.value = Math.random() * 1000 | 0; */
    emailjs.sendForm('loretocgh', 'template_73f8ynt', contactForm)
      .then(result => {
      console.log(result.text)
      formActionMessage.textContent = 'Correo enviado correctamente, te responderé cuanto antes :)'
      })
      .catch(error => {
        console.log(error)
        error.status === 400 ? formActionMessage.textContent = 'Si ves este mensaje es porque hubo un problema durante el envío del formulario web. Por favor, envíame un correo directamente a loretocgh@gmail.com y te responderé cuanto antes :)' : "";
      });
      event.target.reset();
      setTimeout(() => {
        formActionMessage.classList.add('hidden');
      }, 5000)

  })
}

