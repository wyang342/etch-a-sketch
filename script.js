function initialize(sideLength) {
    clearGrid();
    createGrid(sideLength);
    changeColorOnHover();
    initializeResetButton();
}

function createGrid(num) {
    const container = document.getElementById('container');

    let sideLength = 790 / num;
    console.log(sideLength);
    let templateStyle = "";

    for (let i = 1; i <= num; i++) {
        for (let i = 1; i <= num; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('container-item');
            newDiv.style.backgroundColor = 'white';
            container.appendChild(newDiv);
        }
        templateStyle += `${sideLength}px `
    }
    templateStyle = templateStyle.slice(0, templateStyle.length - 1);
    container.style.gridTemplateColumns = templateStyle;
    container.style.gridTemplateRows = templateStyle;
}

function clearGrid() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function changeColorOnHover() {
    const box = document.getElementsByClassName('container-item');

    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseenter', function (e) {
            e.target.style.backgroundColor = 'black';
        })
    }
}

function initializeResetButton() {
    const resetButton = document.getElementById('reset');
    resetButton.onclick = function () {
        let sideLength = prompt("Side length in px? (Enter number from 1-100)", "30");
        while (sideLength < 1 || sideLength > 100) {
            sideLength = prompt("Side length in px? (Enter number from 1-100)", "30");
        }
        initialize(sideLength);

        /*
        const box = document.getElementsByClassName('container-item');
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = 'white';
        }
        */
    }
}

initialize(30);