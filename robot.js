    <script>
document.addEventListener('DOMContentLoaded', () => {
    const actionButtons = document.querySelectorAll('.action-button');
    const closeButtons = document.querySelectorAll('.close-button');
    const overlay = document.querySelector('.overlay');
    const container = document.querySelector('.container');
    const body = document.body; // Get a reference to the body element

    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.dataset.popupTarget;
            const targetPopup = document.getElementById(popupId);

            if (targetPopup) {
                targetPopup.classList.add('active'); // Show the specific popup
                overlay.classList.add('active'); // Show the overlay
                container.classList.add('blurred'); // Blur the main content
                body.classList.add('no-scroll'); // Prevent body scrolling
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.dataset.popupClose;
            const targetPopup = document.getElementById(popupId);

            if (targetPopup) {
                targetPopup.classList.remove('active'); // Hide the specific popup
                overlay.classList.remove('active'); // Hide the overlay
                container.classList.remove('blurred'); // Unblur the main content
                body.classList.remove('no-scroll'); // Allow body scrolling
            }
        });
    });

    // Optional: Close popup if overlay is clicked
    overlay.addEventListener('click', () => {
        const activePopup = document.querySelector('.popup.active');
        if (activePopup) {
            activePopup.classList.remove('active');
        }
        overlay.classList.remove('active');
        container.classList.remove('blurred');
        body.classList.remove('no-scroll'); // Allow body scrolling
    });
});

    </script>