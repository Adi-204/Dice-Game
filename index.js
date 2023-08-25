let randonNumber1 = Math.floor(Math.random()*6)+1;

let randomDiceImage = "./images/dice"+randonNumber1+".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage);


let randonNumber2 = Math.floor(Math.random()*6)+1;

let randomDiceImage2 = "./images/dice"+randonNumber2+".png";

document.querySelector(".img2").setAttribute("src",randomDiceImage2);

if(randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randonNumber2>randonNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

