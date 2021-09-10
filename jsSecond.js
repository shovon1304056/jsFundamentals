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





