// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_select = document.querySelector('#horn-select');
  const horn_image = document.querySelector('#expose > img');
  const volume_slider = document.querySelector('#volume');
  const volume_icon = document.querySelector('#volume-controls img');
  const play_button = document.querySelector('button');
  const audio = document.querySelector('audio');

  audio.volume = volume_slider.value / 100;

  horn_select.addEventListener('change', () => {
    const horn = horn_select.value;
    horn_image.src = `assets/images/${horn}.svg`;
    horn_image.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volume_slider.addEventListener('input', () => {
    const volume = parseInt(volume_slider.value);
    audio.volume = volume / 100;

    let level;
    if (volume === 0) level = 0;
    else if (volume < 33) level = 1;
    else if (volume < 67) level = 2;
    else level = 3;

    volume_icon.src = `assets/icons/volume-level-${level}.svg`;
    volume_icon.alt = `Volume level ${level}`;
  });

  play_button.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();

    if (horn_select.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
