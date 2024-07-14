document.querySelector('#logout').addEventListener('click', async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
});

document.querySelector('#login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
});

document.querySelector('#signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }
});
