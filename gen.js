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
  rotate = 0;
  base_image.onload = function(){
    //context.fillStyle = '#0095DD';
    for(i=0; i<=4; i++){
      for(j=0; j<=4; j++){
        startX = 200*i + 200;
        startY = 200*j + 200;
        rectWidth = 100;
        rectHeight = 50;
        rotate += 25;
        context.translate(startX + .5*rectWidth, startY + .5*rectHeight); //x + .5*width, y + .5*height
        context.rotate((Math.PI / 180) * rotate); // rotate
        context.translate(-1 * (startX + .5*rectWidth), -1 * (startY + .5*rectHeight)); //x + .5*width, y + .5*height
        //context.translate(-100, -75); //x + .5*width, y + .5*height
        context.fillStyle = '#4D4E53';
        context.fillRect(startX, startY, rectWidth, rectHeight);
        context.restore();
        context.save();
      }
    }
  }
}