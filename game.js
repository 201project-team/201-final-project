'use strict'

var easy = ["ACRES", "ACT", "BASIC", "BASIS", "BAT", "BE", "BEAN", "BEAR", "BEAT", "BEE", "BEEN", "BEGAN", "BEGUN", "CHART", "CHECK", "CHEST", "CHIEF", "CHILD", "CROP", "CROSS", "CROWD", "CRY", "CUP", "CURVE", "CUT", "DAILY", "DANCE", "DARK", "DATE", "DAWN", "DAY", "DEAD", "DEAL", "DEAR", "DEATH", "DEEP", "DEER", "DEPTH", "DESK", "EXIST", "EXTRA", "EYE", "FACE", "FACT", "FAIR", "FALL", "FAR", "FARM", "FAST", "FAT", "FEAR", "FED", "FEED", "FEEL", "FEET", "FELL", "FELT", "FENCE", "FEW", "FEWER", "FIELD", "GOT", "GRADE", "GRAIN", "GRAPH", "GRASS", "GRAY", "GREAT", "GREEN", "GREW", "GROUP", "GROW", "GROWN", "GUARD", "GUESS", "GUIDE", "GULF", "GUN", "HABIT", "HAD", "HAIR", "HALF", "HALL", "HAND", "HANG", "HAPPY", "HARD", "HAS", "HAT", "INTO", "IRON", "IS", "IT", "ITS", "JACK", "JAR", "JET", "JOB", "JOIN", "JOY", "JUDGE", "JUMP", "JUST", "KEEP", "KEPT", "KEY", "KIDS", "KILL", "KIND", "KNEW", "KNIFE", "KNOW", "KNOWN", "LABEL", "LABOR", "LACK", "LADY", "LAID", "LAKE", "LAMP", "LAND", "LARGE", "LAST", "LATE", "LATER", "LAUGH", "LAW", "LAY", "MIND", "MINE", "NUTS", "OCCUR", "OCEAN", "OF", "OFF", "OFFER", "OIL", "PUSH", "PUT", "QUEEN", "QUICK", "QUIET", "QUITE", "RACE", "RADIO", "RAIN", "RAISE", "RAN", "RANCH", "RANGE", "RATE", "RAW", "RAYS", "REACH", "READ", "READY", "REAL", "SUIT", "SUM", "SUN", "SURE", "SWAM", "SWEET", "SWEPT", "SWIM", "SWING", "SWUNG", "TABLE", "TAIL", "TAKE", "TAKEN", "TALES", "TALK", "TALL", "TANK", "TAPE", "TASK", "TASTE", "TAX", "TEA", "TEACH", "TURN", "TWICE", "TWO", "TYPE", "UNCLE", "UNDER", "UNION", "UNIT", "UNTIL", "UP", "UPON", "UPPER", "US", "VIEW", "VISIT", "VOICE", "VOTE", "VOWEL", "WAGON", "WAIT", "WALK", "WALL", "WANT", "WAR", "WARM", "WARN", "WAS", "WASH", "WASTE", "WATCH", "WATER", "WAVE", "WAY", "WE", "WEAK", "WEAR", "WEEK", "WRITE", "WRONG", "WROTE", "YARD", "YEAR", "YES", "YET", "YOU", "YOUNG", "YOUR", "YOUTH", "ZERO", "ZOO"]

var medium = ["ACCOUNT", "ACCURATE", "ACROSS", "ACTION", "ACTIVE", "ACTIVITY", "BASEBALL", "BASKET", "BATTLE", "BEAUTY", "BECAME", "BECAUSE", "BECOME", "BECOMING", "BEFORE", "BEHAVIOR", "BEHIND", "CHANCE", "CHANGE", "CHANGING", "CHAPTER", "CHARGE", "CHEESE", "CHEMICAL", "CHICKEN", "CHILDREN", "CURIOUS", "CURRENT", "CUSTOMS", "CUTTING", "DAMAGE", "DANGER", "DARKNESS", "DAUGHTER", "DECIDE", "DECLARED", "DEEPLY", "DEGREE", "DEPEND", "DESCRIBE", "DESERT", "DESIGN", "DETAIL", "EXCEPT", "EXCHANGE", "EXCITED", "EXCITING", "EXERCISE", "EXPECT", "EXPLAIN", "EXPLORE", "EXPRESS", "FACING", "FACTOR", "FACTORY", "FAILED", "FAIRLY", "FALLEN", "FAMILIAR", "FAMILY", "FAMOUS", "FARMER", "FARTHER", "FASTENED", "FASTER", "FATHER", "FAVORITE", "FEATHERS", "FEATURE", "FELLOW", "GRABBED", "GRAVITY", "GREATER", "GREATEST", "GREATLY", "GROUND", "GROWTH", "HALFWAY", "HANDLE", "HANDSOME", "HAPPEN", "HAPPENED", "HAPPILY", "HARBOR", "HARDER", "HARDLY", "INSTANCE", "INSTANT", "INSTEAD", "INTEREST", "INTERIOR", "INVENTED", "INVOLVED", "ISLAND", "ITSELF", "JOINED", "JOURNEY", "JUNGLE", "KITCHEN", "LANGUAGE", "LARGER", "LARGEST", "LAYERS", "MINERALS", "MINUTE", "MIRROR", "MISSING", "MISSION", "MISTAKE", "NUMBER", "NUMERAL", "OBJECT", "OBSERVE", "OBTAIN", "OFFICE", "OFFICER", "OFFICIAL", "PURPOSE", "PUTTING", "QUARTER", "QUESTION", "QUICKLY", "QUIETLY", "RABBIT", "RAILROAD", "RAPIDLY", "RATHER", "READER", "REALIZE", "SUGGEST", "SUMMER", "SUNLIGHT", "SUPPER", "SUPPLY", "SUPPORT", "SUPPOSE", "SURFACE", "SURPRISE", "SWIMMING", "SYLLABLE", "SYMBOL", "SYSTEM", "TAUGHT", "TEACHER", "TWELVE", "TWENTY", "TYPICAL", "UNHAPPY", "UNIVERSE", "UNKNOWN", "UNLESS", "UNUSUAL", "UPWARD", "VESSELS", "VICTORY", "VILLAGE", "VISITOR", "VOLUME", "VOYAGE", "WEALTH", "WEATHER", "WRAPPED", "WRITER", "WRITING", "WRITTEN", "YELLOW", "YOUNGER", "YOURSELF"];

