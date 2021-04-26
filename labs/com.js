'use strict';

const plus = x => x + 3;
const square = x => x*x;

const pipe = (...fns) => x => {
  for(const value of fns) {
    if(typeof(value) !== 'function') throw new Error('tyt netu function');
  }
  return fns.reduce((acc, f) => f(acc), x);
};

const compose = (...fns) => x => {
  for(const value of fns) {
    if(typeof(value) !== 'function') throw new Error('tyt netu function');
  }
  return fns.reduceRight((acc, f) => f(acc), x);
};

const withPipe = pipe( plus, square);
const x = withPipe(1);

const withCompose = compose(square, plus);
const y = withCompose(2);

console.log(x);
console.log(y);
