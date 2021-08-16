/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

base_image = new Image();
base_image.src = 'goose.png';
//ctx.save();

startX = 100;
startY = 100;
width = 100;
height = width * base_image.height / base_image.width; 

//ctx.filter = 'blur(4px)';
//ctx.font = '48px serif';

base_image.onload = function(){
    //document.getElementById('canvas').width = 754;
    //document.getElementById('canvas').height = 740;
    //ctx.drawImage(base_image, startX, startY, width, height);
    //ctx.drawImage(base_image, 50, 50);
    ctx.drawImage(base_image, 0, 0);
    //ctx.fillText('Hello world', 50, 100);
}
*/


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.filter = 'blur(4px)';
const image = new Image(); // Using optional size for image
image.src = 'goose.png';

image.onload = function () {
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
}