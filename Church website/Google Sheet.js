const scriptURL =
  "https://script.google.com/macros/s/AKfycbwC-h-EIwwl-Yp494g6JZ5F-JcC8_RQygj1PUtidoJ_5ikuA1IJzN4midv5eE04UV1D/exec";

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})




  // Function to reformat the date
  function reformatDate(dateString) {
    const dateParts = dateString.split('-');
    const year = dateParts[0];
    const month = dateParts[1].padStart(2, '0'); // Pad month with leading zero if needed
    const day = dateParts[2].padStart(2, '0');
    return `${day}/${month}/${year}`; // Desired format (DD/MM/YYYY)
  }

  // Get the date element
  const dateElement = document.getElementById('myDate');

  // Reformat the date and update the element content
  dateElement.textContent = reformatDate(dateElement.textContent);

