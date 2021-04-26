'use strict';

const getRandom = (min, max) => (max === undefined?Math.floor(Math.random()*min):Math.floor(Math.random()*(max - min) + min));

console.log(getRandom(0, 7));
console.log(getRandom(3));
