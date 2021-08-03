// Get a hold of the input element to display the generated code
// Get a hold of the button element to invoke the function to generate a new password

let passwordInput = document.getElementById('password-input');
let generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
  // set chars
  let chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // This will eventually change with a slider input
  let passwordLength = 12;
  let password = '';
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    console.log(randomNumber);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  passwordInput.value = password;
});
