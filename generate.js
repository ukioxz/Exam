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
