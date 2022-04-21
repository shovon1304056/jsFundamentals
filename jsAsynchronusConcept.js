/**** Date */


// *** Callback function ***
// callback is a function that is passed as an argument to another function
// just write the function name and it will be called
// we can control the function will be called or not

function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2,callBackFunc) {
    let sum = num1 + num2;
   
   if (callBackFunc) callBackFunc(sum)
  }
  
  myCalculator(5, 5,myDisplayer);


// this code can be written in a shorter way

  function myCalculator(num1, num2,callBackFunc) {
    let sum = num1 + num2;
   
   callBackFunc(sum)
  }
  
  myCalculator(5, 5,function(result){
      console.log(result)
  });


// another example of call back function

const takeOrder = (customer,callBackProcessOrder) => {
  console.log(`take order for ${customer}`);
  callBackProcessOrder(customer);
};

const processOrder = (customer,callBackCustomerOrder) => {
  console.log(`process order for ${customer}`)

  setTimeout(()=>{
    console.log(`cooking completed`)
    console.log(` order processed for ${customer}`)
    callBackCustomerOrder(customer);
  },3000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`)
};

takeOrder('customer 1',(customer)=>{
  processOrder(customer,(customer)=>{
  completeOrder(customer);
  });
});


console.log('hello');

  // *** Asynchronous Behaviour ***

  // Asynchronous behaviour is when a function is called and it takes some time to complete
  // it is not a synchronous behaviour
 
