export default interface IQueue<T> {
  push(item: T): void;
  pop(): T;
  front(): T;
  back(): T;
  isEmpty: boolean;
  size: number;
}
