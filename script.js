document.querySelector('.menu-mobile').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.left_nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });
});