var hard = ["ACCURATE", "ACTIVITY", "BASEBALL", "BEAUTIFUL", "BECOMING", "BEGINNING", "BEHAVIOR", "CHANGING", "CHARACTER", "CHARACTERISTIC", "CHEMICAL", "CHILDREN", "DANGEROUS", "DARKNESS", "DAUGHTER", "DECLARED", "DEFINITION", "DESCRIBE", "EXCELLENT", "EXCHANGE", "EXCITEMENT", "EXCITING", "EXCLAIMED", "EXERCISE", "EXPERIENCE", "EXPERIMENT", "EXPLANATION", "EXPRESSION", "FAMILIAR", "FASTENED", "FAVORITE", "FEATHERS", "GOVERNMENT", "GRADUALLY", "GRANDFATHER", "GRANDMOTHER", "GREATEST", "HANDSOME", "HAPPENED", "INSTANCE", "INSTRUMENT", "INTEREST", "INTERIOR", "INTRODUCED", "INVENTED", "INVOLVED", "KNOWLEDGE", "LANGUAGE", "MINERALS", "OCCASIONALLY", "OFFICIAL", "QUESTION", "RAILROAD", "SUNLIGHT", "SURPRISE", "SURROUNDED", "SWIMMING", "SYLLABLE", "UNDERLINE", "UNDERSTANDING", "UNIVERSE", "YESTERDAY", "YOURSELF"];

var insanity = ["PHONOCARDIOGRAM", "METALINGUISTICS", "DETERMINATENESS", "NONMONISTICALLY", "PROLETARIANNESS", "PREORGANIZATION", "INTERPEDUNCULAR", "DERMATOPHYTOSIS", "NONARISTOCRATIC", "AUTECOLOGICALLY", "NONCONTROLLABLE", "NONEMANCIPATION", "RENORMALIZATION", "PRODISTRIBUTION", "NONDISCOVERABLE", "HYPEROXYGENIZED", "UNCOUNTERVAILED", "IRREFRAGABILITY", "WITHDRAWINGNESS", "CARPENTERSVILLE", "NONCONTINUATION", "SYLLABIFICATION", "RECONSOLIDATING", "BLAGOVESHCHENSK", "TREASONABLENESS", "TRANSACTIONALLY", "ANTIPERISTALTIC", "TRANSFILTRATION", "SUPERTEMPTATION", "ORONTIPHARYNGES", "PREINCORPORATED", "NONILLUSTRATIVE", "PSEUDORHEUMATIC", "NONDECASYLLABLE", "GYNAECOMORPHOUS", "ANACOLUTHICALLY", "NONINTERCEPTIVE", "THERMODIFFUSION", "HYPNOSPORANGIUM", "PHOTOMETRICALLY", "UNCONGRATULATED", "SUPERACCUMULATE", "OUTMALAPROPPING", "UNDEVELOPMENTAL", "SUPERORDINATING", "IRREPEALABILITY", "TERRITORIALIZED", "COLONIALIZATION", "UNEXPOSTULATING", "UNCONGLUTINATED"];

var wordBoxReference = document.getElementById('word-box');
var input = document.getElementById('input');
var log = document.getElementById('user-text');
var button = document.getElementById("button");
var changeBackground = document.getElementById('bg-beach');

var userScore = 0;
var totalScore = 0;
var totalScoreArray = [];
var userNameArray = [];

var timeleft = 60;
var timer;

var randomWord;
var randomWordSplit = [];
var textContentSplit = [];

var getUserScore = 0;
var storedUserScore = 0;
var userName;
var userObjectArr = [];
var user = {};

