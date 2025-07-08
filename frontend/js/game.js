import { getToken, redirectIfNotLoggedIn } from './utils.js';
redirectIfNotLoggedIn();

async function submit() {
    const guess = document.getElementById('guess-input').value;
    const res = await fetch('http://localhost:5500/api/game/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({ word: guess })
    });
    const data = await res.json();
    console.log(data.msg);
    data.msg ? console.log("Correct!") : console.log("Wrong guess!");
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.submit-btn').addEventListener('click', submit);
});
