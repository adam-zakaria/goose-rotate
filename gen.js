//var canvas = document.getElementById('canvas'),
//context = canvas.getContext('2d');


  $( function() {
    $( "#slider" ).slider();
  } );
//make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'goose.png';
  context.save();
  rotate = 0;
  numElements = 7;
  numRows = numElements;
  numColumns = numElements;
  //numRows = 4;
  //numColumns = 4;
  gapPlusWidth = 800/numElements;
  width = gapPlusWidth * .5;
  //width = 100 * base_image.height / base_image.width;
  //height = 100;
  base_image.onload = function(){
    for(i=0; i<=numRows; i++){
      for(j=0; j<=numColumns; j++){
        //height = width * base_image.width / base_image.height; 
        height = width * base_image.height / base_image.width; 
        startX = gapPlusWidth*j+20;
        startY = gapPlusWidth*i+20;
        //rotate += 30;
        rotate += Math.random()*360;
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
    console.log(`height: ${height}`);
    console.log(`width: ${width}`);
    console.log(`width/height: ${width/height}`);
    console.log(`gapPlusWidth: ${gapPlusWidth}`);
  }
}