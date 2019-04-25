'use strict'

var wordList = ['ACCOUNT', 'ACCURATE', 'ACRES', 'ACROSS', 'ACT', 'ACTION', 'ACTIVE', 'ACTIVITY', 'BASEBALL', 'BASIC', 'BASIS', 'BASKET', 'BAT', 'BATTLE', 'BE', 'BEAN',
  'BEAR', 'BEAT', 'BEAUTIFUL', 'BEAUTY', 'BECAME', 'BECAUSE', 'BECOME', 'BECOMING',
  'BEE', 'BEEN', 'BEFORE', 'BEGAN', 'BEGINNING', 'BEGUN', 'BEHAVIOR', 'BEHIND', 'CHANCE', 'CHANGE', 'CHANGING', 'CHAPTER', 'CHARACTER', 'CHARACTERISTIC', 'CHARGE', 'CHART',
  'CHECK', 'CHEESE', 'CHEMICAL', 'CHEST', 'CHICKEN', 'CHIEF', 'CHILD', 'CHILDREN', 'CROP', 'CROSS', 'CROWD', 'CRY', 'CUP', 'CURIOUS', 'CURRENT', 'CURVE',
  'CUSTOMS', 'CUT', 'CUTTING', 'DAILY', 'DAMAGE', 'DANCE', 'DANGER', 'DANGEROUS',
  'DARK', 'DARKNESS', 'DATE', 'DAUGHTER', 'DAWN', 'DAY', 'DEAD', 'DEAL',
  'DEAR', 'DEATH', 'DECIDE', 'DECLARED', 'DEEP', 'DEEPLY', 'DEER', 'DEFINITION',
  'DEGREE', 'DEPEND', 'DEPTH', 'DESCRIBE', 'DESERT', 'DESIGN', 'DESK', 'DETAIL', 'EXCELLENT', 'EXCEPT', 'EXCHANGE', 'EXCITED', 'EXCITEMENT', 'EXCITING', 'EXCLAIMED', 'EXERCISE',
  'EXIST', 'EXPECT', 'EXPERIENCE', 'EXPERIMENT', 'EXPLAIN', 'EXPLANATION', 'EXPLORE', 'EXPRESS',
  'EXPRESSION', 'EXTRA', 'EYE', 'FACE', 'FACING', 'FACT', 'FACTOR', 'FACTORY',
  'FAILED', 'FAIR', 'FAIRLY', 'FALL', 'FALLEN', 'FAMILIAR', 'FAMILY', 'FAMOUS',
  'FAR', 'FARM', 'FARMER', 'FARTHER', 'FAST', 'FASTENED', 'FASTER', 'FAT',
  'FATHER', 'FAVORITE', 'FEAR', 'FEATHERS', 'FEATURE', 'FED', 'FEED', 'FEEL',
  'FEET', 'FELL', 'FELLOW', 'FELT', 'FENCE', 'FEW', 'FEWER', 'FIELD', 'GOT', 'GOVERNMENT', 'GRABBED', 'GRADE', 'GRADUALLY', 'GRAIN', 'GRANDFATHER', 'GRANDMOTHER',
  'GRAPH', 'GRASS', 'GRAVITY', 'GRAY', 'GREAT', 'GREATER', 'GREATEST', 'GREATLY',
  'GREEN', 'GREW', 'GROUND', 'GROUP', 'GROW', 'GROWN', 'GROWTH', 'GUARD',
  'GUESS', 'GUIDE', 'GULF', 'GUN', 'HABIT', 'HAD', 'HAIR', 'HALF',
  'HALFWAY', 'HALL', 'HAND', 'HANDLE', 'HANDSOME', 'HANG', 'HAPPEN', 'HAPPENED',
  'HAPPILY', 'HAPPY', 'HARBOR', 'HARD', 'HARDER', 'HARDLY', 'HAS', 'HAT', 'INSTANCE', 'INSTANT', 'INSTEAD',
  'INSTRUMENT', 'INTEREST', 'INTERIOR', 'INTO', 'INTRODUCED', 'INVENTED', 'INVOLVED', 'IRON',
  'IS', 'ISLAND', 'IT', 'ITS', 'ITSELF', 'JACK', 'JAR', 'JET',
  'JOB', 'JOIN', 'JOINED', 'JOURNEY', 'JOY', 'JUDGE', 'JUMP', 'JUNGLE',
  'JUST', 'KEEP', 'KEPT', 'KEY', 'KIDS', 'KILL', 'KIND', 'KITCHEN',
  'KNEW', 'KNIFE', 'KNOW', 'KNOWLEDGE', 'KNOWN', 'LABEL', 'LABOR', 'LACK',
  'LADY', 'LAID', 'LAKE', 'LAMP', 'LAND', 'LANGUAGE', 'LARGE', 'LARGER',
  'LARGEST', 'LAST', 'LATE', 'LATER', 'LAUGH', 'LAW', 'LAY', 'LAYERS', 'MIND', 'MINE', 'MINERALS', 'MINUTE', 'MIRROR', 'MISSING', 'MISSION', 'MISTAKE', 'NUMBER', 'NUMERAL', 'NUTS', 'OBJECT', 'OBSERVE', 'OBTAIN', 'OCCASIONALLY', 'OCCUR',
  'OCEAN', 'OF', 'OFF', 'OFFER', 'OFFICE', 'OFFICER', 'OFFICIAL', 'OIL', 'PURPOSE', 'PUSH', 'PUT', 'PUTTING', 'QUARTER', 'QUEEN', 'QUESTION', 'QUICK',
  'QUICKLY', 'QUIET', 'QUIETLY', 'QUITE', 'RABBIT', 'RACE', 'RADIO', 'RAILROAD',
  'RAIN', 'RAISE', 'RAN', 'RANCH', 'RANGE', 'RAPIDLY', 'RATE', 'RATHER',
  'RAW', 'RAYS', 'REACH', 'READ', 'READER', 'READY', 'REAL', 'REALIZE', 'SUGGEST', 'SUIT', 'SUM', 'SUMMER', 'SUN', 'SUNLIGHT', 'SUPPER', 'SUPPLY',
  'SUPPORT', 'SUPPOSE', 'SURE', 'SURFACE', 'SURPRISE', 'SURROUNDED', 'SWAM', 'SWEET',
  'SWEPT', 'SWIM', 'SWIMMING', 'SWING', 'SWUNG', 'SYLLABLE', 'SYMBOL', 'SYSTEM',
  'TABLE', 'TAIL', 'TAKE', 'TAKEN', 'TALES', 'TALK', 'TALL', 'TANK',
  'TAPE', 'TASK', 'TASTE', 'TAUGHT', 'TAX', 'TEA', 'TEACH', 'TEACHER', 'TURN', 'TWELVE', 'TWENTY', 'TWICE', 'TWO', 'TYPE', 'TYPICAL', 'UNCLE',
  'UNDER', 'UNDERLINE', 'UNDERSTANDING', 'UNHAPPY', 'UNION', 'UNIT', 'UNIVERSE', 'UNKNOWN',
  'UNLESS', 'UNTIL', 'UNUSUAL', 'UP', 'UPON', 'UPPER', 'UPWARD', 'US', 'VESSELS', 'VICTORY', 'VIEW', 'VILLAGE', 'VISIT', 'VISITOR', 'VOICE', 'VOLUME',
  'VOTE', 'VOWEL', 'VOYAGE', 'WAGON', 'WAIT', 'WALK', 'WALL', 'WANT',
  'WAR', 'WARM', 'WARN', 'WAS', 'WASH', 'WASTE', 'WATCH', 'WATER',
  'WAVE', 'WAY', 'WE', 'WEAK', 'WEALTH', 'WEAR', 'WEATHER', 'WEEK', 'WRAPPED', 'WRITE', 'WRITER', 'WRITING', 'WRITTEN', 'WRONG', 'WROTE', 'YARD',
  'YEAR', 'YELLOW', 'YES', 'YESTERDAY', 'YET', 'YOU', 'YOUNG', 'YOUNGER',
  'YOUR', 'YOURSELF', 'YOUTH', 'ZERO', 'ZOO'];

