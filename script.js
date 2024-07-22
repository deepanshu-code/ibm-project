
let currentIndex = 1;

function showItem(itemIndex) {
    const items = document.querySelectorAll('.crousel-item');
    const dots = document.querySelectorAll('.crousel-wrapper span');

    items.forEach(item => item.style.opacity = 0);
    dots.forEach(dot => dot.classList.remove('active'));

    items[itemIndex - 1].style.opacity = 1;
    dots[itemIndex - 1].classList.add('active');
}

function nextItem() {
    currentIndex = currentIndex % 3 + 1;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 2 + 3) % 3 + 1;
    showItem(currentIndex);
}

document.querySelector('.arrow-next').addEventListener('click', nextItem);
document.querySelector('.arrow-prev').addEventListener('click', prevItem);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
