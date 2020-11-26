let colors =["red", "white","grey", "pink", "blue", "green","crimson", "cyan","yellow","magenta"]

let btn = document.getElementById("btn");

let color = document.getElementById("color");

btn.addEventListener("click",function(){
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML =  colors[randomNumber] + "!";
})


function getRandomNumber(){
    return Math.floor(Math.random()*colors.length) ;
}