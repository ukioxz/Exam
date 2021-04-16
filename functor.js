//функтор можем из одного контейнера преобразовывать через функцию и класть в
//новый контейнер


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

new Maybe(3).map().map(console.log);           //создается новый экземпляр и(3) ложится в контейнер
                                              //map()происходит преобразованеи ,пустой контейнер(new Maybe(null)) поэтому
                                              //map(console.log) не вызывается
new Maybe(3).map(x => x*2).map(console.log);  // преобразовываем через функцию (и ложится в новый контейнер) и выводим
new Maybe(null).map(x => x*2).map(console.log);
