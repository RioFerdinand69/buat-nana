const audio = document.getElementById('background-audio');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

// Event listener untuk tombol play
playButton.addEventListener('click', () => {
    audio.play(); // Memulai pemutaran audio
});

// Event listener untuk tombol pause
pauseButton.addEventListener('click', () => {
    audio.pause(); // Menjeda pemutaran audio
});

const title = document.querySelector('.title')
const text = 'I Have Something for nana'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
  
  
});