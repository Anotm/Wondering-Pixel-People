class PriorityQueue {
  constructor() {
    this._queue = [];
  }

  push(value) {
    if (
      this.isEmpty() ||
      value.priority >= this._queue[this.getSize() - 1].priority
    ) {
      this._queue.push(value);
    } else {
      for (let index = 0; index < this._queue.length; index++) {
        if (value.priority < this._queue[index].priority) {
          this._queue.splice(index, 0, value);
          break;
        }
      }
    }
  }

  pop() {
    return this._queue.shift();
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  getSize() {
    return this._queue.length;
  }
}



