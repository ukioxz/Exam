const number = {
  from: 1,
  to: 4
};

number[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {  //возращает объект с двумя значениями done и value
      if (this.current <= this.last) {
        return {done: false, value: this.current++};
      } else {
        return {done: true};
      }
    }
  };
};

for (let num of number) {
  console.log(num);
}
