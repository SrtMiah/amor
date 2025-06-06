document.getElementById("openCardBtn").addEventListener("click", function() {
    document.getElementById("card").style.display = "block"; // Exibe o cartão
    document.getElementById("cardImage").style.display = "block"; // Exibe a foto
    document.getElementById("cardMessage").style.display = "block"; // Exibe a mensagem
    document.getElementById("loveButton").style.display = "block"; // Exibe o botão de corações
    this.style.display = "none"; // Oculta o botão de abrir
});

function showLove() {
    const hearts = document.getElementById("hearts");
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        hearts.appendChild(heart);
    }
}
