// *** String method

// slice()


// এই খানে ১ থেকে শুরু করে ৭ এ এসে একটা কোপ দিবে ( ১ সাধারন গনিতের ১, array পজিশনের ১ না)
// তারপর  ১৩ তে এসে আরেকটা কোপ
// দুই কোপের মাঝখানের অংশ টা রিটার্ন করবে
let str = "Apple, Banana, Kiwi";
str.slice(7, 13)     // Returns Banana


// same as before but counting will start from end
let str = "Apple, Banana, Kiwi";
str.slice(-12, -6)    // Returns Banana

//


//substring()
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

let str = "Apple, Banana, Kiwi";
substring(7, 13)    // Returns Banana


// substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
str.substr(7, 6)    // Returns Banana

let str = "Apple, Banana, Kiwi";
str.substr(7)    // Returns Banana,Kiwi

let str = "Apple, Banana, Kiwi";
str.substr(-4)    // Returns Kiwi


// replace()
// The replace() method replaces a specified value with another value in a string:

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // Return  "Please visit W3Schools"

// By default, the replace() method replaces only the first match:

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");  // Return  "Please visit W3Schools and Microsoft!"


//****  Strings are immutable: Strings cannot be changed, only replaced.




// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x = 100 / "Apple";  // x will be NaN (Not a Number)

let x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number

// NaN is a number: typeof NaN returns number:

typeof NaN;            // returns "number"



// Number() can be used to convert JavaScript variables to numbers:

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN


// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

parseInt("-10");        // returns -10
parseInt("-10.33");     // returns -10
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


/// Array


// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.


// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":

// array is a special kind of object
const fruits = ["Banana", "Orange", "Apple"];
typeof fruits;    // returns object


Array.isArray(fruits);   // returns true
