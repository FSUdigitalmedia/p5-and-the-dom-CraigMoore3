var myParagraph, myButton, myPic, mySlider;
x = 40;
y = 40;
a = 0;
b = 150;

function setup() {
  myPic = createImg('shutdownSeq1.png', 'shutdownSequence()');
  myPic.style("max-width", "500px");
  myPic.position(a,b);

  myButton = createButton("Click Me!");
  myButton.position(25,25);

  mySlider = createSlider(0, 255, 10);

  myParagraph = createP("html");
}

function draw() {
   myParagraph.position(mouseX, mouseY);
   sliderOutput();
   console.log(mySlider.value());
   myButton.mouseClicked(userClicked);
}

function userClicked() {
   console.log("The user clicked the mouse.");
   congratsP = createP("That was fantastic! Do it again");
   congratsP.position(x, y);
   count();
   shiftPic();
   myPic.position(a,b);
}

function count() {
   (x += 20);
   (y += 30)
   console.log(x,y);
}

function shiftPic() {
   (a += 20);
   console.log(a);
}

function sliderOutput() {
   let sliderData = ((mySlider.value()) + "px");
   myParagraph.style("font-size", sliderData);
}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
      The percent sign is the remainder operator. For (x % y), it will output the remainder after x/y.
      https://www.w3schools.com/jsrEF/jsref_operators.asp

1. Where, in the p5 reference, do we find all this DOM stuff?
      https://p5js.org/reference/#group-DOM for p5 specific DOM reference.
      https://p5js.org/reference/#/p5.Element Reference for p5 Elements.
      https://www.w3schools.com/jsrEF/default.asp for general JavaScript and HTML DOM.

2. Why is the text so large when it's just a "paragraph"?
      In style.css, the font size for 'p' is set to xx-large.

3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?
      These are standard CSS style properties, as outlined in any CSS reference.
      https://www.w3schools.com/cssref/index.php
      The p5.js style() function lets you control these CSS properties within the p5 document, with the benefit of being able to change the style in response to user interaction.
      https://p5js.org/reference/#/p5.Element/style
      
Some Things to Try:
0. Make the text follow the mouse pointer
      Done
1. Make a button
      Done
2. Make the button affect the style or position of some text
      Done
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
      I did both. A screenshot from Busy Bee was loaded into the HTML, and an image from shutdownSequence() was loaded into the p5 doc.
      My primary observations are that formatting the page will likely be easier and cleaner in HTML, but that p5 grants a useful layer of control that might be more useful in specific cases.
      I'll be commenting out the HTML photo for the sake of the following steps.
4. Can you make the position of the image change when the
   button is pressed?
      Done
5. Make a slider and have it change the text size
      Done
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/