//Decorator factory
function Component(value: number) {
  return function (constructor: Function) {
    console.log("component decorator called!");
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

//this is uncommentable
// @Component(1)
// class ProfileComponent {}
