const animalCards = document.querySelectorAll('.animal-card');
const sounds = {};
const keyMap = {
  b: 'birds',
  c: 'cow',
  d: 'dog',
  g: 'geese',
  h: 'horse',
  k: 'kitty',
  r: 'rooster',
};

animalCards.forEach(card => {
  const animal = card.dataset.animal;
  const audio = new Audio(`sounds/${animal}.wav`);
  sounds[animal] = audio;

  card.addEventListener('click', () => {
    playSound(animal);
    triggerVisualEffect(card);
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  const animal = keyMap[key];
  if (animal) {
    playSound(animal);
    const card = document.querySelector(`.animal-card[data-animal="${animal}"]`);
    if (card) {
      triggerVisualEffect(card);
    }
  }
});

function playSound(animal) {
  for (let key in sounds) {
    sounds[key].pause();
    sounds[key].currentTime = 0;
  }

  const audio = sounds[animal];
  if (audio) {
    audio.play();
  }
}


function triggerVisualEffect(card) {
  card.classList.add('active');
  setTimeout(() => {
    card.classList.remove('active');
  }, 500); // setTimeout מריץ פונקציה אחרי עיכוב של זמן מסוים (במילישניות)
}