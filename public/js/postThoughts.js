document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.querySelector('#new-post-form');
    
    if (newPostForm) {
        newPostForm.addEventListener('submit', async (event) => {
            event.preventDefault(); 

            const title = newPostForm.querySelector('input[name="title"]').value.trim();
            const content = newPostForm.querySelector('textarea[name="content"]').value.trim();

            if (title && content) {
                const response = await fetch('/api/posts', {
                    method: 'POST',
                    body: JSON.stringify({ title, content }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.reload();
                } else {
                    alert('Failed to create post');
                }
            }
        });
    }
});