var wordBoxReference = document.getElementById('word-box');
var input = document.getElementById('input');
var log = document.getElementById('user-text');
var button = document.getElementById("button");

var userScore = 0;
var totalScore = 0;
var totalScoreArray = [];

var timeleft = 60;
var timer;

var randomWord;
var randomWordSplit = [];
var textContentSplit = [];

var getUserScore = 0;
var storedUserScore = 0;

var gameMusic = new Audio('assets/Good-Morning-Doctor-Weird.mp3');
var correctAnswer = new Audio('assets/correct-answer-sound-effect-19.mp3')

function generateRandomWord() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  randomWordSplit = randomWord.split('');
  for (var i = 0; i < randomWordSplit.length; i++) {
    var span = document.createElement('span')
    span.textContent = randomWordSplit[i];
    span.setAttribute('id', i);
    span.removeAttribute('class');
    wordBoxReference.append(span);
  }
};

function highlight() {
  textContentSplit = log.textContent.split('')
  for (var i = 0; i < randomWordSplit.length; i++) {
    if (randomWordSplit[i] === textContentSplit[i]) {
      document.getElementById(`${i}`).setAttribute('class', 'text-color');
      console.log(`${randomWordSplit[i]} is the same as ${textContentSplit[i]}`)
    }
  }
}

