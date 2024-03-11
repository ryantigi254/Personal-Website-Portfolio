document.addEventListener('DOMContentLoaded', (event) => {
    const moreList = document.querySelector('.more-dropdown-list');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown on click
    moreList.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!moreList.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('active');
        }
    });
});