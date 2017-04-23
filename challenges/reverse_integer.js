/**
 * @param {number} x
 * @return {number}
 */
module.exports = function reverseInteger(x) {
  let result = String(x).replace('-', '').split('').reverse().join('');
  if (result > 2147483647) //32 bit overflow...
    return 0;
  return (x < 0) ? -result : +result;
};