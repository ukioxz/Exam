//функтор можем из одного контейнера преобразовывать через функцию и класть в новый контейнер
//функтор - функция, которая получает значения и функцию, распаковывает  значения, а потом запаковывает
//возращенные  значения в новую структуру и возращает

function add1(value) {
  return value + 1;
}

function fn1(value, fn) {
  return fn(value);
}

console.log(fn1(1, add1)); //2
//fn1([1, 2, 3], add1); //не работает с коллекциями

console.log([1, 2, 3].map(add1)); // используем .map чтобы распаковать и запаковать полученое значение





function plus1(value) {
  return value + 1;
}

function plus2(value) {
  return value + 2;
}

/*function compose(f, g) {
  return function(x) {return f(g(x))};
}*/

const compose = (f, g) => (x) => f(g(x)); // сначала вызовится g а потом f

console.log([1, 2, 3].map(compose(plus1, plus2))); //[4, 5, 6]  //значение сначало попадет в plus2, а потом в plus1
console.log([1, 2, 3].map(plus2).map(plus1));//[4, 5, 6]*/







'use strict';

function Maybe(x) {
  this.x = x;
}

Maybe.prototype.map = function(fn) {
  if(this.x && fn) {
    return new Maybe(fn(this.x));
  }else{
    return new Maybe(null);
  }
};

//Maybe.prototype.map = function(fn) {
//  return new Maybe(this.x && fn ? fn(this.x): null);
//};

new Maybe(3).map().map(console.log);           //создается новый экземпляр и(3) ложится в контейнер
                                              //map()происходит преобразованеи ,пустой контейнер(new Maybe(null)) поэтому
                                              //map(console.log) не вызывается
new Maybe(3).map(x => x*2).map(console.log);  // преобразовываем через функцию (и ложится в новый контейнер) и выводим
new Maybe(null).map(x => x*2).map(console.log);
