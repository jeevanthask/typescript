//sometimes we know more than an object than typescript.
// let phone  = document.getElementById('phone')
// phone.value // phone is possibly null error.but we know more about this phone than typescript.

// So,

let phone = document.getElementById("phone") as HTMLInputElement;
phone.value; //now ok.no error.

//we can also use this way too....
let phone1 = <HTMLInputElement>document.getElementById("phone");
phone1.value;
