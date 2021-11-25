var string1 = "st1"//global 
string2 = "st2" //same var

string1 = "hello";
console.log(string1);

{
    let string1 = "my name";
    console.log(string1);
}
console.log(string1);

{
    const string1 = "Tee";
    //  string1 = "In";
}
//trandition fn
function add(a, b){
    let c= a+b;
    return c;
}

const res = add(5,3);
console.log(res);

//arrow function
const addFn = (a, b) => a + b ;
res = addFn (8, 5);  
console.log(res);

//array
const cars = ["toyota","mazda","honda"];
const fruit = [];
fruit[0]= "apple";
fruit[3]= "mango";
const people = new Arrow("win","jame","jhon");
console.log(people);
console.log(fruit);

let popcar = cars.pop();
console.log(popcar);
console.log(cars);

cars.push("kubota");
cars.shift();//remove "toyota"
cars.unshift("forza")
console.log(cars);

const carsSlice = cars.slice(1,3);
console.log(carsSlice);

carsSlice.splice(1,0,"honda");
console.log(carsSlice);

console.log(carsSlice.toString());
console.log(carsSlice.concat(people));
console.log([...cars,...people])//spread operator
