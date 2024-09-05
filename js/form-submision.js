<script>
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = {
      'name': document.getElementById('name').value,
      'email': document.getElementById('email').value,
      'message': document.getElementById('message').value
    };

    fetch('AKfycbw5Bj9fvIHa8o1HzPqI3L_BNx7gVQOJCV6PeuOfXGM', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      alert('Form submitted successfully!');
    })
    .catch(error => {
      alert('There was a problem with the submission: ' + error.message);
    });
  });
</script>