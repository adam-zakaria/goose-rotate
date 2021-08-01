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
