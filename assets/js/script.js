/* ============================================================
   CT É Preciso Acreditar — Script principal
   ============================================================
   1. Botão flutuante do WhatsApp aparece após scroll
   2. Lightbox: abre imagem em tela cheia ao clicar
   ============================================================ */
 
document.addEventListener('DOMContentLoaded', function () {
 
    /* ============================================================
       1. BOTÃO WHATSAPP — aparece após scroll
       ============================================================ */
    const botaoWhatsApp = document.querySelector('.float-wpp');
    const LIMITE_SCROLL = 300;
 
    function controlarBotaoWhatsApp() {
        if (!botaoWhatsApp) return;
 
        if (window.scrollY > LIMITE_SCROLL) {
            botaoWhatsApp.classList.add('is-visible');
        } else {
            botaoWhatsApp.classList.remove('is-visible');
        }
    }
 
    window.addEventListener('scroll', controlarBotaoWhatsApp);
    window.addEventListener('load', controlarBotaoWhatsApp);
    controlarBotaoWhatsApp();
 
 
    /* ============================================================
       2. LIGHTBOX — abrir imagem em tela cheia
       ============================================================ */
    const galleryCards = document.querySelectorAll('.image-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox__close');
 
    function openLightbox(card) {
        const img = card.querySelector('img');
        const caption = card.querySelector('figcaption');
 
        if (!img || !lightbox) return;
 
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : '';
 
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
    }
 
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
    }
 
    galleryCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
    });
 
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
 
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
 
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
 
});