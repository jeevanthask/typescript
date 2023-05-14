abstract class Animal1 {
  abstract run(): void;
}

class Rabbit1 extends Animal1 {
  override run() {}
}

// ani1 = new Animal() can't create instance of abstract class
