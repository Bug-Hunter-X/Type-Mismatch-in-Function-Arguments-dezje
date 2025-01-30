function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, parseInt('2', 10)); // Correct: converts string to number

//Alternative solution with type guarding
function add(a:number, b:number | string): number {
  if(typeof b === 'string') {
    return a + parseInt(b,10);
  }
  return a + b;
}

let result2 = add(1, '2'); //Correct: Type Guard handles string input