To run:
node index.js

rotate.js is a simple version of gen.js, to test things.

red_rectange / other images might be problematic when rotated because they're not fully cropped.


There's also this matter of rotating a shape around its own center.
I think rotating around its top left corner works great though...

T-shirt to print on:
Bella Canvas 3001

Debugging using mouse position:
Enter this in the console:
var x, y; document.onmousemove=(e)=>{x=e.pageX;y=e.pageY;}
Enter this in as a live expression:
"("+x+", "+y+")"

###
To-do
###
*Apply filters to the geese
    -glitch them?
    -https://github.com/aferriss/p5jsShaderExamples/
*Do the automatic spacing


blur is working in blur.js, but not gen.js. 
I was having trouble drawing goose png for a while, but now it's working after using this drawImage prototype. 
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
