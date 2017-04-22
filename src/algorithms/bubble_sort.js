'use strict';

module.exports = function sort(arr) {
  let n = arr.length;
  while(n != 0) {
    let lastSwap = 0;
    for(let i = 0; i < n; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        lastSwap = i;
      }
    }
    n = lastSwap;
  }
};