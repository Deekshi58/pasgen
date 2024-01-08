document.getElementById("generate").addEventListener("click", function() {
    const length = parseInt(document.getElementById("length").value);
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validChars = lowercaseChars;
    if (uppercase) {
        validChars += uppercaseChars;
    }
    if (numbers) {
        validChars += numberChars;
    }
    if (special) {
        validChars += specialChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    document.getElementById("password").value = password;
});
const passwordBox = document.getElementById("password");
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
const savePasswordsBtn = document.getElementById('savePasswordsBtn');
const passwordsTextarea = document.getElementById('passwords');
savePasswordsBtn.addEventListener('click', () => {
    const savedPasswords = passwordsTextarea.value;
    localStorage.setItem('savedPasswords', savedPasswords);
    alert('Passwords saved successfully!');
});

window.addEventListener('load', () => {
    const savedPasswords = localStorage.getItem('savedPasswords');
    if (savedPasswords) {
        passwordsTextarea.value = savedPasswords;
    }
});
