//console.log("Hello javascript!");

//let nam = "John Doe";
//console.log(typeof nam);

//let nam = 42;
//console.log(typeof nam);   


//{
   // let city = "New York"; 
   // console.log(city);

//}

//console.log(city);

//{
   // var bike = "Yamaha";

//}

//console.log(bike);


//--------------- variable declaration  -----------------


//let nam = "John Doe";
//let age = 30;
//let isMarried = false;
//let customer = ["sarah", "john", "mike"]; ;
//let person = {};

//console.log(typeof nam);
//console.log(customer);


class Customer {
           name;
            age;
            isStudent;
            constructor(name, age, isStudent) {
                this.name = name;
                this.age = age;
                this.isStudent = isStudent;
            }

        }
let customer1 = new Customer("John Doe", 20, true); 
console.log(customer1);

let customer2 = new Customer("Jane Smith", 25, false);
console.log(customer2);
