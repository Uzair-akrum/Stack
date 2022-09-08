let a = [100, 200, "+", 2, "/", 5, "*", 7, "+"];
let stack = [];
for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == "number") {
    stack.push(a[i]);
  }
  if (typeof a[i] == "string") {
    let first = stack.pop();
    let second = stack.pop();
    if (a[i] == "+") {
      stack.push(first + second);
    } else if (a[i] == "-") {
      stack.push(first - second);
    } else if (a[i] == "*") {
      stack.push(first * second);
    } else if (a[i] == "/") {
      stack.push(second / first);

      console.log(" :", stack);
    }
  }
}

console.log(" :", stack);
