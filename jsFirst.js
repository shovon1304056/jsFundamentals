/// basic


{/* <p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button> */}



// ****VAR
var carName = "Volvo";
var carName;

var a = 5;

a = 9; // can re-assign

var a = 10 ; // can re-declare

//
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
x = "5" + 2 + 3; // Output  523

var x = 2 + 3 + "5"; // output 55


// ****Let

// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope -- Bracket er moddei kaj korbe

let x = "John Doe";

let x = 0; // Cant re-declare

// SyntaxError: 'x' has already been declared

//

{
    let x = 2;
  }
  // x can NOT be used here outside blocks

//

{
    var x = 2;
  }
  // x CAN be used here as it is VAR

  // Scope-------------

  var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here now x is 2


//-----

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here now x is 10

//**** Allow / Not Allowed between var and let */

var x = 2;    // Allowed
let x = 3;    // Not allowed

{
let x = 2;    // Allowed
let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
var x = 3     // Not allowed
}


/// *** Const

// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";


/// Function

let x = myFunction(4, 3);   // here 4,3 are arguments

function myFunction(a, b) { // here a,b are parameters
  return a * b;             // Function returns the product of a and b
}

/// Basic Object


//**** this is used not to call same object again and again *
//**** inside the fullName value : here person.firstName == this.firstName *
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


// Use of back slash escape

let text = "We are the so-called \"Vikings\" from the north.";
document.getElementById("demo").innerHTML = text; 

// String

let x = "John";
let y = new String("John");

// typeof x will return string
// typeof y will return object



let x = "John";             
let y = new String("John");

// (x == y) is true because x and y have equal val


let x = "John";             
let y = new String("John");

// (x === y) is false because x and y have different types (string and object)

/// Two objects cant be same in value and type

let x = new String("John");             
let y = new String("John");

// (x == y) is false because x and y are objects

let x = new String("John");             
let y = new String("John");

// (x === y) is false because x and y are objects


