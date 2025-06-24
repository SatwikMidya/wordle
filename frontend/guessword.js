const secretWord = "CRANE";
let currentRow = 0;

const input = document.querySelector('.input');
const button = document.querySelector('.submit-btn');
const rows = document.querySelectorAll('.row');

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});

button.addEventListener('click', handleGuess);

function handleGuess() {
    const guess = input.value.toUpperCase();

    if (guess.length !== 5 || currentRow >= 6) {
        alert("Please enter a 5-letter word.");
        return;
    }

    const boxes = rows[currentRow].children;

    for (let i = 0; i < 5; i++) {
        boxes[i].textContent = guess[i];

        if (guess[i] === secretWord[i]) {
            boxes[i].style.backgroundColor = "#538d4e"; // green
        } else if (secretWord.includes(guess[i])) {
            boxes[i].style.backgroundColor = "#b59f3b"; // yellow
        } else {
            boxes[i].style.backgroundColor = "#3a3a3c"; // gray
        }
    }

    if (guess === secretWord) {
        alert("🎉 You guessed it!");
        button.disabled = true;
        input.disabled = true;
    }

    currentRow++;
    input.value = "";
}

