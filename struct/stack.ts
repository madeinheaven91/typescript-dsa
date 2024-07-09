import IStack from "../interfaces/stack.interface";

class Stack<T> implements IStack<T> {
  constructor(size?: number) {
    this.size = size ?? undefined;
    this.contents = new Array<T>();
    this.isEmpty = true;
    this.isFull = size === 0 ? true : false;
  }

  contents: Array<T>;
  private readonly size: number | undefined;
  private checkFullEmpty(): void {
    this.isEmpty = this.contents.length === 0 ? true : false;
    this.isFull = this.contents.length === this.size ? true : false;
  }

  /*
   * Instance variable - checks is the stack is empty.
   * @returns {boolean}  Is the stack empty?
   */
  isEmpty: boolean;

  /*
   * Instance variable - checks is the stack is full.
   * @returns {boolean}  Is the stack full?
   */
  isFull: boolean;

  /*
   * Pushes an item to the stack.
   * @param {type} item An item to be pushed.
   */
  push(item: T): void {
    if (this.isFull) throw new Error("Can't push to a full stack");
    this.contents.push(item);
    this.checkFullEmpty();
  }

  /*
   * Pops an item from stack and returns it.
   * @return {type}    Popped item.
   */
  pop(): T {
    if (this.isEmpty) throw new Error("Can't pop from an empty stack");
    let result = this.contents.pop() as T;
    this.checkFullEmpty();
    return result;
  }

  /*
   * Peeks an item from the stack.
   * @return {type}    Peeked item.
   */
  peek(): T {
    if (this.isEmpty) throw new Error("Can't peek an empty stack");
    return this.contents[this.contents.length - 1];
  }
}

export default Stack;
