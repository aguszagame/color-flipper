

// colores hex #00 00 00
// 0-9 A-F

let btn = document.getElementById("btn");
let color = document.getElementById("color");
var items = [0, 1, 2, 3, 4,5,6,7,8,9, 'A','B','C','D','E','F'];

btn.addEventListener("click", function(){

    let hexColor = '#';
    for(let i = 0; i < 6; i++){
       
        hexColor +=  items[random_item()];
        
        }
        console.log(hexColor);
        document.body.style.backgroundColor = hexColor;
})
function random_item()
{
  
return Math.floor(Math.random()*items.length);
     
}





 