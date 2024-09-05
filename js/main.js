

// for popup content while clicking button on contact-us section//

const form = document.getElementById('contact-us-form-sec4');
const popup = document.getElementById('popup-contact-sec4');
const close = document.getElementById('close-contact-sec4');
const details = document.getElementById('details-contact-sec4');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // const model = document.getElementById('model').value;
  // const color = document.getElementById('color').value;
  const name = document.getElementById('sec4-form-input-1').value;

 details.textContent = `Thankyou  ${name} For Contacting Us!! 

  We Will Get in touch with you!!`;


 form.reset();


  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});





// schedule a meet popup sec4 //

// document.getElementById('meetingForm-sm-popup-sec4').addEventListener('submit', function(event) {
//   event.preventDefault(); // prevent form submission
//   // You can add code here to handle form submission, like sending the data to a server or displaying a confirmation message.
//   alert('Meeting scheduled successfully!');
//   this.reset(); // Reset the form after submission
// });




const form = document.getElementById('contact-us-form-sec4');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


