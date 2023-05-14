function echo<T extends number | string>(value: T): T {
  return value;
}
// function echo<T extends {name:string}>(value: T): T {
//   return value;
// }

//for this constraints we can use classes or interfaces too
