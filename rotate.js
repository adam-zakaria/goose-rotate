var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'red rectangle.png';
  context.save();
  j = 0;
  
  base_image.onload = function(){
      rotation = 0;
        //context.translate(translateX,translateY);
        //context.translate(,);
        //context.rotate(rotation * Math.PI / 180);
        context.drawImage(base_image, 0, 0, 100, 100); //offsetx,y height x,y
        context.restore();
        context.save();
        //rotation += 20;
        console.log(`rotation: ${rotation}`);
        console.log(`translateX: ${translateX}`);
        console.log(`translateY: ${translateY}`);
        console.log('---------------');
      }
}

/*I'm going to try to align the ducks in a grid then rotate them. */