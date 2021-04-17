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



//через классы

'use strict';

class Result {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(x, y) {
    this.x += x+2;
    this.y += y+2;
  }

  toString() {
    return `${this.x}, ${this.y}`;
  }

  static from(obj) {
    const {x, y} = obj;
    return new Result(x, y);
  }
}

const p1 = new Result(7, 4);
p1.plus(-2, 3);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');




//через bind

'use strict';

function getNew(x, y) {
  this.x += x;
  this.y += y;
}

function toString() {
  return `${this.x}, ${this.y}`;
}

const p1 = {x: 6, y: 10};
const p1get = getNew.bind(p1);       // создаем метод и через bind привязываем к p1
const p1toString = toString.bind(p1);
p1get(-5, 7);

console.log(p1);
console.log(p1toString());
console.log(p1 + '');



'use strict';

class Square {
  toString() {
    return `${this.x}, ${this.y}, ${this.width}, ${this.height}`;
  }
}

const a = { x: 4, y: 2, width: 8, height: 8};
Object.setPrototypeOf(a, Square.prototype); // второй аргумент от кого наследуем

console.log(a.toString());
