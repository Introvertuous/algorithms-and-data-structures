export default function sort(arr: number[]) {
  let n = arr.length;
  while (n !== 0) {
    let lastSwap = 0;
    for (let i = 0; i < n; i = i + 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        lastSwap = i;
      }
    }
    n = lastSwap;
  }
}
