document.addEventListener('DOMContentLoaded', () => {
    let logoutTimer;

    const resetTimer = () => {
        clearTimeout(logoutTimer);
        logoutTimer = setTimeout(logoutUser, 5 * 60 * 1000); // 5 minutes
    };

    const logoutUser = async () => {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log out');
        }
    };

    // Reset the timer on any of these events
    ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'].forEach((event) => {
        window.addEventListener(event, resetTimer);
    });

    resetTimer();
});
