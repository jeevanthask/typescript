//Built in types ---------------------------------
//javascript has built in types such as,number,string,boolean,null,undefined,object.
//typescript extends this list and introduce new types:- any,unknown,never,enum,tuple

//Arrays
let numbers: number[] = [1, 2, 3, 4];
let arr: number[] = [];

//Tuples
let user: [number, string] = [1, "Mosh"];

//enums
enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Large;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear?: number): number {
  return 0;
}

calculateTax(2); //this taxyear is optional

//we can provide a default value
function calculateTax2(income: number, taxYear = 2022): number {
  return 0;
}

//objects
let employee: {
  id: number;
  name: string;
  age?: number;
} = {
  id: 0,
  name: "nandika",
};

employee.name = "jeevantha";

//sometimes u want to make some properties readonly to prevent accidently changing them later.

let employee2: {
  readonly name: string;
} = {
  name: "nandika",
};

// employee2.name = "jeevanthask"; //Cannot assign to 'name' because it is a read-only property

//adding methods to an object
let employee3: {
  name: string;
  age: number;
  retire: (date: Date) => void;
} = {
  name: "nandika",
  age: 23,
  retire: (date: Date) => {
    console.log(date);
  },
};
