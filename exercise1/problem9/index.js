function isDisarium(int) {
  let str = int.toString();
  let sum = 0;

  for (let i=0; i<str.length;i++){
    let digit = parseInt(str[i]);
    sum += Math.pow(digit, i+1);

  }
  return sum===int;// Your code
}
export default isDisarium;
