const email = document.getElementById('email');
const button = document.querySelector('.button');
const form = document.getElementById('form');
const dismissButton = document.getElementById('dismiss_button');

function validateEmail(){
  var emailInput = document.getElementById('email');
  var errorMessage = document.querySelector('em');
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent = 'Valid email required';
    errorMessage.style.display = 'inline';
    errorMessage.style.color = 'hsl(4, 100%, 67%)';
    errorMessage.style.fontWeight = '700';
    emailInput.style.backgroundColor = 'hsl(4, 60%, 67%)';
    emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
  } else {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    localStorage.setItem('userEmail', emailInput.value);
    window.location.href = 'thanks.html';
    /*var email_input = document.getElementById('teste');
    email_input.textContent = emailInput.value;*/
  }
}

function returnToIndex(){
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
  var userEmail = localStorage.getItem('userEmail');

  if (userEmail) {
      var emailPlaceholder = document.querySelector('.container2 b');
      emailPlaceholder.textContent = userEmail;
      localStorage.removeItem('emaiuserEmail');
  }
});
