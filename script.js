function checkPassword(){

let password =
document.getElementById("passwordInput").value;

if(password === "Anglit"){
document.getElementById("loginScreen").style.display = "none";

document.getElementById("mainContent").style.display = "block";
}
else{
alert("Wrong Password ❤️");
}

}
function showLetter(num){

const box = document.getElementById("letterBox");

switch(num){

case 1:
box.innerHTML = "❤️ Dear Angell, whenever you're sad, remember that you are deeply loved and never alone.";
break;

case 2:
box.innerHTML = "🥺 Open when you miss me: I'm probably missing you too and thinking about you.";
break;

case 3:
box.innerHTML = "🌸 Open when you need motivation: You are stronger than you think and capable of amazing things.";
break;

case 4:
box.innerHTML = "😴 Open when you can't sleep: Close your eyes and imagine all our favorite memories together.";
break;

case 5:
box.innerHTML = "😊 Open when you need a smile: Think about the funniest thing we've ever laughed about.";
break;

case 6:
box.innerHTML = "💖 Open when you're feeling insecure: You are beautiful, valuable and special exactly as you are.";
break;

case 7:
box.innerHTML = "🎉 Open when you're celebrating: I'm proud of you and cheering for you.";
break;

case 8:
box.innerHTML = "☔ Open when you've had a bad day: Tomorrow is a fresh start and I believe in you.";
break;

case 9:
box.innerHTML = "🤗 Open when you need a hug: Consider this a giant virtual hug from me.";
break;

case 10:
box.innerHTML = "💌 Open when you want to know how much I love you: More than words can explain.";
break;

}

}
function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*20 + 15) + "px";

document.querySelector(".hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);