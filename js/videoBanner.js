// Video banner functionality
class VideoBanner {
  constructor() {
    this.video = document.getElementById('banner-video');
    this.isReversing = false;
    this.init();
  }

  init() {
    // Start playing when the video is loaded
    this.video.addEventListener('loadedmetadata', () => this.video.play());
    
    // Handle the forward-reverse loop
    this.video.addEventListener('timeupdate', () => {
      if (!this.isReversing && this.video.currentTime >= this.video.duration - 0.1) {
        // When reaching the end, start playing in reverse
        this.isReversing = true;
        this.reversePlayback();
      }
    });
  }

  reversePlayback() {
    // Reverse playback using requestAnimationFrame for smooth playback
    const step = 1/30; // Adjust this value to control reverse speed
    const reverseInterval = setInterval(() => {
      if (this.video.currentTime <= 0) {
        // When reaching the start, clear interval and start forward playback
        clearInterval(reverseInterval);
        this.isReversing = false;
        this.video.play();
      } else {
        this.video.currentTime = Math.max(0, this.video.currentTime - step);
      }
    }, 1000/30); // 30fps
  }
}