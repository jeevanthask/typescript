function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (message: string) {
    console.log("before");
    original.call(this, message);
    console.log("after");
  };
}

class Person {
  //   @Log
  //   say(message: string) {
  //     console.log("person says ", message);
  //   }
}

let person = new Person();
person.say("Hello");
