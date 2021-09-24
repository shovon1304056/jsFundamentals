let addTaskValue = document.getElementById('addTask').value;

console.log(addTaskValue);

let headerValue = document.getElementById('header');

headerValue.innerText = 'Hello';

headerValue.style.fontSize = '10px'; 

// eivbe css change kora jay font-size css evabe likleo js a sob camel case hbe in all types of css



//*** add element and set attribute

const divElement = document.createElement('div');

divElement.className = 'divClass'; // add class

divElement.setAttribute('id','red');
divElement.setAttribute('text','How are you?');


