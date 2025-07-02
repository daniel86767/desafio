const images = document.querySelectorAll('.image-box');

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('hover-effect');
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove('hover-effect');
    });
});