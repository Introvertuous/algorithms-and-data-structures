export default function sort(arr: number[]) {
  let i: number;
  let j: number;

  for (i = 0; i < arr.length - 1; i++) {
    let mindex: number = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mindex]) {
        mindex = j;
      }
    }
    if (mindex !== i) {
      let temp = arr[mindex];
      arr[mindex] = arr[i];
      arr[i] = temp;
    }
  }
}
