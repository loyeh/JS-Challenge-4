function marblesRunner(m, n, memo = {}) {
  const key = `(${m},${n})`;
  if (key in memo) {
    return memo[key];
  }
  if (m === 0 && n === 0) {
    return 0;
  }
  if (m === 0 || n === 0) {
    return 1;
  }

  memo[key] = marblesRunner(m - 1, n, memo) + marblesRunner(m, n - 1, memo);
  return memo[key];
}

console.log(marblesRunner(1, 1));
console.log(marblesRunner(2, 2));
console.log(marblesRunner(2, 3));
console.log(marblesRunner(5, 5));

console.time("(10,10)");
console.log("for (10,10)", marblesRunner(10, 10));
console.timeEnd("(10,10)");

console.time("(15,15)");
console.log("for (15,15)", marblesRunner(15, 15));
console.timeEnd("(15,15)");

console.time("(20,20)");
console.log("for (20,20)", marblesRunner(20, 20));
console.timeEnd("(20,20)");
