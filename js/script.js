
let cssRule = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('general');

// below code for first background code, to show in screen
body.style.background = `linear-gradient(to right, #FF0000, #FFFF00)`;
cssRule.textContent = `${body.style.background};`;


function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssRule.textContent = `${body.style.background};`;
    console.log(body.style.background);
}



color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);



