// Get a hold of the input element to display the generated code
// Get a hold of the button element to invoke the function to generate a new password

let passwordInput = document.querySelector('.pass-input');
let generateBtn = document.querySelector('#generate');
let copyText = document.querySelector('.password');
let copyBtn = document.querySelector('#copy');
let slider = document.querySelector('#myRange');
let sliderValue = 12;

slider.addEventListener('change', () => {
  sliderValue = slider.value;
  console.log(sliderValue);
  return sliderValue;
});

generateBtn.addEventListener('click', () => {
  const newPassword = new Password(sliderValue);
  passwordInput.value = newPassword.generatePassword();
});

copyBtn.addEventListener('click', function () {
  let input = copyText.querySelector('#pass-input');
  input.select();
  document.execCommand('copy');
  // window.getSelection().removeAllRanges();
});
