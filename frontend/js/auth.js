import { setToken } from './utils.js';

document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch('http://localhost:5500/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        }),
    });
    if (res.ok) window.location.href = 'login.html';
});

document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch('http://localhost:5500/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value,
        }),
    });

    const data = await res.json();
    if (res.ok) {
        setToken(data.token);
        window.location.href = 'dashboard.html';
    } else {
        alert(data.msg);
    }
});
