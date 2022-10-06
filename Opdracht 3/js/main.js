const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merryweather = document.getElementById("js--merryweather");
const input = document.getElementById("js--input");

input.onchange = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merryweather.innerText = event.target.value;
}