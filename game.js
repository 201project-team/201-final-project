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

var randomWord;

var wordBoxReference = document.getElementById('word-box');
var input = document.querySelector('input');
var log = document.getElementById('user-text');

function generateRandomWord() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  wordBoxReference.textContent = randomWord;
};

function updateValue(event) {
  log.textContent = event.srcElement.value.toUpperCase();
  if (log.textContent === randomWord) {
    generateRandomWord();
    input.value = "";
  }
}
generateRandomWord();
input.addEventListener('input', updateValue);// This line likely needs to be at the bottom

//---------------------------------------------------------------------------------------------------------------------------------
                                          //AJ
//---------------------------------------------------------------------------------------------------------------------------------





















//---------------------------------------------------------------------------------------------------------------------------------
                                          //Yoshi
//---------------------------------------------------------------------------------------------------------------------------------



























//---------------------------------------------------------------------------------------------------------------------------------
                                          //Gabriel
//---------------------------------------------------------------------------------------------------------------------------------



























//---------------------------------------------------------------------------------------------------------------------------------
                                          //Brad
//---------------------------------------------------------------------------------------------------------------------------------