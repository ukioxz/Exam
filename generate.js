'use strict';

const number = {
  from: 1,
  to: 8,
  *[Symbol.iterator]() { //or [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log([...number]);
