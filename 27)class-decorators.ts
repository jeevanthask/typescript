function Component(constructor: Function) {
  console.log("component decorator called!");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

// @Component
// class ProfileComponent {}
