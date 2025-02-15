function greet(Uname) {
  console.log("hello " + Uname);
}
greet("mj");

function sum(a, b) {
  let ans = a + b;
  console.log(ans);
}
sum(1, 2);

function rtn(a, b) {
  let ans = a * b;
  return ans;
}

console.log(rtn(2, 3));

function sqr(a) {
  let ans = a * a;
  return ans;
}

console.log(sqr(2));
