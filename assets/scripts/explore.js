// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const face_image = document.querySelector('#explore > img');
  const textarea = document.querySelector('#text-to-speak');
  const voice_select = document.querySelector('#voice-select');
  const talk_button = document.querySelector('button');

  const synth = window.speechSynthesis;

  function populate_voices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voice_select.appendChild(option);
    });
  }

  populate_voices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populate_voices;
  }

  talk_button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);

    const selected_voice = synth.getVoices().find(v => v.name === voice_select.value);
    if (selected_voice) utterance.voice = selected_voice;

    utterance.onstart = () => {
      face_image.src = 'assets/images/smiling-open.png';
      face_image.alt = 'Smiling face open';
    };

    utterance.onend = () => {
      face_image.src = 'assets/images/smiling.png';
      face_image.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}
