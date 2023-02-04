var randomNumber1 = Math.floor(Math.random() * 6) +1; //1-6 randomnumbers

var randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource ="images/" + randomImage; //images/dice1.png -images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var img2= document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImage2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML ="Draw!";
}


