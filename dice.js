var number1=Math.floor(Math.random() * 6) + 1;
var player1dice="dice"+number1+".jpg"; //dice1.jpg - dice2.jpg
var diceimage = "./"+player1dice; //./dice1.jpg
console.log(diceimage);
var image1 = document.querySelectorAll("img")[0]; //select image at index 0
image1.setAttribute("src",diceimage);

var number2=Math.floor(Math.random() * 6) + 1;
var player2dice="dice"+number2+".jpg"; //dice1.jpg - dice2.jpg
var diceimage1 = "./"+player2dice; //./dice1.jpg
console.log(diceimage1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",diceimage1);
var h=document.querySelector("h1");
if(number1>number2)
{
    h.innerHTML="Player 1 Wins";
}
else if(number1<number2)
{
    h.innerHTML="Player 2 Wins";
}
else{
    h.innerHTML="Draw";
}