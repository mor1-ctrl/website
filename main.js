
// Toggle Video Mute State
function toggleMute() {
    var video = document.getElementById('video');
    video.muted = !video.muted;
}

// Delay Function
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Show Video and Handle Fullscreen
function showVideo() {
    var video = document.getElementById('video');
    var container = document.getElementById('container-video');
    var button = document.getElementById('button');
    
    // Show video container
    container.style.display = 'block';
    
    // Ensure video plays
    video.play().catch(error => console.log("Autoplay failed:", error));
    
    // Enable fullscreen mode
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }

    // Hide the button
    button.style.display = 'none';

    // Unmute video after a slight delay
    delay(100).then(() => toggleMute());
}
