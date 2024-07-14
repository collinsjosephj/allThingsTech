document.addEventListener('DOMContentLoaded', () => {
    // Logout
    const logoutButton = document.querySelector('#logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to log out');
            }
        });
    }

    // Login
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

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

    // Signup
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

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

    // New Post
    const newPostForm = document.querySelector('#new-post-form');
    if (newPostForm) {
        newPostForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const title = document.querySelector('input[name="title"]').value.trim();
            const content = document.querySelector('textarea[name="content"]').value.trim();

            if (title && content) {
                const response = await fetch('/api/posts', {
                    method: 'POST',
                    body: JSON.stringify({ title, content }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to create post');
                }
            }
        });
    }

    // Edit Post
    const editPostForm = document.querySelector('#edit-post-form');
    if (editPostForm) {
        editPostForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const title = document.querySelector('input[name="title"]').value.trim();
            const content = document.querySelector('textarea[name="content"]').value.trim();
            const postId = editPostForm.dataset.postId;

            if (title && content) {
                const response = await fetch(`/api/posts/${postId}`, {
                    method: 'PUT',
                    body: JSON.stringify({ title, content }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to update post');
                }
            }
        });
    }

    // Comment
    const commentForm = document.querySelector('#comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const content = document.querySelector('textarea[name="content"]').value.trim();
            const postId = commentForm.dataset.postId;

            if (content) {
                const response = await fetch(`/api/comments`, {
                    method: 'POST',
                    body: JSON.stringify({ content, post_id: postId }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.reload();
                } else {
                    alert('Failed to add comment');
                }
            }
        });
    }
});
