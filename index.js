const passwordBox = document.getElementById("password");


const userLengthString = prompt ("Enter password length (between 8 and 128):")
if(!userLengthString){
  alert("Password length must be entered")
}

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "@#$";
const number = "0123456789";

function generatePassword() {
  const userLength = parseInt(prompt("Enter password length (between 8 and 128):"));

  if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("Please enter a valid length between 8 and 128.");
    return;
  }

  const specialChars= prompt("Enter the special charaters you want to include!");

  if (!specialChars){
    alert("At least one special charater is required");
    return;
  }

  


  const includeLowercase = prompt("Include lowercase letters? (yes/no)").toLowerCase() === 'yes';
const includeUppercase = prompt("Include uppercase letters? (yes/no)").toLowerCase() === 'yes';
const includeNumbers = prompt("Include numbers? (yes/no)").toLowerCase() === 'yes';


  if (!includeLowercase && !includeUppercase && !includeSymbols && !includeNumbers) {
    alert("At least one character type should be selected.");
    return;
  }

  let charBank = "";
  if (includeLowercase) charBank += lowercase;
  if (includeUppercase) charBank += uppercase;
  if (includeSymbols) charBank += symbol;
  if (includeNumbers) charBank += number;

  let password = "";
  for (let i = 0; i < userLength; i++) {
    const randomIndex = Math.floor(Math.random() * charBank.length);
    password += charBank[randomIndex];
  }

  passwordBox.value = password;
  console.log(password);
}

// Add an event listener to the button
document.getElementById("generate-btn").addEventListener("click", generatePassword);
