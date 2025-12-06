const botaoTema = document.getElementById("toggle-theme");

if (botaoTema){
    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
} else {
    console.warn("Botão de alternar tema não encontrado (id toggle-theme).");
}