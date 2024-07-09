import Stack from "./struct/stack";

let stack = new Stack<number>();

stack.push(3)
stack.push(+"a")
console.log(stack.peek())
stack.pop()
stack.pop()
console.log(stack.peek())
