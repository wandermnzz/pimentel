// Adiciona um efeito de destaque ao botão do WhatsApp ao passar o mouse
const btnWhatsapp = document.getElementById('btn-whatsapp');

if (btnWhatsapp) {
    btnWhatsapp.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#25d366'; // Cor do WhatsApp
    });

    btnWhatsapp.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Remove a cor de fundo
    });
}