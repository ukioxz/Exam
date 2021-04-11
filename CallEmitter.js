'use strict';

const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('colour', colour => {
  console.log('colours:', colour);
});

emitter.on('data', arr1 => {
  console.log(arr1.reduce((a, b) => a * b));
});

emitter.on('mapped', arr2 => {
  console.log(arr2.map((el) => el + 10));
});

emitter.on('Sorted', arr3 => {
  console.log(arr3.sort((x, y) => x-y));
})

emitter.emit('colour', 'White');
emitter.emit('colour', 'Black');
emitter.emit('colour', 'Beige');
emitter.emit('data', [5, 2, -3]);
emitter.emit('Sorted', [5, 2, -3]);
emitter.emit('mapped', [5, 2, -3]);
