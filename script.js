document.getElementById("clickButton").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    const image = document.getElementById("movingImage");
    const helloText = document.getElementById("helloText");
    const emojiRain = document.getElementById("emojiRain");

    // Mostra o overlay
    overlay.style.display = "flex";

    // Animação da imagem
    setTimeout(() => {
        image.style.top = "40%"; /* Ajuste para deixar espaço para o texto abaixo */
        image.style.right = "50%";
        image.style.transform = "translate(50%, -50%) scale(2)";
    }, 100);

    // Animação do texto
    setTimeout(() => {
        helloText.style.opacity = "1";
    }, 1500);

    // Chuva de emojis
    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.innerText = "✨";
        emoji.classList.add("emoji");
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
        emojiRain.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    setInterval(createEmoji, 300);
});