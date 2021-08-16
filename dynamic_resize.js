  $( function() {
    $( "#slider" ).slider();
  } );

//var canvas = document.getElementById('canvas'),
//context = canvas.getContext('2d');

//make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'goose.png';
  context.save();
  height = 24;
  width = gapPlusWidth * .5;

  base_image.onload = function(){
        context.drawImage(base_image, startX, startY, 100, width);
        context.restore();
        context.save();
        console.log(`startX = ${startX}`);
        console.log(`startY = ${startY}`);
      }
    console.log(`height: ${height}`);
    console.log(`width: ${width}`);
    console.log(`width/height: ${width/height}`);
    console.log(`gapPlusWidth: ${gapPlusWidth}`);
  }