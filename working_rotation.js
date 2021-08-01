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
 //void ctx.fillRect(x, y, width, height);
 
  base_image.onload = function(){
      context.fillStyle = '#0095DD';
//context.drawImage(base_image, 0, 0, 100, 50);
    context.fillRect(50, 50, 100, 50);
    //context.translate(300 + 50, 300 + 25); //x + .5*width, y + .5*height
    context.translate(100, 75); //x + .5*width, y + .5*height
    context.rotate((Math.PI / 180) * 25); // rotate
    //context.translate(-350, -325); //x + .5*width, y + .5*height
    context.translate(-100, -75); //x + .5*width, y + .5*height
    //draw_image(base_image, 0, 0, 100, 50);
  context.fillStyle = '#4D4E53';
    context.fillRect(50, 50, 100, 50);
  }
}