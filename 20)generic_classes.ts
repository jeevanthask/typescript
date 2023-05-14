class KeyValuePair<T, U> {
  constructor(public key: T, public value: U) {}
}

let pair = new KeyValuePair<string, string>("1", "a");
