class Password {
  constructor(length) {
    this.length = length;
    this.password = '';
    this.chars =
      '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  generatePassword() {
    for (let i = 0; i <= this.length; i++) {
      let randomNumber = Math.floor(Math.random() * this.chars.length);
      this.password += this.chars.substring(randomNumber, randomNumber + 1);
    }
    return this.password;
  }
}
