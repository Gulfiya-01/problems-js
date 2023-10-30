
function arrayOfMultiples(num, length) {
 let arr = [];
 let x = 1;
  for (let i = 1; i<=length; i++ ) {
    arr.push(num*x);
    x++;
  }
  return arr;
  // Your code
}

export default arrayOfMultiples;
