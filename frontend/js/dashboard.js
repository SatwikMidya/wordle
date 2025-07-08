import { getToken, redirectIfNotLoggedIn } from './utils.js';
redirectIfNotLoggedIn();

(async () => {
    const res = await fetch('http://localhost:5500/api/user/dashboard', {
        headers: { Authorization: getToken() }
    });
    const data = await res.json();
    document.getElementById('name').textContent = `Welcome, ${data.name}`;
    document.getElementById('score').textContent = data.score;
    data.guesses.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        document.getElementById('guesses').appendChild(li);
    });
})();
