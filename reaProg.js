'use strict';

const { PI, sqrt } = Math;
const square = x => x * x;

// Reactive Truncated cone

class Cylinder {
  constructor(r1, h) {
    this.cylinder = { r1, h };
    this.calculate();
  }
  calculate() {
    const { r1, h } = this.cylinder;
    const sr1 = square(r1);


    this.cylinder.v = PI * h * sr1;
    this.cylinder.s = 2 * PI * r1*(r1 + h);
  }
  set r1(x) {
    this.cylinder.r1 = x;
    this.calculate();
  }
  set r2(x) {
    this.cylinder.r2 = x;
    this.calculate();
  }
  set h(x) {
    this.cylinder.h = x;
    this.calculate();
  }
  get v() {
    return this.cylinder.v;
  }
  get s() {
    return this.cylinder.s;
  }
}

// Usage

const cylinder = new Cylinder(10, 7);
console.dir({ v: cylinder.v, s: cylinder.s });
cylinder.h = 8;
console.dir({ v: cylinder.v, s: cylinder.s });
