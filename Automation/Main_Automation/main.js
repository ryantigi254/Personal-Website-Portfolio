document.addEventListener('DOMContentLoaded', () => {
    // Define the elements outside the event listener scope
    const moreToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown on click
    moreToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        event.stopPropagation(); 
        dropdownContent.classList.toggle('active');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!moreToggle.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});

