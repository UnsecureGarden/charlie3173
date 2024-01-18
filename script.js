document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var audioPlayer = document.getElementById('audioPlayer');

    playButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.innerHTML = 'Pause';
        } else {
            audioPlayer.pause();
            playButton.innerHTML = 'Clique ici';
        }
    });
});
