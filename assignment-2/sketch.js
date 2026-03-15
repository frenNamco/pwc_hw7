// Take the name of the user and make it upper case to make it dramatic
let name = prompt("Tell me your name! :-||", "HUMAN");
name = name.toUpperCase();

// Welcome the user
alert("Welcome " + name + ", I am your COMPUTER! (￣□￣;)");

// Get the age of the user and calculate and output the year they were born
let age = Number(prompt("How old are you? (-_q)"));
let currentYear = 2026;
let birthYear = currentYear - age;

alert("So you must've been born IN " + birthYear + "!!!! °O°");

// Make a comment about the user's age depending on the value of the age
if(age > 18) {
  alert("A little old, don't you think... (._.)");
} else {
  alert("Aren't you kinda young... (._.)");
}

// Ask the user for the temperature in fahrenheit and then calculate and output temperature
// in Celsius. Once again, make a comment about the temperature
let tempF = Number(prompt("Now tell me the temperature, in fahrenheit (`･ω･´)"));
let tempC = (tempF - 32) * (5 / 9);

alert("That's going to be " + tempC + " in celcius!!! Isn't that cool (`･ω･´)");
if (tempC > 32) {
  alert("Wait, isn't it kinda hot out... (._.)");
} else if (tempC < 20) {
  alert("Wait, that's too cold... (._.)");
} else {
  alert("Must feel nice outside.., ヽ(´ー｀)ﾉ");
}

// Tells the user what's happening next
alert("Now why don't we play with numbers ヽ(^。^)ノ");

// Ask the user for two integers
let int1 = Number(prompt("Enter your first integer"));
let int2 = Number(prompt("Enter your second integer"));

// Announce the numbers
alert("Your numbers are " + int1 + " and " + int2);
alert("Watch me calculate, " + name + "! ᕕ( ᐛ )ᕗ ");

// Calculate addition , subtraction, multiplication, division, modulus, maximum and minimum with 
// the two numbers
let add = int1 + int2;
let sub = int1 - int2;
let mult = int1 * int2;
let div = int1 / int2;
let mod = int1 % int2;
let max = Math.max(int1, int2);
let min = Math.min(int1, int2);

// Output all the results
alert("ADDITION: " + int1 + " + " + int2 + " = " + add);
alert("SUBTRACTION: " + int1 + " - " + int2 + " = " + sub);
alert("MULTIPLICATION: " + int1 + " * " + int2 + " = " + mult);
alert("DIVISION: " + int1 + " / " + int2 + " = " + div);
alert("MODULUS: " + int1 + " % " + int2 + " = " + mod);
alert("THE BIGGER NUNMBER IS: " + max);
alert("THE SMALLER NUMBER IS: " + min);

// Check if either number is odd or even by checking the remainder
// Even numbers have a remainder of 0 when divided by 2
// Odd numbers have a remainder of 1 when divided by 2
if (int1 % 2 != 0) {
  alert(int1 + " is an ODD number" );
} else {
  alert(int1 + " is an EVEN number");
}

if (int2 % 2 != 0) {
  alert(int2 + " is an ODD number" );
} else {
  alert(int2 + " is an EVEN number");
}

// Make a comment to the user
alert("Pretty cool, isn't it, " + name + " (´･ω･`)");

// Ask the user for a decimal number to do more calculations
let dec = Number(prompt("Now give me a number with decimal part"));
alert("MORE CALCULATIONS NOW WITH THE NUMBER " + dec + "!!!! Σ(ﾟДﾟ)");

// Calculate the negative, sine, cosine, number raised to the 10, square root, number rounded,
// floor, ceiling, and absolute value
let neg = -dec;
let sin = Math.sin(dec);
let cos = Math.cos(dec);
let e10 = Math.pow(dec, 10);
let sqrt = Math.sqrt(dec);
let round = Math.round(dec);
let floor = Math.floor(dec);
let ceil = Math.ceil (dec);
let abs = Math.abs(dec);


// Output all numbers up to round
alert("The NEGATIVE of " + dec + " is " + neg);
alert("The SINE of " + dec + " radians is " + sin);
alert("The COSINE of " + dec + " radians is " + cos);
alert(dec + " RAISED to the 10 is " + e10);
alert("The SQUARE ROOT of " + dec + " is " + sqrt);
alert(dec + " ROUNDED is " + round);

// Ask the user for a number of decimals to round to and round to that decimal
let roundAmount = Number(prompt("How many decimals should I round " + dec + " to?（´-`）.｡oO( ... )"));
let roundToDecimal = Number.parseFloat(dec).toFixed(roundAmount);

// Output the rest of the calculated numbers
alert(dec + " ROUNDED to " + roundAmount + " decimals is " + roundToDecimal);
alert("The FLOOR of " + dec + " is" + floor);
alert("The CEILING of " + dec + " is " + ceil);
alert("AND FINALLY, the ABSOLUTE VALUE of " + dec + " is " + abs);
alert("I'm tired after all that calculating... (._.)");

// Announce the final section
let answer = prompt("Okay, one last thing, are you ready??? d(*⌒▽⌒*)b", "Yes");

// End if the answer is anything other than yes
if (answer != "Yes") {
  alert("oh okay, goodbye " +  name.toLowerCase() + " I guess (´；ω；`)");
} else {
  // Announce how the reaction time test works
  alert("GOOD!!! Let's see how good your reaction time is!");
  alert("In 3 seconds a PROMPT will appear"); 
  alert("Don't change the input, and a soon as you see it HIT ENTER or CLICK OKAY");
  alert("Okay, LET'S START!!!! Remember, 3 SECONDS!!");
  
  // Start a timer
  let startTime = Date.now();
  
  // Prompt the user after 3 seconds (3000 ms)
  setTimeout(() => {
    // Prompt to test reaction time
    let reaction = prompt("NOW", "NOW");
    let elapsedTime;
    
    // Check that an input was made
    if (reaction == "NOW") {
      // Calculate the elapsed time after the input was made
      elapsedTime = Date.now() - startTime; 
    } else {
      // Make a comment if the input was changed and also calculate elapsed time
      alert("Why'd you changed the input???? (´；ω；`)");
      elapsedTime = Date.now() - startTime;
    }
    
    // Calculate reaction time by removing the 3 second wait
    // Also announce the reaction time and the average reaction time
    let reactionTime = elapsedTime - 3000;
    alert("WOW, your reaction time is " + reactionTime + " milliseconds （　ﾟДﾟ）");
    alert("The AVERAGE reaction time is 250 ms ");
    
    // Make a comment depending on the reaction time speed
    if (reactionTime > 280) {
      alert("Wow, that was kinda slow... Is everything okay... （・Ａ・） ");
    } else if(reactionTime > 240 && reactionTime <= 280){
      alert("You are SUPER average（・∀・）");
    } else {
      alert("You are FAST!! GOOD JOB!!! Σ(゜д゜;)");
    }
    
    alert("I had fun!!!! (＾ｖ＾)");
    alert("GOODBYE " + name + "!!!! (^.^)/~~~")
    
  }, 3000);
  
  
}

function setup() {
  // Create a canvas as big as the container window
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  textSize(height / 16);
  text("Assignment[2]", width / 2, height / 2);
}

// This function is called any time the window is resized
function windowResized() {
  // Change the canvas size to fit the window
  resizeCanvas(windowWidth, windowHeight);
}
