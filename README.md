<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Number Guessing Game - README</title>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>A simple JavaScript game where the user tries to guess a randomly generated number between 0 and 100.</p>

    <h2>How It Works</h2>
    <ul>
        <li>The program generates a random number between 0 and 100.</li>
        <li>The user is prompted to guess the number.</li>
        <li>After each guess, the program gives feedback:
            <ul>
                <li><strong>Too Low</strong> if the guess is less than the number.</li>
                <li><strong>Too High</strong> if the guess is greater than the number.</li>
            </ul>
        </li>
        <li>The user keeps guessing until the correct number is found.</li>
        <li>The total number of attempts is displayed once the user guesses correctly.</li>
    </ul>

    <h2>Files</h2>
    <ul>
        <li><code>random_num.js</code>: Contains the JavaScript logic for the game.</li>
        <li><code>index.html</code>: Simple HTML file to load and run the JavaScript code in the browser.</li>
    </ul>

    <h2>How to Run</h2>
    <ol>
        <li>Open <code>index.html</code> in a web browser.</li>
        <li>Follow the prompt to enter your guesses.</li>
        <li>Check the browser console for feedback and final result.</li>
    </ol>

    <h3>Tip:</h3>
    <p>Open your browser's console (usually by pressing <code>F12</code> or <code>Ctrl+Shift+I</code>) to see the "Too Low", "Too High", and success messages.</p>
</body>
</html>
