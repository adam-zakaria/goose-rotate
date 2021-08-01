var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'duck crop.png';
  //base_image.src = 'duck.png';
  //base_image.src = 'red rectangle cropped.png';
  //context.translate(100,100);
  context.save();
  rotate = 0;
  base_image.onload = function(){
    //context.fillStyle = '#0095DD';
    for(i=0; i<=4; i++){
      for(j=0; j<=4; j++){
        startX = 200*i + 200;
        startY = 200*j + 200;
        width = 100 * base_image.height / base_image.width;
        height = 100;
        rotate += 25;
        context.translate(startX + .5*width, startY + .5*height); //x + .5*width, y + .5*height
        context.rotate((Math.PI / 180) * rotate); // rotate
        context.translate(-1 * (startX + .5*width), -1 * (startY + .5*height)); //x + .5*width, y + .5*height
        //context.translate(-100, -75); //x + .5*width, y + .5*height
        //context.fillStyle = '#4D4E53';
        //context.fillRect(startX, startY, width, height);
        context.drawImage(base_image, startX, startY, 100, width);
        context.restore();
        context.save();
        console.log(`startX = ${startX}`);
        console.log(`startY = ${startY}`);
      }
    }
  }
}