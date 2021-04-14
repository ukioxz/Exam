//композиция - когда из нескольких функций, можем сделать одну обьеденив в цепочку справа налево или слева направо
//compose - справа налево




const upperCase = str => str.toUpperCase();
const exclaim = str => `${str}!!!!!!`;
const repeat = str =>`${str}`.repeat(3);

const upperCase1 = str1 => str1.toUpperCase();
const exclaim1 = str1 => `${str1}!!!!!!`;
const repeat1 = str1 =>`${str1}`.repeat(3);



const str = "tired"
const str1 = "aa";

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const withCompose = compose(repeat1, exclaim1, upperCase1);

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
const withPipe = pipe(repeat, exclaim, upperCase);

console.log(`${withCompose(str)}`); //TIRED!!!!!!TIRED!!!!!!TIRED!!!!!!
console.log(`${withPipe(str1)}`); //AAAAAA!!!!!!
