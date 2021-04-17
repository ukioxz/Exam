//=> у лямбд нету прототипов ,только у function есть

'use strict';

function Res(x, y) {  //конструктор прототипа
  this.x = x;          //ссылка this на объект который создался в результате вызова конструктора
  this.y = y;
}

Res.from = function(obj) {  //статический метод
  const {x, y} = obj;
  return new Point(x, y);    //создает новый объект, х, у передаются в конструктор function Point
};

Res.prototype.move = function(x, y) {    //метод у экзепляра, который наследуем
  this.x = x*2;
  this.y = y*2;
};

Res.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`;
};

console.log((()=> {}).prototype); //
console.log(Res.prototype);
console.log(Res.prototype.move.prototype);

const p1 = new Res(5, 9);
p1.move(-1, 3);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
