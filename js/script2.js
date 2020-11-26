
//color hex (rojo,verde,azul) los numeros van hasta 256

//se necesitan 3 random numbers de 0 a 256

// color(randomNumer1,randomNumber2,randomNumber3)

let btn = document.getElementById("btn");
let color = document.getElementById("color");



btn.addEventListener("click", function(){
    let a = getRandomNumber();
    let b= getRandomNumber();
    let c= getRandomNumber();
    
    document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';



    
            color.innerHTML =  'rgb(' + a + ',' + b + ',' + c + ')'+ "!";

})


function getRandomNumber(){
         return Math.floor(Math.random()*255) ;
 }
 
