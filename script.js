document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var audioPlayer = document.getElementById('audioPlayer');

    playButton.addEventListener('click', function () {
        audioPlayer.play();
    });
});
