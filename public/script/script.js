const volumeSlider = document.querySelector('.volume-slider');

    volumeSlider.addEventListener('input', function() {
        const volume = this.value;
        console.log(`Volume set to ${volume}%`);
        // You can add code here to handle the volume change
    });