// Get a hold of the input element to display the generated code
// Get a hold of the button element to invoke the function to generate a new password

let passwordInput = document.querySelector('.pass-input');
let generateBtn = document.querySelector('#generate');
let copyText = document.querySelector('.password');
let copyBtn = document.querySelector('#copy');
let copyBtn1 = document.querySelector('#copy1');

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

copyBtn.addEventListener('click', function () {
  let input = copyText.querySelector('#pass-input');
  console.log(input.value);
  input.select();
  document.execCommand('copy');
  // window.getSelection().removeAllRanges();
});
copyBtn1.addEventListener('click', function () {
  let input = copyText.querySelector('#pass-input');
  console.log(input.value);
  input.select();
  document.execCommand('copy');
  // window.getSelection().removeAllRanges();
});
