const tempQuestions = [
    {
        'id': 1,
        'question': 'Paris est la capital de la France.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/4gOM_dhV-t1brmmmff-vVkrqn-MVr0VtKF5jRvaZme8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRiL0xh/X1RvdXJfRWlmZmVs/X3Z1ZV9kZV9sYV9U/b3VyX1NhaW50LUph/Y3F1ZXMlMkNfUGFy/aXNfYW8lQzMlQkJ0/XzIwMTRfJTI4MiUy/OS5qcGcvNTEycHgt/TGFfVG91cl9FaWZm/ZWxfdnVlX2RlX2xh/X1RvdXJfU2FpbnQt/SmFjcXVlcyUyQ19Q/YXJpc19hbyVDMyVC/QnRfMjAxNF8lMjgy/JTI5LmpwZw',
        'answerText': 'La capital de la France est Paris.',
    },
    {
        'id': 2,
        'question': 'Marseille est la capital de la France.',
        'answer' : false,
        'imagePath' : 'https://imgs.search.brave.com/tY21wsjop2tpfcwwCKC7TfLoKMRd0N621BzAqjetGTM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQwL05v/dHJlX0RhbWVfZGVf/bGFfR2FyZGUuanBn/LzUxMnB4LU5vdHJl/X0RhbWVfZGVfbGFf/R2FyZGUuanBn',
        'answerText': 'La capital de la France n\'est pas Marseille c\'est Paris.',
    }
];

const nextButton = document.getElementById('next-btn');
const imageField = document.getElementById('image');
const questionField = document.getElementById('question');
const scoreField = document.getElementById('score');
const recordField = document.getElementById('record');
const explicationCard = document.getElementById('explication');
const quizCard = document.getElementById('quiz');

// Server side
let imagePath = '';
let question = '';
let answer = '';

// User side
let responseUser = '';

// Stastistics
let score = 0;
let record = 0;
let questionNumber = 0;
let correctAnswer = '';

function startGame() {
    // Reset the game

    getQuestionFromServer();
}

function getQuestionFromServer() {
    // Get the question, image, answer from the server
    let object = tempQuestions[Math.floor(Math.random() * tempQuestions.length)];

    question = object.question;
    answer = object.answer;
    imagePath = object.imagePath;

    console.log(question, answer, imagePath);

    // Set the question, image, answer to the user
    questionField.textContent = question;
    imageField.src = imagePath;

    console.log('hide');
    // Hide explication card
    explicationCard.classList.add('d-none');
}

function getResponseFromUser(responseUser) {
    // Check if the response is correct
    if (responseUser === answer) {
        // Animation erreur ou réussite

        score++;
    } else {
        // Animation erreur ou réussite

        score = 0;
    }

    // Update statistic
    updateStatistic(score);

    // Display the response to the user
    displayResponse();
}

function updateStatistic(score) {
    scoreField.textContent = score;

    if (score > record) {
        record = score;
        recordField.textContent = score;
    }
}

function displayResponse() {
    // // Hide quiz card
    // quizCard.classList.add('d-none');
    //
    // // Display the response to the user
    // // Seter mes réponses
    // explicationCard.classList.remove('d-none');
}

startGame();