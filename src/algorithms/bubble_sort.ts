'use strict'

export default function sort (arr: Array<number>) {
  let n: number = arr.length
  while (n !== 0) {
    let lastSwap: number = 0
    for (let i: number = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp: number = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        lastSwap = i
      }
    }
    n = lastSwap
  }
}
