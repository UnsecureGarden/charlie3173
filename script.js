document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer');

    // Ajout d'un écouteur d'événement pour masquer le bouton "Clique ici" lors du chargement de la page
    audioPlayer.addEventListener('loadedmetadata', function () {
        var playButton = document.getElementById('playButton');
        playButton.style.display = 'none';
    });

    // Ajout d'un écouteur d'événement sur le bouton "play" du lecteur audio
    audioPlayer.addEventListener('play', function () {
        var playButton = document.getElementById('playButton');
        playButton.style.display = 'none';  // Masquer le bouton lorsqu'il est en cours de lecture
    });

    // Ajout d'un écouteur d'événement sur le bouton "pause" du lecteur audio
    audioPlayer.addEventListener('pause', function () {
        var playButton = document.getElementById('playButton');
        playButton.style.display = 'block';  // Afficher le bouton lors de la pause
    });
});
