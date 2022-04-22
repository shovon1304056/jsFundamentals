
// for each implementation
// for each uses a callback function
// it also takes 2 arguments in the callback function, the index and the value or the array
// for each does not return anything

//*****
//var months = ['January', 'February', 'March', 'April'];
let loop =  () => {
    const months = ['January', 'February', 'March', 'April'];

        months.forEach(function(month,) {
        console.log(month);


        //console.log(month, index , array);
        });
};

 //loop();

 //** */

//** */
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

mapping();


// so it has returned a new array with the same length as the original array
// it does not change the original array
// it returns a new array

//** */


