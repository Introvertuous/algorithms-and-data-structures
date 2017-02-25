/**
 * @param {number} n
 * @return {string[]}
 */
module.exports = function fizzBuzz(n) {
  let output = [];
  for (let i = 1; i <= n; i++) {
    let result = '';
    if (i % 3 === 0)
      result += 'Fizz';
    if (i % 5 === 0)
      result += 'Buzz';

    if (result.length === 0)
      output.push(String(i));
    else
      output.push(result);
  }
  return output;
};