// Today class topics is (i) Function (ii) Recursions and last is Closures..

// Function.. is used in js to cantrol the hold of coding ,, where we want to call this function and not,..


function abc (studentsName) {
    console.log("hi " + studentsName);
}


abc ("Shahid");
abc ("Ali");
abc ("Umair");


function abc (num1, num2) {
    let sum =+ num1 + num2
    console.log(sum);
}
abc (6,6);
abc (3,9);
abc (7,9);

function employee (fileNo) {
    console.log("Working on file no " + fileNo)
}


employee(7);

employee(15);

employee(25);



function multiply(x,x1) {
    let mul = x * x1
    console.log("Answer is " + mul);
}



multiply(5,25);

multiply(5,56);

multiply(34,90);




function mathOperator(number1, number2) {
    if(number1 > number2){
        console.log("Number1 is greatest number");
    }
    else{
        console.log("Number2 is greatest number")
    }
}


mathOperator(6,9);

mathOperator(9,3);


function worker(place) {
    return "working place " + place;
}

let workerData = worker("Faisalabad");
console.log(workerData);
let workerData2 = worker("Lahore");
console.log(workerData2);


let sumPlace = workerData  +  workerData2;
console.log(sumPlace);

/// Recursion... kisi b kam ko bar bar krwany k liay istamal huta hy..
// jab hum function k ander usi functions ko call krwa rhy huty hain tu ,, yh usi function k argument ko bht bar likh da 
// yh tb tk likhta jay ga jab tk humri web ka page hang ni hu jata,, 
// tu is problem sy bachny k liay hum us per koi condition lga daty hain e,g (if)

function writeData(data, times) {
    document.write(data);
    if( times > 0){
        writeData(data, times - 1);
    }
   
}

writeData("Hello", 5);



// factorial


function factorial(numb) {
    if(numb >= 1){
      return   numb * factorial(numb - 1); 
    }
    return 1;
}


console.log(factorial(5));



function fac(y) {
    if(y >=1){
        return y * fac( y - 1)
    }
    return 1 ;
}

console.log(fac(7));


//Write a function that takes a number as input and returns its square

function sq(z) {
    return (z);
}

let takeSqaure =+ console.log(sq(7));

let result = takeSqaure ** 2;

console.log(result);

//// Scopes in js is global scope (whole file) and local scope ( inside function)
//// Closures
let aabb = 7; //// global scope

    console.log(aabb); //// console.log(aabb) is a globle variable that is way this is working in everywhere..


function print() {
    let def = 14; //// local scope 
     
     return function () {
        console.log(def);
     }
}

// ////  console.log(def); this console.log is not working outside the function because (def) is a variable of function,
// //// that is way they can not working outside the function
let innerOutput = print();
innerOutput();


//// closures
function clu(efg) {
    return function (ghi) {
        console.log(efg + ghi);
    }
    
}

let innerValue = clu(15);
innerValue(55);
let innerValue1 = clu(20);
innerValue1(80);