class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = new ArrayUtils().wrapInArray(1);
