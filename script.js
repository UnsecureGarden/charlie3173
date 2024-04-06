const playButton = document.getElementById('playButton');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const musiques = [audio1, audio2];

playButton.addEventListener('click', () => {
    const musiqueAleatoire = musiques[Math.floor(Math.random() * musiques.length)];
    musiques.forEach(musique => {
        if (musique !== musiqueAleatoire) {
            musique.pause();
            musique.currentTime = 0;
        }
    });
    musiqueAleatoire.play();
});
