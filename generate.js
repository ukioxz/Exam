//function*
//итераторы предоставляют средства для доступа к элементам коллекций по одному за раз
//генераторы работаю как фабрики итераторов
//генераторы могут порождать множество значений

//метод next() возращает след. элемент,
//возращает объект со свойством value: и свойством done:
//которое указывает ,что генератор уже отдал свое значение(true, false)

'use strict';


function* genMarkers() {
  yield 1;
  yield 2;
  yield 3;
}

const it = genMarkers();

console.log(it.next().value); //1
console.log(it.next().value); //2
console.log(it.next().value); //3



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



function* generateNum() {
  yield 1;
  yield 2;
  yield 5;
}

let generatorF = generateNum();

for(let value of generatorF) {
  console.log(value);
}

//array
let generatorS = [0,...generateNum()];
console.log(generatorS);




'use strict';

function* Blabla(start, end, delta) {
  let value = start;
  while(end > value) {
    value += delta;
     //if (value > end) return; // (проверка)done:false для 7-35, дальше value: undefined done:true
    yield value;
  }
}

const a = Blabla(0, 36, 7);
const c1 = a.next();
const c2 = a.next();
const c3 = a.next();
const c4 = a.next();
const c5 = a.next();
const c6 = a.next();
const c7 = a.next(); //done:true итерирование закончилось
console.log({a, c1, c2, c3, c4, c5, c6, c7});






//yield*
// композиця генераторов - "встраивание" генераторов друг в друга

function* genSec(start, end) {
  for(let i = start; i <= end; i++) yield i;
}

function* generatePassw() {

  yield* genSec(48, 57);

  yield* genSec(65, 90);
}

 let str = '';

 for(let code of generatePassw()) {
   str += String.fromCharCode(code);
 }

 console.log(str);




'use strict';

function* genFn() {
  yield* ["Черепашка","по имени" ,"Наташка" ]; // итерируем массив
  // yield* new Set([10, 20, 30]) //тоже самое
}

const c = genFn();
const val1 = c.next();
const val2 = c.next();
const val3 = c.next();
const val4 = c.next();
console.log({c, val1, val2, val3, val4});




'use strict';

function* gen1() {
  yield 'Ходит кошка в коридоре';
  yield 'У неё большое горе';
}

function* gen2() {
  yield 'Злые люди бедной киске';
  yield 'Не дают украсть сосиски';
}

function* genFn1() {
  yield* gen1();
  yield* gen2();
}

console.log('[...genFn1()] =', [...genFn1()]);




//ненужные методы return и throw
//.throw генерирует ошибку

'use strict';

function* genFn5() {
  yield 10;
}

{
  const g = genFn5();
  const g1 = g.next();
  const g2 = g.return(20); // done:true
  const g3 = g.next();
  const g4 = g.return(30); // done: true
  console.log({g1, g2, g3, g4});
}
