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
const body = document.getElementById("js--body")

toggle.onclick = function() {
    console.log("Klik");
    body.setAttribute("class", "style1");
};  