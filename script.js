window.addEventListener("load", function() {
    const LOADER = document.querySelector(".loader");
    LOADER.className += ' hidden';
});

let fx0 = document.getElementById("fx0");
let fx1 = document.getElementById("fx1");
let x = document.getElementById("x");
let x0 = document.getElementById("x0");
let x1 = document.getElementById("x1");




document.getElementById("calcular").addEventListener("calcu", function() {
    let res = (fx0 + ((fx1-fx0)/(x1-x0)))*(x-x0);
    console.log(res);
});