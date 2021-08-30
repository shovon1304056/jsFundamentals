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


