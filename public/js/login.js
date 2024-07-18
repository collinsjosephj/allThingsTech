document.addEventListener('DOMContentLoaded', () => {
    // Login
    const loginForm = document.querySelector('#login-form');
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
});
