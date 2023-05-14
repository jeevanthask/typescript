let speed: number | null = null;
let ride = {
  //Falsy (undefined,null,'',false,0)
  //Nullish coalescing operator
  speed: speed ?? null, //if speed is not null or undefined use that value otherwise use default value 30
};
