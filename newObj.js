function Person(name) {
  this.name = name;



}

const proga = new Person("Timur");
let angl = new Person("Julia");

function stradania(lesson, para,lecturer) {
  this.lesson = lesson;
  this.para = para;
  this.lecturer = lecturer;
}

let prepod1 = new stradania("proga",undefined, proga);
let prepod2 = new stradania("english", 2, angl);

console.log(prepod1.para);
console.log(prepod2.para);
console.log(prepod1.lecturer.name);
console.log(prepod2.lecturer.name);
