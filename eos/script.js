document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('background-music');
    setTimeout(() => {
        audio.play().catch(error => {
            console.error("Playback failed due to:", error);
        });
    }, 1000); // Retraso de 1 segundo para garantizar que la página esté completamente cargada
});

function showMessage(language) {
    const slogan = document.getElementById('slogan');
    const audio = document.getElementById('background-music');
    if (language === 'english') {
        slogan.textContent = 'Whoever moves first is gay';
    } else if (language === 'spanish') {
        slogan.textContent = 'El primero que se mueva es gay';
    }
    document.querySelector('.buttons').style.display = 'none';
    if (audio.paused) {
        audio.play().catch(error => {
            console.error("Playback failed due to:", error);
        });
    }
}
