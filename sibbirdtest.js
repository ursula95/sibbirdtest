let startButton;
let practiceButton;

function run () {
   homePage();
}

function homePage () {

    const main = document.getElementById('main');
    startButton = document.createElement('div');
    practiceButton = document.createElement('div');
    startButton.classList.add('startButton');
    practiceButton.classList.add('startButton');
    startButton.innerText = 'Начать викторину';
    practiceButton.innerText = 'Тренировка';

    main.append(startButton);
    main.append(practiceButton);
}

run();