var randomWord;
var wordList = ['atlanta', 'falcons', 'superbowl', 'hawks', 'skywalker'];
function generateRandomWord() {
  for (var i = 0; i < wordList.length; i++) {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    var wordBoxReference = document.getElementById('word-box')
    wordBoxReference.textContent = randomWord;
    var input = document.querySelector('input');
    var log = document.getElementById('values');
    input.addEventListener('input', updateValue);

    function updateValue(event) {
      log.textContent = event.srcElement.value;
      if (log.textContent === randomWord) {
        generateRandomWord();
      }
    }
  }
};
generateRandomWord();

