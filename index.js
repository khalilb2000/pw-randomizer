const passwordBox = document.getElementById("password")
  const length = 12;

  const symbol = "@#$";
  const number = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const allChars = upperCase + number + symbol;
  
  function createPassword(){
    let password = "";
    password += symbol[Math.floor(Math.random() * symbol.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += upperCase[Math.floor(Math.random() * upperCase.length)]

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
console.log(password);
  }