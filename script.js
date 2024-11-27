document.querySelector('.menu-mobile').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.left_nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });
});

const swiper = new Swiper('.releases-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Código existente do carrossel permanece igual

    // Removemos a parte do hover para mobile, deixando apenas para desktop
    if (window.matchMedia("(min-width: 1025px)").matches) {
        const photoItems = document.querySelectorAll('.photo-item');
        
        photoItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const overlay = this.querySelector('.photo-overlay');
                if (overlay) overlay.style.opacity = '1';
            });

            item.addEventListener('mouseleave', function() {
                const overlay = this.querySelector('.photo-overlay');
                if (overlay) overlay.style.opacity = '0';
            });
        });
    }

    // Modal functionality
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const modalJewelryName = modal.querySelector('.modal-jewelry-name');
    const modalUsername = modal.querySelector('.modal-user-info h3');
    const modalDate = modal.querySelector('.modal-date');
    const closeModal = document.querySelector('.close-modal');

    // Abrir modal ao clicar na imagem
    document.querySelectorAll('.photo-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const jewelryName = this.querySelector('.jewelry-name').textContent;
            const username = this.querySelector('.user-details h3').textContent;
            const date = this.querySelector('.user-details .date').textContent;

            modalImg.src = img.src;
            modalJewelryName.textContent = jewelryName;
            modalUsername.textContent = username;
            modalDate.textContent = date;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Previne scroll
        });
    });

    // Fechar modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll
    });

    // Fechar modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
