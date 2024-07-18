document.addEventListener('DOMContentLoaded', () => {

    const editPostForm = document.querySelector('#edit-post-form');
    if (editPostForm) {
        editPostForm.addEventListener('submit', async (event) => {
            event.preventDefault(); 

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
});