function checkUserInput(event) {
  log.textContent = event.target.value.toUpperCase();
  if (log.textContent === randomWord) {
    wordBoxReference.innerHTML = '';
    correctAnswer.play();
    generateRandomWord();
    input.value = "";
    userScore++;
    document.getElementById('user-score').innerHTML = userScore;

  }
  } else { highlight(); }
}

function countdown() {
  document.getElementById("timer").innerHTML = timeleft;
  timeleft -= 1;
  if (timeleft === -1) {
    clearInterval(timer);

    totalScore = userScore;
    totalScoreArray.push(totalScore);

    saveUserScore();
    retrieveUserScore();
    gameOver();
    gameMusic.pause();

    input.value = "";
    input.removeEventListener('input', checkUserInput);

    button.setAttribute('class', 'play-again');
  }
}

function saveUserScore() {
  var stringifiedUserScore = JSON.stringify(totalScoreArray);
  localStorage.setItem('Score', stringifiedUserScore)
}

function retrieveUserScore() {
  getUserScore = localStorage.getItem('Score');
  storedUserScore = JSON.parse(getUserScore);
}

function gameOver() {
  if (storedUserScore.length === 1) {
    alert(`Times up! You scored ${totalScore} points!`)
  }
  if (totalScore > storedUserScore[storedUserScore.length - 2]) {
    alert(`Times up! You improved by ${totalScore - storedUserScore[storedUserScore.length - 2]} wpm! Nice work!`)
  } else if (totalScore < storedUserScore[storedUserScore.length - 2]) {
    alert(`Times up! You scored ${totalScore} points. That's ${storedUserScore[storedUserScore.length - 2] - totalScore} wpm slower than last round, keep practicing!`)
  } else if (totalScore === storedUserScore[storedUserScore.length - 2]) {
    alert(`You scored ${totalScore} points. No better and no worse!`)
  }
}

function startGame() {

  input.value = "";
  wordBoxReference.innerHTML = '';
  document.getElementById("input").focus();

  button.setAttribute('class', 'start');
  

  userScore = 0;
  clearInterval(timer);
  timer = setInterval(countdown, 1000);
  timeleft = 60;

  countdown();
  generateRandomWord();  
  }

var gameMusic = new Audio('assets/Good-Morning-Doctor-Weird.mp3');
var correctAnswer = new Audio('assets/correct-answer-sound-effect-19.mp3')
  generateRandomWord();
  gameMusic.play();
  gameMusic.loop = true;
  input.addEventListener('input', checkUserInput);
};

button.addEventListener("click", function () {

  startGame();
});
