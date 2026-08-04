// Elements

const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const closeBtn = document.getElementById("closeBtn");

const music = document.getElementById("music");

const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const finalLetter = document.getElementById("finalLetter");




// Open Surprise

surpriseBtn.addEventListener("click", () => {


    surprise.classList.remove("hidden");


    gallery.classList.remove("hidden");

    letter.classList.remove("hidden");

    finalLetter.classList.remove("hidden");



    music.play();



    createHearts();

    createConfetti();

    createBalloons();



    typeMessage();


});






// Close Surprise

closeBtn.addEventListener("click", () => {

    surprise.classList.add("hidden");

});








// Hearts

function createHearts(){


    const heartBox = document.getElementById("hearts");



    for(let i = 0; i < 40; i++){


        let heart = document.createElement("div");


        heart.className = "heart";


        heart.innerHTML = "❤️";



        heart.style.left =
        Math.random()*100 + "%";



        heart.style.fontSize =
        (15 + Math.random()*30) + "px";



        heart.style.animationDuration =
        (3 + Math.random()*5) + "s";



        heartBox.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },8000);


    }

}









// Confetti

function createConfetti(){


    for(let i=0;i<100;i++){


        let confetti=document.createElement("div");


        confetti.className="confetti";



        confetti.style.left =
        Math.random()*100+"%";



        confetti.style.background =
        `hsl(${Math.random()*360},100%,70%)`;



        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },4000);


    }

}









// Balloons

function createBalloons(){


    for(let i=0;i<15;i++){


        let balloon=document.createElement("div");


        balloon.className="balloon";


        balloon.innerHTML="🎈";



        balloon.style.left =
        Math.random()*100+"%";



        document.body.appendChild(balloon);



        setTimeout(()=>{

            balloon.remove();

        },10000);


    }

}









// Typing Message

const message = `

Happy Birthday Prabina ❤️


I wish you lots of happiness,
success and beautiful memories.


Keep smiling and follow your dreams.


Have an amazing birthday. 🎂💖

`;



let index = 0;



function typeMessage(){


    const text = document.getElementById("loveLetter");



    if(index < message.length){


        text.innerHTML += message.charAt(index);



        index++;



        setTimeout(typeMessage,50);


    }

}









// Glowing Stars

function createStars(){


    for(let i=0;i<80;i++){


        let star=document.createElement("div");


        star.className="star";



        star.style.left =
        Math.random()*100+"%";



        star.style.top =
        Math.random()*100+"%";



        star.style.animationDelay =
        Math.random()*3+"s";



        document.body.appendChild(star);


    }

}






// Start Stars

window.addEventListener("load",()=>{


    createStars();


});