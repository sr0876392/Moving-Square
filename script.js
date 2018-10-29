"use strict";
var square = {
    xSpeed: 0,
    ySpeed: 5,
    createSquare: function (){ 
       var newDiv = square.newDiv = document.createElement("div");
       document.body.appendChild(newDiv);
       var $ = newDiv.style;
       $.height = '128px';
       $.width = '128px';
       $.backgroundColor = "red";
       $.transition = "background 0.3s";
       $.position = "absolute";
       $.borderRadius = "15px";
    }
}
var movingSquare = {
     bodyWidth: document.body.offsetWidth,
     bodyHeight: document.body.offsetHeight,
     xPos: 0,
     yPos: 0,
     frameCounter: 0,
     colorR: 0,
     colorG: 0,
     colorB: 0,

     moveSquare: function(){
        movingSquare.yPos += square.ySpeed;
        square.newDiv.style.top = `${movingSquare.yPos}px`;
        movingSquare.xPos += square.xSpeed;
        square.newDiv.style.left = `${movingSquare.xPos}px`; 
        if (movingSquare.frameCounter++ %20 == 0){
            var randR = Math.ceil(Math.random() * 100);
            var randG = Math.ceil(Math.random() * 100);
            var randB = Math.ceil(Math.random() * 100);
            movingSquare.colorR = (movingSquare.colorR + randR) % 255;
            movingSquare.colorG = (movingSquare.colorG+ randG) % 255;
            movingSquare.colorB = (movingSquare.colorB + randB) % 255;
            var hexRGB = (movingSquare.colorR << 16)|(movingSquare.colorG << 8)|(movingSquare.colorB);
            square.newDiv.style.backgroundColor = `#${hexRGB.toString(16)}`; 
        };
        // moving properties block
        if (movingSquare.yPos + 128 >= movingSquare.bodyHeight){
           movingSquare.yPos -= 5;
           square.xSpeed = 5;
           square.ySpeed = 0;
        }
        if (movingSquare.xPos + 128 >= movingSquare.bodyWidth){
            movingSquare.xPos -= 5;
            square.xSpeed = 0;
            square.ySpeed = -5;
        }
        else if (movingSquare.yPos <= 0){
            movingSquare.yPos += 5;
            square.xSpeed = -5;
            square.ySpeed = 0;
        }
        else if (movingSquare.xPos <= 0){
            movingSquare.xPos += 5;
            square.xSpeed = 0;
            square.ySpeed = 5;
        }
        requestAnimationFrame(movingSquare.moveSquare);
    } 
}
square.createSquare();
console.log(movingSquare.moveSquare());