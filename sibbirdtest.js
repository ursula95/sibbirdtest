let startButtonn;
let practiceButton;

function run () {
   homePage();
}

function homePage () {

    const main = document.getElementById('main');
    startButtonn = document.createElement('div');
    practiceButton = document.createElement('div');
    startButton.classList.add('startButton');
    practiceButton.classList.add('startButton');
    startButtonn.innerText = 'Начать викторину';
    practiceButton.innerText = 'Тренировка';

    main.append(startButtonn);
    main.append(practiceButton);
}

