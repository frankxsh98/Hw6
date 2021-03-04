import Snap from 'snapsvg-cjs';
// import * as snap from 'snapsvg';

var snapbox = document.querySelector(".snapbox");
var s = Snap("#logosvg");
var eye = s.select("#Xeye");

eye.attr({
    fill: "#F9FCF9",
    stroke: "#000",
    strokeWidth: 0,
});

var elementTransform = "s1.3 r30 170 180";
var elementTransform2 = "s1 r0 170 180";


function blink1(){
    eye.animate({transform: elementTransform,
    strokeWidth: 3}, 600, mina.elastic,blink2); 
}

function blink2(){
    eye.animate({transform: elementTransform2,
    strokeWidth: 0}, 1200, mina.elastic,blink1); 
}

blink1()
