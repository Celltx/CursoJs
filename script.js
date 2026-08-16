const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");

const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

const strengthText = document.getElementById("strengthText");
const strengthBars = document.querySelectorAll(".strength-bars span");

const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

function generatePassword() {

    const length = Number(lengthInput.value);

    let characters = "";

    if (uppercase.checked) {
        characters += upperCharacters;
    }

    if (lowercase.checked) {
        characters += lowerCharacters;
    }

    if (numbers.checked) {
        characters += numberCharacters;
    }

    if (symbols.checked) {
        characters += symbolCharacters;
    }

    if (characters.length === 0) {
        passwordInput.value = "";
        strengthText.textContent = "SELECT OPTIONS";
        return;
    }

    let password = "";

    if (uppercase.checked) {
        password += getRandomCharacter(upperCharacters);
    }

    if (lowercase.checked) {
        password += getRandomCharacter(lowerCharacters);
    }

    if (numbers.checked) {
        password += getRandomCharacter(numberCharacters);
    }

    if (symbols.checked) {
        password += getRandomCharacter(symbolCharacters);
    }

    while (password.length < length) {
        password += getRandomCharacter(characters);
    }

    password = shufflePassword(password);

    passwordInput.value = password;

    calculateStrength();
}

function getRandomCharacter(characters) {

    const randomIndex = Math.floor(
        Math.random() * characters.length
    );

    return characters[randomIndex];
}

function shufflePassword(password) {

    return password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

function calculateStrength() {

    let strength = 0;

    if (uppercase.checked) {
        strength++;
    }

    if (lowercase.checked) {
        strength++;
    }

    if (numbers.checked) {
        strength++;
    }

    if (symbols.checked) {
        strength++;
    }

    const length = Number(lengthInput.value);

    if (length >= 16) {
        strength++;
    }

    updateStrength(strength);
}

function updateStrength(strength) {

    strengthBars.forEach(bar => {
        bar.style.background = "transparent";
    });

    if (strength <= 2) {

        strengthText.textContent = "WEAK";

        for (let i = 0; i < 1; i++) {
            strengthBars[i].style.background = "#f64a4a";
        }

    } else if (strength === 3) {

        strengthText.textContent = "MEDIUM";

        for (let i = 0; i < 2; i++) {
            strengthBars[i].style.background = "#fb7c58";
        }

    } else if (strength === 4) {

        strengthText.textContent = "STRONG";

        for (let i = 0; i < 3; i++) {
            strengthBars[i].style.background = "#f8cd65";
        }

    } else {

        strengthText.textContent = "VERY STRONG";

        for (let i = 0; i < 4; i++) {
            strengthBars[i].style.background = "#a4ffaf";
        }
    }
}

copyBtn.addEventListener("click", async () => {

    if (passwordInput.value === "") {
        return;
    }

    await navigator.clipboard.writeText(passwordInput.value);

    copyBtn.textContent = "✓";

    setTimeout(() => {
        copyBtn.textContent = "📋";
    }, 1500);
});

generateBtn.addEventListener("click", generatePassword);

uppercase.addEventListener("change", calculateStrength);
lowercase.addEventListener("change", calculateStrength);
numbers.addEventListener("change", calculateStrength);
symbols.addEventListener("change", calculateStrength);

generatePassword();