//композиция - когда из нескольких функций, можем сделать одному
//обьеденив в цепочку справа налево или слева направо
//compose - справа налево




const upperCase = str => str.toUpperCase();
const exclaim = str => `${str}!!!!!!`;
const repeat = str =>`${str}`.repeat(3);

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withCompose = compose(repeat, exclaim, upperCase);

console.log(withCompose("Я устал"));
