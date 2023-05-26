
const playerNameInput = document.getElementById('playerName');
const startBtn = document.getElementById('startBtn');
const gameSection = document.getElementById('gameSection');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');
const scoreboard = document.getElementById('scoreboard');
const scoresList = document.getElementById('scoresList');
const overallScoresList = document.getElementById('overallScoresList');
const restartBtn = document.getElementById('restartBtn');

let player = '';
let currentQuestion = 0;
let score = 0;
let randomIndex = 0;
let bestPlayer = '';
let bestScore = 0;
let maxQuestionCount = 10;

function startGame() {
    player = playerNameInput.value.trim();
    if (player !== '') {
        document.getElementById('playerSection').style.display = 'none';
        document.getElementById('gameSection').style.display = 'block';
        document.getElementById('scoreboard').style.display = 'block';
        document.getElementById('overallScoresList').innerHTML = '';
        displayNewQuestion();
    }
}

answerInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Function to display a new question
function displayNewQuestion() {
    const randomQuestion = getRandomQuestion();
    // Display the question on the game board
    questionElement.textContent = randomQuestion.question;
    // Reset the input field or perform any necessary cleanup
    answerInput.value = '';
    answerInput.focus();
}

function getRandomQuestion() {
    randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}


function checkAnswer() {
    const userAnswer = answerInput.value.trim();

    if (userAnswer.toLowerCase() === words[randomIndex].answer.toLowerCase()) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = 'Incorrect!';
    }

    answerInput.value = '';

    currentQuestion++;
    if (currentQuestion < maxQuestionCount) {
        displayNewQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    gameSection.style.display = 'none';
    restartBtn.style.display = 'block';

    if (score > bestScore) {
        bestPlayer = player;
        bestScore = score;
    }

    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${player}: ${score}/${maxQuestionCount}`;
    scoresList.appendChild(scoreItem);

    const overallScoreItem = document.createElement('li');
    overallScoreItem.textContent = `${player}: ${score}/${maxQuestionCount}`;
    overallScoresList.appendChild(overallScoreItem);

    scoreboard.style.display = 'block';
}

function restartGame() {
    player = '';
    currentQuestion = 0;
    score = 0;
    questionElement.textContent = 'Guess the correct word:';
    scoresList.innerHTML = '';
    resultElement.textContent = '';
    gameSection.style.display = 'block';
    scoreboard.style.display = 'none';
    restartBtn.style.display = 'none';
    playerNameInput.value = '';
    playerNameInput.focus();
    displayNewQuestion();
}

startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkAnswer);
restartBtn.addEventListener('click', restartGame);


// Word Quiz Game
const words = [
    // Philology Questions (25)
    { question: 'Adibning "Qutadg‘u Bilig" asari kim tomonidan yozilgan?', answer: 'Yusuf Has Xojib' },
    { question: 'Adabiyotning bosh tuyg‘usi qandayligi?', answer: 'G‘amgin' },
    { question: 'Buyuk O‘zbek she’riyoti qaysi davrda shakllangan?', answer: 'XV-XVI asrlarda' },
    { question: 'Sharq adabiyoti qaysi asrlarda shakllangan?', answer: 'XI-XV asrlarda' },
    { question: 'Xalq adabiyoti qaysi asrlarda shakllangan?', answer: 'XVI-XVII asrlarda' },
    { question: 'Sadoqatning ing tushuniluvchi turlari qaysilar?', answer: 'Etik va estetik' },
    { question: 'O‘zbek she’rining unumli noyobligini aniqlang', answer: 'Pahlavonlik' },
    { question: 'O‘zbekcha poeziyada shi‘rning o‘zligini aniqlang', answer: 'Nasl' },
    { question: '“G‘azal” she’riy turini aniqlang', answer: 'Kichik gazal' },
    { question: '“Ruboiy” she’riy turini aniqlang', answer: 'O‘rtacha ruboiy' },
    { question: '“Mukhammas” she’riy turini aniqlang', answer: 'Shom turkumida bo‘lgan birinchi ruboiy' },
    { question: '“Qasida” she’riy turini aniqlang', answer: 'Mavzusiga e’tibor qaratilmagan qasida' },
    { question: '“Musaddas” she’riy turini aniqlang', answer: 'Xamsa turidan birinchi' },
    { question: '“Kasida” she’riy turini aniqlang', answer: 'Pohshida kasida' },
    { question: '“Masnaviy” she’riy turini aniqlang', answer: 'Afsunli masnaviy' },
    { question: '“Qo‘shida” she’riy turini aniqlang', answer: 'So‘roqqa javob beruvchi qo‘shida' },
    { question: '“Lirik” she’riy turini aniqlang', answer: 'Yurakdan yurakga' },
    { question: '“Doston” she’riy turini aniqlang', answer: 'Tarixiy doston' },
    { question: '“Tanqis” she’riy turini aniqlang', answer: 'Yangi stihiya' },
    { question: '“Ruba’i” she’riy turini aniqlang', answer: 'O‘zbekistan tarixida go‘llab-quvvat bo‘lgan ruboiy' },
    { question: '“Muhammas” she’riy turini aniqlang', answer: 'Shom turkumida bo‘lgan qo‘shida' },
    { question: '“Oda” she’riy turini aniqlang', answer: 'Maqom o‘dasi' },
    { question: '“Tarji‘band” she’riy turini aniqlang', answer: 'Nasrning tuzilishi' },
    { question: '“Tarana” she’riy turini aniqlang', answer: 'Ritmli tarana' },
    { question: '“Iltijo” she’riy turini aniqlang', answer: 'Tarixiy she’r' },
    
    // Other Topics (25)
    { question: 'O‘zbekiston poytaxti qayer?', answer: 'Toshkent' },
    { question: 'O‘zbekiston o‘lkasi qayerda joylashgan?', answer: 'O‘rta Osiyo' },
    { question: 'O‘zbekiston bayrog‘i nechta rangdan iborat?', answer: 'Ikki rangli' },
    { question: 'O‘zbekistonning eng katta dengiz ko‘li qaysi?', answer: 'Orol dengizi' },
    { question: 'O‘zbekistonda eng ko‘p o‘rnatilgan tadbir nima?', answer: 'Navro‘z bayrami' },
    { question: 'O‘zbekiston poytaxtining qaysi qismida Oliy Majlis joylashgan?', answer: 'Mirob' },
    { question: 'O‘zbekiston televideniyasining birinchi kanali qanday ataladi?', answer: 'O‘zbekiston' },
    { question: 'O‘zbekiston milliy poytaxti qayerda joylashgan?', answer: 'Toshkent' },
    { question: 'O‘zbekistonda qaysi til ko‘p tarqalgan?', answer: 'O‘zbek til' },
    { question: 'O‘zbekistonning eng katta viloyati qaysi?', answer: 'Surxondaryo' },
    { question: 'O‘zbekiston hovli san\'ati nimani ifodalaydi?', answer: 'Suzane' },
    { question: 'O‘zbekiston milliy qo‘y bezaklaridan biri nima?', answer: 'Adras' },
    { question: 'O‘zbekiston milliy taomlaridan biri nima?', answer: 'Plov' },
    { question: 'O‘zbekistonning eng katta tog‘i qaysi?', answer: 'Tian-Shan' },
    { question: 'O‘zbekiston xalq og‘zaki musiqasi nimani ifodalaydi?', answer: 'Maqom' },
    { question: 'O‘zbekistonda ko‘p tarqalgan diniy tadbirlaridan biri nima?', answer: 'Ramazon bayrami' },
    { question: 'O‘zbekistonda eng ko‘p tarqalgan muzey qayerda joylashgan?', answer: 'O‘zbekiston tarixi muzeyi' },
    { question: 'O‘zbekistonda eng ko‘p tarqalgan xazorasi qaysi?', answer: 'Sharqiy xazira' },
    { question: 'O‘zbekistonning eng katta hammani qaysi oraliqda o‘z ichiga olgan?', answer: 'Qoraqalpog‘iston' },
    { question: 'O‘zbekistonda qaysi ombor joylashgan?', answer: 'Xovos' },
    { question: 'O‘zbekistonning qaysi yo‘li dunyoda mashhur?', answer: 'Shaxrisabz yo‘li' },
    { question: 'O‘zbekiston xalq tashvishlari nimani ifodalaydi?', answer: 'Tovus' },
    { question: 'O‘zbekistonning eng katta shahri qaysi?', answer: 'Samarkand' },
    { question: 'O‘zbekistonda eng ko‘p tarqalgan tabiat boyliklari nima?', answer: 'O‘rta Osiyo boyliklari' },
    { question: 'O‘zbekistonning eng ko‘p tarqalgan tarixiy obidalari qaysilar?', answer: 'Xiva, Buxoro, Samarkand' },
  ];
  