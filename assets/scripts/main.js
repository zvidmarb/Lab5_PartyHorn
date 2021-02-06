// main.js

const volumeNum = document.getElementById('volume-number');
const volumeSlide = document.getElementById('volume-slider');
const volumeImage = document.getElementById('volume-image');

const airHorn = document.getElementById('radio-air-horn');
const carHorn = document.getElementById('radio-car-horn');
const partyHorn = document.getElementById('radio-party-horn');
const hornImage = document.getElementById('sound-image');

const hornSound = document.getElementById('horn-sound');
const hornButton = document.getElementById('honk-btn');



/* Input field that serves as the textual indicator of sound level
    - This field is editable - the sound level of the <audio> element should be changed when editing this input field
    - When this field is changed, the slider bar should move correspondingly.
    - Conversely, whenever the slider bar changes this field should update as well.
    - The volume icon should display the correct number of bars based upon this value  (see below for ranges)*/

volumeSlide.addEventListener("input", function () {
    volumeNum.value = volumeSlide.value;
    updateVolume(volumeSlide.value);
    
});
volumeNum.addEventListener("input", function () {
    volumeSlide.value = volumeNum.value;
    updateVolume(volumeNum.value);
    //volume = e.target.value;
});


/* Slider that serves visual controller for sound level
    - When the slider position changes, the sound level of the <audio> element also changes
    - This slider should update position when sound level is changed by the input field
    - Again, the volume icon should display the correct number of bars based upon this value (see below for ranges)*/
    /* Volume icon that change depending on the sound level
    - volume-level-3: 67-100
    - volume-level-2: 34-66
    - volume-level-1: 1-33
    - volume-level-0: 0
    - Change the volume icon depending on different ranges:*/
function updateVolume (volume) {
    hornSound.volume = volume/100;
    if (volume == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        hornButton.disabled = true;
        return;
    }
    hornButton.disabled = false;
    if (volume >= 67) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    } else if (volume >= 34) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } else if (volume >=1) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        hornButton.disabled = true;
    }
};

/* Radio that switches between different horn sounds
    - 3 different options: Air Horn, Car Horn, and Party Horn
    - Selecting a radio switch should change the sound that the <audio> element will play
    - Selecting a radio switch should also change the large image of what sound will play */
airHorn.addEventListener("change", function() {
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    hornImage.src = "./assets/media/images/air-horn.svg";

});

carHorn.addEventListener("change", function() {
    hornSound.src = "./assets/media/audio/car-horn.mp3";
    hornImage.src = "./assets/media/images/car.svg";
});

partyHorn.addEventListener("change", function() {
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    hornImage.src = "./assets/media/images/party-horn.svg";
    
});

/* Button that plays the horn sound
    - Button should be disabled if volume is muted (meaning volume is exactly 0)
    - Otherwise, it should play the selected horn sound with the current volume level
    */
hornButton.addEventListener("click", function(event) {
    event.preventDefault();
    hornSound.play();
});