function printNumberInInterval(n: number) {
  let count = 1;
  const intervalId = setInterval(() => {
    if (count <= n) {
      console.log(count);
      count++;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}


  export default printNumberInInterval;
  


