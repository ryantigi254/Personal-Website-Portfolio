document.addEventListener('DOMContentLoaded', () => {
    // Define the elements outside the event listener scope
    const moreToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown on click
    moreToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        event.stopPropagation(); // Prevent click from being immediately propagated to the window
        dropdownContent.classList.toggle('active');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!moreToggle.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('active');
        }
    });
});
