function miniMaxSum(arr: number []): string {
    let sum = arr.reduce((a: number, b:number) => {
      return a + b;
    });
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);
    return min + " " + max;
  }

  console.log(miniMaxSum([1,2,3,4,5,6]))