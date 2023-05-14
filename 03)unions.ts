function kgToLbs(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(2);
kgToLbs("10kg");
