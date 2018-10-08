module.exports = function count(s, pairs) {
  let counter = 0;
  const N = pairs.reduce((n, pair) => {
    if (pair[1] > 5 || n > 100000){
      return null;
    }
    return n * (pair[0] ** pair[1])
  }, 1);
  if (!N){
    return 0;
  }
  function checkK(num) {
    for (let i = 0, len = s.length; i < len; i++) {
      const currNum = num + i;
      const isDivisible = Boolean(pairs.filter(a => currNum % a[0] === 0).length);
      const condition0 = parseInt(s[i], 2) === 0 && isDivisible;
      const condition1 = parseInt(s[i], 2) === 1 && !isDivisible;
      if (!condition0 && !condition1) {
        return false;
      }
    }
    return true;
  }
  for (let k = 1; k <= N; k++) {
    if (checkK(k)) {
      counter++;
    }
  }
  return counter;
}
