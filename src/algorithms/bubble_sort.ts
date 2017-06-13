("use strict");

export default function sort(arr: number[]) {
  let n: number = arr.length;
  while (n !== 0) {
    let lastSwap: number = 0;
    for (let i: number = 0; i < n; i = i + 1) {
      if (arr[i] > arr[i + 1]) {
        const temp: number = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        lastSwap = i;
      }
    }
    n = lastSwap;
  }
}
