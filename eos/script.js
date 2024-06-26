function showMessage(language) {
    const slogan = document.getElementById('slogan');
    const audio = document.getElementById('background-music');
    if (language === 'english') {
        slogan.textContent = 'Whoever moves first is gay.';
    } else if (language === 'spanish') {
        slogan.textContent = 'El primero que se mueva es gay.';
    }
    document.querySelector('.buttons').style.display = 'none';
    audio.play(); // Inicia la reproducción del audio
}