var gameMusic = new Audio('assets/Good-Morning-Doctor-Weird.mp3');
var correctAnswer = new Audio('assets/correct-answer-sound-effect-19.mp3');
var incorrectAnswer = new Audio('assets/Quick Fart-SoundBible.com-655578646.mp3');
var typewriterSound = new Audio('assets/typewriter-key-1.mp3');
var insanityMusic = new Audio('assets/insanity.mp3');

function generateRandomWord() {
  if (userScore <= 4) {
    randomWord = easy[Math.floor(Math.random() * easy.length)];
    randomWordSplit = randomWord.split('');
  } else if (userScore >= 5 && userScore <= 9) {
    randomWord = medium[Math.floor(Math.random() * medium.length)];
    randomWordSplit = randomWord.split('');
  } else if (userScore >= 10 && userScore < 20) {
    randomWord = hard[Math.floor(Math.random() * hard.length)];
    randomWordSplit = randomWord.split('');
  }
  if (userScore >= 20) {
    insanityMode();
    randomWord = insanity[Math.floor(Math.random() * insanity.length)];
    randomWordSplit = randomWord.split('');
  }
  for (var i = 0; i < randomWordSplit.length; i++) {
    var span = document.createElement('span')
    span.textContent = randomWordSplit[i];
    span.setAttribute('id', i);
    span.removeAttribute('class');
    wordBoxReference.append(span);
  }
};

function highlightLetters() {
  textContentSplit = log.textContent.split('')
  for (var i = 0; i < randomWordSplit.length; i++) {
    if (randomWordSplit[i] === textContentSplit[i]) {
      document.getElementById(`${i}`).setAttribute('class', 'text-color');
      console.log(`${randomWordSplit[i]} is the same as ${textContentSplit[i]}`)
    }
    if (randomWordSplit[i] !== textContentSplit[i]) {
    }
  }
  console.log(randomWordSplit[i] !== textContentSplit[i]);
}

function checkUserInput(event) {
  log.textContent = event.target.value.toUpperCase();
  if (log.textContent === randomWord) {
    if (userScore >= 20) { // During insanity mode if word is correct add 3secs to timer
      clearInterval(timer);
      timer = setInterval(countdown, 1000);
      timeleft = timeleft + 3;
    }
    wordBoxReference.innerHTML = '';
    input.value = "";
    userScore++;
    document.getElementById('user-score').innerHTML = userScore;

    generateRandomWord();

    correctAnswer.play();
    correctAnswer.currentTime = 0;
    playbackSpeed();

  } else {
    highlightLetters();
  }
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

    input.value = "";
    input.removeEventListener('input', checkUserInput);

    gameMusic.pause();
    insanityMusic.pause();
    button.setAttribute('class', 'play-again');
  }
}

function playbackSpeed() {
  if (userScore >= 5 && userScore <= 9) {
    gameMusic.playbackRate = 1.2;
  }
  if (userScore >= 10) {
    gameMusic.playbackRate = 1.4;
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

function getUserName() {
  userName = prompt("Enter name");
  userNameArray.push(userName);
  var stringifiedUserName = JSON.stringify(userNameArray);
  localStorage.setItem('Name', stringifiedUserName);
}

function insanityMode() {
  gameMusic.pause();
  insanityMusic.play();
  insanityMusic.loop = true;

  changeBackground.setAttribute('id', 'insanity');
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
  updateHighScore();
}

function updateHighScore() {
  var scoreList = document.getElementById('score-list');
  scoreList.innerHTML = ''; // resetting the list so it can be rendered again with additional scores

  var user = {
    name: userName,
    score: totalScore,
  }
  userObjectArr.push(user);
  userObjectArr.sort(function (a, b) {
    return b.score - a.score;
  });

  for (var i = 0; i < userObjectArr.length; i++) {
    var listItem = document.createElement('li');
    if (userObjectArr[i].score === userObjectArr[0].score) {
      userObjectArr.sort(function (a, b) {
        return b.score - a.score;
      });
      listItem.textContent = `#1 SUPER TYPER ${userObjectArr[i].name}: ${userObjectArr[i].score} points`
    } else {
      userObjectArr.sort(function (a, b) {
        return b.score - a.score;
      });
      listItem.textContent = `${userObjectArr[i].name}: ${userObjectArr[i].score} points`
    }
    scoreList.append(listItem);
    console.log(userObjectArr);
  }
}

function startGame() {
  getUserName();
  input.value = "";
  wordBoxReference.innerHTML = '';
  document.getElementById("input").focus();

  userScore = 0;
  clearInterval(timer);
  timer = setInterval(countdown, 1000);
  timeleft = 60;

  countdown();
  generateRandomWord();

  gameMusic.play();
  gameMusic.loop = true;
  gameMusic.playbackRate = 1;

  input.addEventListener('input', checkUserInput);
};

button.addEventListener("click", function () {
  changeBackground.setAttribute('id', 'bg-beach');
  button.setAttribute('class', 'start');
  startGame();
});

document.addEventListener('keyup', function () {
  typewriterSound.pause();
  typewriterSound.currentTime = 0;
  typewriterSound.play();
}
);
