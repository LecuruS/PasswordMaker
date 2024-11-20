const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dateUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,&é\"'(-è_çà)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dateUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuiller sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy"); //Pas d'alternatives à execCommand qui est maintenant obelète donc il faut gardé ça mais avoir à l'esprit que tous les navigateurs ne le supportent pas !

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
