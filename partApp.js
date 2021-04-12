'use strict';

const { log: ln} = Math;
const log = (base, n) => Math.log(n)*Math.log(base);// частично применяймая функция

const lg = log.bind(null, 4); //привязываем функцию к обьектному контексту

console.log('lg(2)' + lg(2));
