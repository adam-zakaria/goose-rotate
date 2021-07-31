/*
function setup() {
  // here we use a callback to display the image after loading
  loadImage('duck.png', img => {
    //image(img, 100, 100);
    image(img, 0, 0);
    img.resize(0,1000);

  });
}
*/

var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  //base_image.src = 'duck.png';
  base_image.src = 'duck.png';
  context.save();
  j = 0;
  
  base_image.onload = function(){
      rotation = 0;
    for(var i = 0; i <= 4; i++){
      for(var j = 0; j <= 4; j++){
        translateX = j*200;
        translateY = i*200;
        context.translate(translateX,translateY);
        context.rotate(rotation * Math.PI / 180);
        context.drawImage(base_image, 0, 0, 100, 100); //offsetx,y height x,y
        context.restore();
        context.save();
        rotation += 20;
        console.log(`rotation: ${rotation}`);
        console.log(`translateX: ${translateX}`);
        console.log(`translateY: ${translateY}`);
        console.log('---------------');
      }
    }
  }
}