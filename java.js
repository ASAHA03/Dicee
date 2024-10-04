// alert("working");
var num = Math.random();
num = Math.floor(num * 6) + 1;
// console.log(num);
if (num == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (num == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (num == 3 ){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (num == 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (num == 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var num1 = Math.random();
num1 = Math.floor(num1 * 6) + 1;
if (num1 == 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (num1 == 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (num1 == 3 ){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (num1 == 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (num1 == 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (num>num1){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (num1>num){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}