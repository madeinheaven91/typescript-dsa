export default interface IStack<T> {
  push(item: T): void;
  pop(): T;
  peek(): T;
  isEmpty: boolean;
  isFull: boolean;
}
