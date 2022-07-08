const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', changeBackgroudColor);

function randomRgbaColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random().toFixed(2);
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = "white";
        alert("You won Vietlott!");
    } else {
        h1.style.color = "black";
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function changeBackgroudColor() {
    const newRgba = randomRgbaColor();
    document.body.style.backgroundColor = newRgba;
    h1.innerHTML = newRgba;
}