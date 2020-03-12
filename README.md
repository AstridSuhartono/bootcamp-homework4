# bootcamp-homework4

## Web API: Code Quiz

### Brief Description

A simple web application to let web developers do a coding assessment. The application will test the web developer in a form of multiple choice questions. There is a time limit of 45 seconds and every wrong answer will deduct the time by 5 seconds. This app is build by using HTML, CSS, and powered JavaScript to create a dynamic update on the HTML page.

### Link to the Project

* https://github.com/AstridSuhartono/bootcamp-homework4
* https://astridsuhartono.github.io/bootcamp-homework4/

### Video Recording

Click the following link to see the vide demo: 

### Build Instructions

This application is build with html files, css file, and javascript files. Included inside the html files is the bootstrap reference for styling.

* html file consist of:
    * index.html: the first page that will load for users. User can choose to take the quiz or view the high scores stored
    * quiz.html: display the questions for the assessment. This page also shows time left, current score, and question number the user currently at
    * end.html: Shows the result of the quiz taken by users and give users an option to save their current high score, retake the quiz, or go back to homepage
    * highscores.html: This page shows a list of users, who choose to save their score, in an order of highest score first
* css file consist of:
    * style.css: file that set styles to elements in the html pages
* javascript file consist of:
    * quiz.js: file that is responsible for the application logic creating a dynamic page of the quiz.html. It also contain the logic to count remaining time to take the quiz, count current user score where it will be set into local storage, and the question number the user currently at compare to whole questions
    * end.js: the main purpose is to get the current user name and user highscore and push it into the list inside highscore.html
    * highscores.js: return and display the high scores that are saved in the local storage. Also has a function to reset the local storage.

### Code Style
The application is build by loosely following the common standard styling conventions. There are some inconsistency for creating functions. Some of the functions are build by using an arrow function expression instead of regular function expression. Also by using bootstrap for the building style, there are elements that has both class and id as its identifier.

### Authors

Author: Astrid Suhartono, 12th of March 2020.
