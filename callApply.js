
// call()

// call() is a method that allows us to invoke a function with a given this value and arguments provided individually.
// call() is used for method invocation. It is also used for function invocation (call a function)


let callMethod = () => {
const person = {
    fullName: function(city,country) {
      return this.firstName + " " + this.lastName + " Lives in " + city + "  "+ country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  let result = person.fullName.call(person1,"Dhaka","Bangladesh");
  console.log(result);

  // if it is person.fullName().It will be undefined
  // so we need to define which object to use
  // this "this" will indicate which object to use
  // for this reason we use call() then pass the object name as the  argument

}

//callMethod();

//apply()

// both call() and apply() are used to invoke a function 
// but call takes arguments singly and apply takes arguments as an array

let applyMethod = () => {
    const person = {
        fullName: function(city,country) {
            return this.firstName + " " + this.lastName + " Lives in " + city + "  "+ country;
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      // This will return "John Doe":
      let result = person.fullName.apply(person1,["Dhaka","Bangladesh"]);
      console.log(result);
}

 applyMethod();
