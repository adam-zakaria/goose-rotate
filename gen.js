var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

  //$("#slider").slider('option',{min: 0, max: 500});

//make_base();
display_image()
var width=100;
function display_image()
{

  $( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      min: 100,
      max: 500,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
        //console.log(ui.value)
        width = ui.value;
        height = width * base_image.width / base_image.height; 
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(base_image, startX, startY, width, height); //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

      }
    });
  } );
    setTimeout(function(){
      width=$('#slider').slider("option", "value");
    },200);

  base_image = new Image();
  base_image.src = 'goose.png';
  startX=50;
  startY=50;
  height=100;
  //width=100;
  /*
  while(){
    //while slider does not exist, wait 1000ms to try slider option

  }
  */
  //height = width * base_image.width / base_image.height; 
  base_image.onload = function(){
      context.drawImage(base_image, startX, startY, height, width);
  }
}




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