document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('#new-comment-form');

    if (commentForm) {
        commentForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const content = commentForm.querySelector('textarea[name="comment-body"]').value.trim();
            const postId = commentForm.querySelector('input[name="post-id"]').value;

            if (content) {
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    body: JSON.stringify({ comment_content: content, post_id: postId }),
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
