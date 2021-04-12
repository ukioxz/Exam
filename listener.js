//Колбэк вызывается один раз, а лисенер несколько раз



'use strict';

const iterate = (array, listener) => {
  for (const item of array) {
    listener(item);
  }
};


const age = [27, 19, 24];

const print = getAge => {
  console.log('Age:', getAge);
};

iterate(age, print);
