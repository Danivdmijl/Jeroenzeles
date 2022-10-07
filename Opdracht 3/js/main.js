//  Js voor input change

const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merryweather = document.getElementById("js--merryweather");
const input = document.getElementById("js--input");

input.onchange = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merryweather.innerText = event.target.value;
}



// JS voor favorites

const hearts = document.getElementsByClassName("heart");
for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo";
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}

// Dark mode

const toggle = document.getElementById("toggle");
const header = document.getElementById("js--darkHeader");
const article = document.getElementById("js--darkArticle");
const text1 = document.getElementById("js--dancing");
const text2 = document.getElementById("js--lato");
const text3 = document.getElementById("js--merryweather");


toggle.onchange = function() {
    if (toggle.checked === true){
        article.setAttribute("class", "style2");
        header.setAttribute("class", "style1");
        text1.setAttribute("class", "style3");
        text2.setAttribute("class", "style4");
        text3.setAttribute("class", "style5");
        return;
    }
    article.setAttribute("class", "showcase");
    header.setAttribute("class", "header");
    article.setAttribute("class", "showcase");
    text1.setAttribute("class", "showcase__output--cursive" + " showcase__output");
    text2.setAttribute("class", "showcase__output--sansSerif" + " showcase__output");
    text3.setAttribute("class", "showcase__output" + " showcase__output--serif");
};  