interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

//there are three types of scenarios for generics

//pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
store.compress();

//restricting the generic parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

//Terminating the generic type parameter
class ProductStore extends Store<Product> {}
