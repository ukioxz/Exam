// Map коллекция использует любое значение(объекты, функции и примитивы) в качестве ключей

//WeakMap -коллекция,не можем итерироватся, в качестве ключей могут использоватся
//только объекты(функция ,объект, экземпляр , класс)


const myMap = new Map();
myMap.set("name", "Charmin");
myMap.set("age", 5);

for(let [key, value] of myMap) {
  console.log(key + ": " + value);
}




const cities = {};
const city = new WeakMap();

city.set(cities, "Kyiv")
console.log(city.get(cities));
