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

var randomWord;
var userScore = 0;
var totalScore = 0;
var totalScoreArray = [];
var timeleft = 60;
var timer;
var randomWordSplit = [];

function generateRandomWord() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  randomWordSplit = randomWord.split('');
  for(var i = 0; i < randomWordSplit.length; i ++){
    var span = document.createElement('span')
    span.textContent = randomWordSplit[i];
    wordBoxReference.append(span);
  } 
  // wordBoxReference.textContent = randomWord;
};

function highlight() {
  for(var i = 0; i < randomWordSplit.length; i++){
    for(var t = 0; t < log.textContent.length; t++){
      if(randomWordSplit[i] === log.textContent.charAt(t)){
        randomWordSplit[i].setAttribute('class', )
        console.log(`${randomWordSplit} is the same as ${log.textContent.charAt(t)}`)
      }
    }
  }
 }

function getUserInput(event) {
  log.textContent = event.target.value.toUpperCase();
  if (log.textContent === randomWord) {
    wordBoxReference.textContent = '';
    correctAnswer.play();
    generateRandomWord();
    input.value = "";
    userScore++;
    document.getElementById('user-score').innerHTML = userScore;
  }
}
input.addEventListener('input', getUserInput);

function countdown() {
  document.getElementById("timer").innerHTML = timeleft;
  timeleft -= 1;
  if (timeleft === -1) {
    clearInterval(timer);

    totalScore = userScore;
    totalScoreArray.push(totalScore);

    storeUserScore();
    retrieveUserScore();
    gameOver();
    gameMusic.pause();

    input.value = "";
    input.removeEventListener('input', getUserInput);

    button.setAttribute('class', 'play-again');
  }
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

function storeUserScore() {
  var stringifiedUserScore = JSON.stringify(totalScoreArray);
  localStorage.setItem('Score', stringifiedUserScore)
}

var getUserScore = 0;
var storedUserScore = 0;
function retrieveUserScore() {
  getUserScore = localStorage.getItem('Score');
  storedUserScore = JSON.parse(getUserScore);
}

function startGame() {
  highlight();
  input.value = "";
  document.getElementById("input").focus();
  input.addEventListener('input', getUserInput);
  input.addEventListener('keydown', highlight);

  button.setAttribute('class', 'start');

  userScore = 0;

  gameMusic.play();
  gameMusic.loop = true;

  clearInterval(timer);
  timer = setInterval(countdown, 1000);
  timeleft = 60;

  countdown();
  generateRandomWord();  
  };

var gameMusic = new Audio('assets/Good-Morning-Doctor-Weird.mp3');
var correctAnswer = new Audio('assets/correct-answer-sound-effect-19.mp3')

button.addEventListener("click", function () {
  startGame();

});


