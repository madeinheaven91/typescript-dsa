import IQueue from "../interfaces/queue.interface";

export default class Queue<T> implements IQueue<T> {
  constructor() {
    this._contents = {};
    this._isEmpty = true;
    this._size = 0;
  }

  private _contents: Record<number, T>;
  private _isEmpty: boolean;
  private _size: number;

  private updateFields() {
    this.size = 0;
    for( const key in this._contents) this.size++;
    this.isEmpty = this._size === 0 ? true : false;
  }

  private shiftIndices() {
    for(const key in this._contents){
      let i = key as unknown as number;
      this._contents[i - 1] = this._contents[i];
      delete this._contents[i]
    }
  }
  
  /*
   * Instance variable - returns if the queue is empty; 
   * @return {boolean}   Is the queue empty?
   */
  get isEmpty(): boolean {
    return this._isEmpty;
  }
  private set isEmpty(value: boolean) {
    this._isEmpty = value;
  }

  /*
   * Instance variable - returns the size of the queue
   * @return {number}    Size of the queue
   */
  get size(): number {
    return this._size;
  }
  private set size(value: number) {
    this._size = value;
  }

  /*
   * Pushes an item to the rear of the queue.
   * @param {type} item An item to be pushed.
   */
  push(item: T) {
    this._contents[this.size] = item;
    this.updateFields();
  }

  /*
   * Pops an item from the front of the queue and returns it.
   * @return {type}    Popped item.
   */
  pop(): T {
    if(this.isEmpty) throw new Error("Can't pop from an empty queue"); 
    let result = this._contents[0];
    delete this._contents[0];
    this.shiftIndices();
    this.updateFields();
    return result;
  }

  /*
   * Returns the first item in the queue without removing it.
   * @return {type}     The first item.
   */
  front(): T {
    return this._contents[0];
  }
  
  /*
   * Returns the last item in the queue without removing it.
   * @return {type}    The last item.
   */
  back(): T{
    return this._contents[this._size - 1]
  }
}
