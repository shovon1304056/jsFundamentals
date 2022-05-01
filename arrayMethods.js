
// for each implementation
// for each uses a callback function
// it also takes 2 arguments in the callback function, the index and the value or the array
// for each does not return anything

//**  array for each */
//var months = ['January', 'February', 'March', 'April'];
let loop =  () => {
    const months = ['January', 'February', 'March', 'April'];

        months.forEach(function(month) {
        console.log(month);


        //console.log(month, index , array);
        });
};

 //loop();

 //** */

//** array map */
// array map
// map returns a new array
// map uses a callback function
// Note that the map method returns a new array that is of the exact same length as the original array.
// map does not change the original array but returns a new array.


// code 

let mapping = () => {

    const users = [
        {
          first_name: 'Mike',
          last_name: 'Sheridan'
        },
        {
          first_name: 'Tim',
          last_name: 'Lee'
        },
        {
          first_name: 'John',
          last_name: 'Carte'
        }
      ];
      
      const usersList = users.map(function (user) {
        return `${user.first_name} ${user.last_name}`;
      });
      
      console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]

      const lastNames = users.map((user) => {
        return user.last_name;
      })

      console.log(lastNames); // ["Sheridan", "Lee", "Carte"]
};

//mapping();


// so it has returned a new array with the same length as the original array
// it does not change the original array
// it returns a new array

//** ****************/


//**  array find and find index*/

// use to find an element in an array
// find returns the first element that matches the callback function
// it element is found, then breaks the loop

// code 

let findMethod = () => {
    const employees = [
        { name: "David Carlson", age: 30 },
        { name: "John Ka", age: 34 },
        { name: "Mike Sheridan", age: 25 },
        { name: "John Carte", age: 50 }
       ];
       
       let user;
       
       // find returns the first element that matches the callback function
        user = employees.find((elements) => {
           let data =  elements.name.indexOf('Mike') > -1;
           console.log(data);
           return data;
        });
       
       console.log(user); // { name: "John Ka", age: 34 }

         // find index returns the index of the first element that matches the callback function
         let index = employees.findIndex((elements) => {
              let data =  elements.name.indexOf('Mike') > -1;
              console.log(data);
              return data;
          });

          console.log(index); // 2
};

//findMethod();

//** ****************/

//**  array filter */

// filter method returns a new array
// filter helps to find all the elements from the array that match the specified test condition
// filter does not change the original array
// filter does not stop when it finds a particular match
// but keeps checking for other elements in the array that match the condition

// difference between array find and filter
// find returns the first element that matches the callback function
// filter returns all the elements that match the callback function

let filterMethod = () => {
    const employees = [
        { name: "David Carlson", age: 30 },
        { name: "John Ka", age: 34 },
        { name: "Mike Sheridan", age: 25 },
        { name: "John Carte", age: 50 }
       ];
       
       let user;
       
       // find returns the first element that matches the callback function
        user = employees.filter((elements,index) => {
           let data =  elements.name.indexOf('John') > -1;
           return data;
        });
       
       console.log(user); // { 2 results }
};

filterMethod();

//** ****************/

