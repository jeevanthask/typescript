class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log("Hey I am running");
  }
}

class Rabbit extends Animal {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  hope() {
    console.log("I am hoping!!");
  }
}

const rabit1 = new Rabbit("hahahari hawa", 12, "brown");
rabit1.run();
rabit1.hope();
console.log(rabit1.name);
