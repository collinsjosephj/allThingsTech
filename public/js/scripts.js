document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('#logout');
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');

    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to log out');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
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
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to log in');
                }
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
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
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to sign up');
                }
            }
        });
    }
});
