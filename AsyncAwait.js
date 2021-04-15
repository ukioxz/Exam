'use strict';

function getResult(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });
}

async function add1(x) {         //преостанавливает на 3 сек для первого await и еще на 3 сек для второго
  const a = await getResult(10);
  const b = await getResult(4);
  return x + a + b;
}

add1(5).then(v => {
  console.log(v);
});






const obj = {
  name: ' Marcus Aurelius ',
  async trim() {
    return this.name.trim();
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    return await new Person(name); // оборачиваем в промис 
  }

  async trim() {
    return this.name.trim();
  }
}

const person = new Person(' Marcus Aurelius ');

(async () => {


  console.log('await obj.repeat() =', await obj.trim());
  console.log('await person.repeat() =', await person.trim());

})();
