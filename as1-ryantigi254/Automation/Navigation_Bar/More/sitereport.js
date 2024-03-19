// enlarges the imnages on click for better view

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.site-report-card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const image = this.querySelector('.site-report-card-image');
            image.classList.add('enlarged'); 
        });
    });

    
    document.body.addEventListener('click', function(e) {
        const enlargedImages = document.querySelectorAll('.site-report-card-image.enlarged');
        enlargedImages.forEach(function(enlarged) {
            enlarged.classList.remove('enlarged');
        });
    });
});
