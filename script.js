const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

// Server side
let imagePath = '';
let question = '';
let answer = '';

// User side
let responseUser = '';

// Stastistics
let record = 0;
let questionNumber = 0;
let correctAnswer = '';

function startGame() {
    // Reset the game

    getQuestionFromServer();
}

function getQuestionFromServer() {
    // Get the question, image, answer from the server
    // Set the question, image, answer to the user
}

function getResponseFromUser() {
    // Get the response from the user
    // Check if the response is correct
    // Update the statistics
    updateStatictics();
    // Display the response to the user
    displayResponse();
}

function displayResponse() {
    // Animation erreur ou réussite

    // Display the response to the user
}

function updateStatictics() {
    // Update the statistics
}