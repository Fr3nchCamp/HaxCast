// script.js
const video = document.getElementById('videoPlayer');
const playPauseButton = document.getElementById('playPause');
const muteUnmuteButton = document.getElementById('muteUnmute');
const seekBar = document.getElementById('seekBar');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

playPauseButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Lecture';
    }
});

muteUnmuteButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteButton.textContent = 'Son Off';
    } else {
        video.muted = true;
        muteUnmuteButton.textContent = 'Son On';
    }
});

video.addEventListener('timeupdate', function() {
    const currentTimeValue = formatTime(video.currentTime);
    currentTime.textContent = currentTimeValue;
    const durationValue = formatTime(video.duration);
    duration.textContent = durationValue;
    seekBar.value = (video.currentTime / video.duration) * 100;
});

seekBar.addEventListener('input', function() {
    const timeToSeek = (seekBar.value / 100) * video.duration;
    video.currentTime = timeToSeek;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
