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

//Recommended
//let customer = {
//   name: "John Doe",
//  age: 30,
//   isMarried: false
//};
//console.log(customer.name);
//console.log(customer.age);


//class Customer {
//   name;
//  age;
//   isStudent;
//   constructor(name, age, isStudent) {
//       this.name = name;
//       this.age = age;
//       this.isStudent = isStudent;
//    }

//}
//et customer1 = new Customer("John Doe", 20, true);
//console.log(customer1);

//let customer2 = new Customer("Jane Smith", 25, false);
//console.log(customer2);



//inside  array define objects
//let student = [
// {
//     name: "kamal",
//     age: 25,
//     isStudent: false,
//     marks : [
//        {
//            subject: "Maths",
//             mark: 80
//         },
//         {
//            subject: "Science",
//             mark: 90
//        }
//     ]
// },
// {
//     name: "nimal",
//     age: 30,
//     isStudent: true
// },
//  {
//     name: "sunil",
//     age: 35,
//     isStudent: false         
//}
//]


//console.log(student);
//console.log(student[1].age);
//console.log(student[0].marks);



//+|-|*|/|%



//let a = 10;
//a++;

//console.log(a);

//let b = 3;

//let sum = a + b;
//console.log(sum);


 // -------- Comparison operators -----------------
// == | === | != | !== | > | < | >= | <=

let x = 10;
let y = "10";

console.log(x === y);


// -------- Logical operators -----------------
// && | || | !  

if (false || false){
    console.log("working");

} else {
    console.log("not working");
}   

if(x>y){
    console.log("x is greater than y");
}else {
    console.log("x is not greater than y");
}

mark = 75;
if(mark >= 90){
    console.log("A+");
}else if(mark >= 75){
    console.log("B");

}else if(mark >= 65){
    console.log("C");
}else if(mark >= 50){
    console.log("D");
}else {
    console.log("F");
}



 ----- Switch case statement ---------

// let day = 1;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");

// }

// // --------- for loops ------------------
// for(let i=0; i<5; i++){
//     console.log(i);
// }

// --------- while loops ------------------
let i = 0;
while(i<5){
    console.log(i);
    i++;
}
console.log("--------------------------------------------------");

let k = 1;
while(k<5){
    console.log(k);
    k++;
}

console.log("--------------------------------------------------");


//do while loop

let j = 0;
do{
    console.log(j);
    j++;
} while(j<5);

console.log("------------------------------------------------------");


let p = 10;
do{
    console.log(p);
    p++;
} while(p<5);

