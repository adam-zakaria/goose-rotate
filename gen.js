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
  //base_image.src = 'duck.png';
  base_image.src = 'red rectangle cropped.png';
  context.translate(100,100);
  context.save();
  j = 0;
  
  base_image.onload = function(){
      rotation = 0;
      //context.drawImage(base_image, 0, 0, 100, 100); //offsetx,y height x,y
      
    for(var i = 0; i <= 0; i++){
      for(var j = 0; j <= 4; j++){
        translateX = j*200;
        translateY = i*200;
        /* draw, translate, rotate, translate back */
        //context.translate(translateX,translateY);
        context.translate(translateX + 100*.5,translateY+50*.5);
        context.rotate(rotation * Math.PI / 180);
        context.translate(-1*(translateX + 100*.5),-1*(translateY+50*.5));
        context.drawImage(base_image, 0, 0, 100, 50); //offsetx,y height x,y
        //context.fillText(j, 0, 0, 2000);
        context.fillText(j, 0, 0);
        context.restore();
        context.save();
        //rotation += 20;
        rotation += 90;
        console.log(`rotation: ${rotation}`);
        console.log(`translateX: ${translateX}`);
        console.log(`translateY: ${translateY}`);
        console.log(`j: ${j}`);
        console.log('---------------');
      }
    }
  }
}