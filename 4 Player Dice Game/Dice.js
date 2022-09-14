//random number 1 to 6
//Player - 01
var randomNum1 = Math.floor(Math.random() * 6)+ 1;
//Mapping random to images in folder
var randomImageSource1="Images/Dice " + randomNum1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

//Player - 02 
var randomNum2=Math.floor(Math.random() * 6)+ 1;
var randomImageSource2="Images/Dice " + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//Player - 03 
var randomNum3=Math.floor(Math.random() * 6)+ 1;
var randomImageSource3="Images/Dice " + randomNum3 + ".png";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src",randomImageSource3);

//Player - 04 
var randomNum4=Math.floor(Math.random() * 6)+ 1;
var randomImageSource4="Images/Dice " + randomNum4 + ".png";
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src",randomImageSource4);

//Main Logic for Dice
if(randomNum1 > randomNum2 & randomNum1 > randomNum3 & randomNum1 > randomNum4)
{
    document.querySelector("h1").innerHTML="Player 1 Wins !";    
}
else if(randomNum2 > randomNum1 & randomNum2 > randomNum3 & randomNum2 > randomNum4)
{
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
else if(randomNum3 > randomNum1 & randomNum3 > randomNum2 & randomNum3 > randomNum4)
{
    document.querySelector("h1").innerHTML="Player 3 Wins !";
}
else if(randomNum4 > randomNum1 & randomNum4 > randomNum2 & randomNum4 > randomNum3)
{
    document.querySelector("h1").innerHTML="Player 4 Wins !";
}
else
{
    document.querySelector("h1").innerHTML="DRAWs !";
}
