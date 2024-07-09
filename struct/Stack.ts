import IStack from "../interfaces/stack.interface";

export default class Stack<T> implements IStack<T> {
  constructor(size?: number) {
    this._size = size ?? undefined;
    this._contents = new Array<T>();
    this._isEmpty = true;
    this._isFull = size === 0 ? true : false;
  }

  private _contents: Array<T>;
  private readonly _size: number | undefined;
  private _isEmpty: boolean;
  private _isFull: boolean;

  private checkFullEmpty(): void {
    this.isEmpty = this._contents.length === 0 ? true : false;
    this.isFull = this._contents.length === this._size ? true : false;
  }

  /*
   * Instance variable - checks is the stack is empty.
   * @returns {boolean}  Is the stack empty?
   */
  get isEmpty(): boolean {
    return this._isEmpty;
  }

  private set isEmpty(boolean) {
    this._isEmpty = boolean;
  }

  /*
   * Instance variable - checks is the stack is full.
   * @returns {boolean}  Is the stack full?
   */

  get isFull(): boolean {
    return this._isFull;
  }

  private set isFull(boolean) {
    this._isFull = boolean;
  }

  /*
   * Pushes an item to the stack.
   * @param {type} item An item to be pushed.
   */
  push(item: T): void {
    if (this.isFull) throw new Error("Can't push to a full stack");
    this._contents.push(item);
    this.checkFullEmpty();
  }

  /*
   * Pops an item from stack and returns it.
   * @return {type}    Popped item.
   */
  pop(): T {
    if (this.isEmpty) throw new Error("Can't pop from an empty stack");
    let result = this._contents.pop() as T;
    this.checkFullEmpty();
    return result;
  }

  /*
   * Peeks an item from the stack.
   * @return {type}    Peeked item.
   */
  peek(): T {
    if (this.isEmpty) throw new Error("Can't peek an empty stack");
    return this._contents[this._contents.length - 1];
  }
}
