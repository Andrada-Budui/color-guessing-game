let colorsNumber = 6;
let colors = generateColors(colorsNumber);
let colorSquares = document.querySelectorAll(".color");
let colorCode = document.querySelector("#colorCode");
let winningColor = pickWinningColor();
let topBanner = document.querySelector(".top");
let newBtn = document.querySelector("#new");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");

colorCode.innerText = winningColor.toUpperCase();

for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].style.background = colors[i];
    colorSquares[i].addEventListener("click", () => {
        let clickedColor = colorSquares[i].style.background;
        console.log(colorSquares[i].style.background);
        if (clickedColor === winningColor) {
            topBanner.style.background = winningColor;
            changeBackground(winningColor);
            newBtn.innerText = "PLAY AGAIN?";
        } else {
            colorSquares[i].style.background = "#232323";
        }
    });
}

newBtn.addEventListener("click", () => {
    newBtn.innerText = "NEW COLORS";
    reset();
    for (let i = 0; i < colorSquares.length; i++) {
        colorSquares[i].style.background = colors[i];
    }
});

easyBtn.addEventListener("click", () => {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colorsNumber = 3;
    reset();
    for (let i = 0; i < colorSquares.length; i++) {
        if (colors[i]) {
            colorSquares[i].style.background = colors[i];
        } else colorSquares[i].style.display = "none";
    }
});

hardBtn.addEventListener("click", () => {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colorsNumber = 6;
    reset();
    for (let i = 0; i < colorSquares.length; i++) {
        colorSquares[i].style.background = colors[i];
        colorSquares[i].style.display = "block";
    }
});

function generateColors(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push(returnRandomColor());
    }
    return array;
}

function returnRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function pickWinningColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeBackground(color) {
    for (let i = 0; i < colorSquares.length; i++) {
        colorSquares[i].style.background = color;
    }
}

function reset() {
    colors = generateColors(colorsNumber);
    winningColor = pickWinningColor();
    colorCode.innerText = winningColor.toUpperCase();
    topBanner.style.background = "#5083b6";
}
