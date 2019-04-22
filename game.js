var randomWord;
var wordList = ['atlanta', 'falcons', 'superbowl', 'hawks', 'skywalker'];

function generateRandomWord() {
  for (var i = 0; i < wordList.length; i++) {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    var wordBoxReference = document.getElementById('word-box');
    wordBoxReference.textContent = randomWord;
  }
};

function updateValue(event) {
  var input = document.querySelector('input');
  var log = document.getElementById('user-text');
  input.addEventListener('input', updateValue);
  log.textContent = event.srcElement.value;
  if (log.textContent === randomWord) {
    generateRandomWord();
    input.value = "";
  }
}
generateRandomWord();
updateValue();
