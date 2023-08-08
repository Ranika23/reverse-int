module.exports = function reverse (n) {
  const str = String(n);
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if ('0123456789'.includes(str[i]) == true) result = str[i] + result
  }
  return Number(result);
}
