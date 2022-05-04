const add =  (a: number, b: number): number  => {
  // Limitations of arrow fn, this context of arrow fn are applicable here
  return a + b;
}

add(10, 20);