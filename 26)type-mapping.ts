//sometimes we need to base a type on another type.this is called typemapping
interface Product {
  name: string;
  price: number;
}

//all the properties will be readonly while mapping for the properties in the above Product/interface
type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

//create a product object and check if it can change the values later
