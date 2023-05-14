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

  hope() {
    console.log("animal is hoping!");
  }

  fullName(): string {
    return "jboss";
  }
}

class Rabbit extends Animal {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  override hope() {
    console.log("rabbit is hoping!!", super.fullName());
  }
}

const rabit1 = new Rabbit("hahahari hawa", 12, "brown");
rabit1.run();
rabit1.hope();
console.log(rabit1.name);

//extra
//open closed principal in polymorphism
//classes should be open for extension and closed for modification.
