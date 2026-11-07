1.1
// console.log("Hello javascript!");


// // class Example {
// //     public static void main(String[] args) {
// //         System.out.println("Hello javascript!");
// //     }
// // }

//------------------------------------------------------------------------------------------

1.2
// let name = "John Doe";
// console.log(typeof name);

//------------------------------------------------------------------------------------------

1.3
// name = 42;
// console.log(typeof name);   

//------------------------------------------------------------------------------------------

1.4

//---------------------------------Most used variable declaration----------------------------
// {
//   let city = "New York"
//      console.log(city);
  
// }



// {
//   let bike = "Yamaha"
//     console.log(bike);

// }

//-----------------------------------lowercase variable declaration-----------------------------

// {
// var bike = "Yamaha"

// }
//  console.log(bike);


2.1

//--------------- variable declaration  -----------------

// let name = "sarah";
// let age = 30;
// let isStudent = false;
// let customer = ["sarah", "john", "mike",1,true,100,0,4];
// let person = {};

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(customer);
// console.log(person);

//---------------------------------------Object Recommended--------------------------------------

// let customer = {
//     name: "John Doe",
//     age: 30,
//     isStudent: true,
// }
// console.log(customer.name);
// console.log(customer.age);
// console.log(customer.isStudent);


//------------------------------------------------------------------------------------------------

2.2
// class Customer {
//   name;
//   age;
//   isStudent;
//   constructor(name, age, isStudent) {
//        this.name = name;
//        this.age = age;
//        this.isStudent = isStudent;
//     }

// }

// let customer1 = new Customer("John Doe", 20, true);
// console.log(customer1);

// let customer2 = new Customer("Jane Smith", 25, false);
// console.log(customer2);


3.

//---------------------------------inside  array define objects---------------------------------

// let student = [
//  {
//      name: "kamal",
//      age: 25,
//      isStudent: false,
//      marks : [
//         {
//             subject: "Maths",
//              mark: 80
//          },
//          {
//             subject: "Science",
//              mark: 90
//          }
//      ]
//  },
//  {
//     name: "nimal",
//     age: 30,
//     isStudent: true
//  },
//  {
//     name: "sunil",
//     age: 35,
//     isStudent: false         
// }
// ]


// console.log(student);
// console.log(student[1].age);
// console.log(student[0].marks[1].mark);

4.
//-------------------------------------Arithmetic operators-------------------------------------

// + | - | * | / | %

// let a = 10;
// a++;

// console.log(a);

// let b = 3;

// let sum = a + b;
// console.log(sum);

5.
//--------------------------------------Comparison operators---------------------------------------

// == | === | != | !== | > | < | >= | <=

// let x = 10;
// let y = "10";

// console.log(x === y);

6.
//-----------------------------------------Logical operators----------------------------------------

// // && | || | !  

// if (false || false){
//     console.log("working");

// } else {
//     console.log("not working");
// }   

// if(x>y){
//     console.log("x is greater than y");
// }else {
//     console.log("x is not greater than y");
// }

// mark = 75;
// if(mark >= 90){
//     console.log("A+");
// }else if(mark >= 75){
//     console.log("B");

// }else if(mark >= 65){
//     console.log("C");
// }else if(mark >= 50){
//     console.log("D");
// }else {
//     console.log("F");
// }



//  ----- Switch case statement ---------

// // let day = 1;

// // switch(day){
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log("Wednesday");
// //         break;
// //     case 4:
// //         console.log("Thursday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("Saturday");
// //         break;
// //     default:
// //         console.log("Invalid day");

// // }

// // // --------- for loops ------------------
// // for(let i=0; i<5; i++){
// //     console.log(i);
// // }

// // --------- while loops ------------------
// //let i = 0;
// //while(i<5){
// //    console.log(i);
// //    i++;
// //}
// //console.log("--------------------------------------------------");

// //let k = 1;
// //while(k<5){
// //    console.log(k);
// //    k++;
// //}

// //console.log("--------------------------------------------------");


// //do while loop

// //let j = 0;
// //do{
//   //  console.log(j);
//     j++;
// //} while(j<5);

// //console.log("------------------------------------------------------");


// //let p = 10;
// //do{
// //    console.log(p);
// //    p++;
// //} while(p<5);

// //-----------------functions----------------------

// // normal function - method 01
// function myFunction(){
//     console.log("hello world"); 
// }
// myFunction();

// // function with parameters - method 02
// function getSum(num1, num2){
//     return num1 + num2;
// }
// console.log(getSum(5,10));

// //function with variable - method 03
// let sum = function(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(5,5));

// //arrow function - method 04
// let pluSum = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(pluSum(12,12));


// let plusSum = (num1, num2) => num1 + num2;


// let sample = txtValue =>{
//     return txtValue;
// }

// console.log(sample("Hii saman"));

// let sample1 = txtValue => txtValue;

// console.log(sample1("Hii kamal"));

// -----------------DOM Manipulation - document object model----------------------
 
// console.log(document);
// console.log(document.title);
