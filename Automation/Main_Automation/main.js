document.addEventListener('DOMContentLoaded', () => {
    const moreToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    moreToggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        dropdownContent.classList.toggle('active');
    });

    window.addEventListener('click', function(e) {
        if (!moreToggle.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('active');
        }
    });
});
