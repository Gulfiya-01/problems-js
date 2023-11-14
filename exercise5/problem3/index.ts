 function printAsyncNumbers(n: number) {
  const printWithDelay = (num: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, num * 1000);
    });
  };

  const printNumbersSequentially = async () => {
    for (let i = 1; i <= n; i++) {
      await printWithDelay(i);
    }
  };

  printNumbersSequentially();
}

export default printAsyncNumbers;
