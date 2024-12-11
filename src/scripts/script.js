const canvas = document.getElementById("codeRain")
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "あ ぃ ぅ ぇ ぉ か き く け こ さ";
const latin = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const numbers = "0123456789";

const code = katakana + latin + numbers;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

// Setting colours for rain
const getRandomColor = () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    return randomColor;
}

let currentColor = "#0F0";

canvas.addEventListener('click', () => {
    currentColor = getRandomColor();
})

const rain = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = currentColor;
    context.font = fontSize + "px monospace";

    for(let i = 0; i < rainDrops.length; i++) {
        const text = code.charAt(Math.floor(Math.random() * code.length));
        context.fillText(text, i*fontSize, rainDrops[i] * fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++
    }
}

setInterval(rain, 60);