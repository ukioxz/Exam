//new Proxy(target, handler);
//"оборачивается" вокруг объекта и может перехватывать разные значения
//target - объект для которого надо сделать  прокси
//handler - конфигурация прокси, методы, которые перехватывают разные операции




'use strict';

const data = { name: 'Charmin', host: 'Marcus', age: 5 };

const cat = new Proxy(data, {});

console.dir({ 'cat.born': cat.age });
console.dir({ 'cat.year': cat.breed });

for (const key in cat) {
  console.dir({
    key,
    value: cat[key],
  });
}
console.log(cat.host);
console.log(cat.breed);
console.log(cat.name);
