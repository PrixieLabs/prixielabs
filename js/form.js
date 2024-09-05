const scriptURL = 'https://script.google.com/macros/s/AKfycbzS_fO3URraviBQIo9tTlYacZm8CMti0BwjDABs0WD8ardwxn7I5p51OQGFlPvZeIar/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  
})