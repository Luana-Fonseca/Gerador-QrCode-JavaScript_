const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue) {
        alert("Por favor, insira um texto ou link para gerar o QR Code");
        return;
    }
    generateBtn.innerText = "Gerando QR Code...";
    // API do Google para gerar QR Code
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        container.classList.add('active');
        generateBtn.innerText = "Gerar QR Code";
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value) {
        container.classList.remove('active');
    };
});