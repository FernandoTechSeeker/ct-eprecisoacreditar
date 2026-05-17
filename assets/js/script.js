const whatsappButton = document.querySelector('.float-wpp');

function toggleWhatsappButton() {
    if (!whatsappButton) return;

    if (window.scrollY > 300) {
        whatsappButton.classList.add('is-visible');
    } else {
        whatsappButton.classList.remove('is-visible');
    }
}

window.addEventListener('scroll', toggleWhatsappButton);
window.addEventListener('load', toggleWhatsappButton);