// Create 16x16 grid
const container = document.getElementById('container');

for (let i = 1; i <= 16; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('container-item');
    container.appendChild(newDiv);
}

// change color when hovering over div

const box = document.getElementsByClassName('container-item');
console.log(box);

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'yellow';
    })
}


/*
box.addEventListener('mouseenter', function(e) {
    console.log(e)
})
*/