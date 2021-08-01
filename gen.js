var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'goose.png';
  context.save();
  rotate = 0;
  base_image.onload = function(){
    for(i=0; i<=4; i++){
      for(j=0; j<=4; j++){
        startX = 200*j+20;
        startY = 200*i+20;
        width = 100 * base_image.height / base_image.width;
        console.log(`width: ${width}`);
        height = 100;
        rotate += 30;
        context.translate(startX + .5*width, startY + .5*height); //x + .5*width, y + .5*height
        context.rotate((Math.PI / 180) * rotate); // rotate
        context.translate(-1 * (startX + .5*width), -1 * (startY + .5*height)); //x + .5*width, y + .5*height
        context.drawImage(base_image, startX, startY, 100, width);
        context.restore();
        context.save();
        console.log(`startX = ${startX}`);
        console.log(`startY = ${startY}`);
      }
    }
  }
}