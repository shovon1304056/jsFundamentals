/**** Date */

let check = () => {
    const a = {
        name: 'John',
        sleep: function() { // here arrow function will not work
            console.log(`${a.name} is sleeping`); // this keyword can also be used
        }
    }
     a.sleep();  
};

check();