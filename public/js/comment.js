document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('#new-comment-form');
    const editCommentForm = document.querySelector('#edit-comment-form');
    const editCommentModal = document.querySelector('#edit-comment-modal');
    const cancelEditBtn = document.querySelector('#cancel-edit-btn');

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

    document.querySelectorAll('.edit-comment-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const commentElement = event.target.closest('[data-comment-id]');
            const commentId = commentElement.dataset.commentId;
            const commentText = commentElement.querySelector('p').innerText;

            editCommentForm.querySelector('input[name="comment-id"]').value = commentId;
            editCommentForm.querySelector('textarea[name="comment-text"]').value = commentText;
            editCommentModal.classList.remove('hidden');
        });
    });

    editCommentForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const commentId = editCommentForm.querySelector('input[name="comment-id"]').value;
        const commentText = editCommentForm.querySelector('textarea[name="comment-text"]').value.trim();

        if (commentText) {
            const response = await fetch(`/api/comments/${commentId}`, {
                method: 'PUT',
                body: JSON.stringify({ comment_content: commentText }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to update comment');
            }
        }
    });

    cancelEditBtn.addEventListener('click', () => {
        editCommentModal.classList.add('hidden');
    });
});
