//фабрики объектов

'use strict';

const useFactory1 = (name, host, age) => ({
  name, host, age
});

function useFactory2(name, host, age) {
  return {name, host, age};
}


const user1 = useFactory1("Charmin", "Tyler", 5 );
const user2 = useFactory2("Charly", "Pete", 3);

console.log(user1);
console.log(user2);




'use strict';

const colors = {
  warning: '\x1b[1;36m',
  info: '\x1b[1;35m'
};

const logger = (level = 'info') => {
  const color = colors[level];
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};

const warning = logger('warning');
warning('Charly');

const info = logger('info');
info('Charmin');




//фабричные методы

'use strict';

class Cat {
  constructor(name) {
    this.name = name;
  }
  static factory(name) {
    return new Cat(name);
  }
}

//const cat1 = new Cat('Charly');
//console.dir({ cat1});

const cat2 = Cat.factory('Charmin');
console.dir({ cat2 });




'use strict';

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const factorify = Category => (...args) => new Category(...args); //из класса делаем фабрику


/*const cat1 = new Cat('Charly', 3); //инстанциирование через new
console.dir({ cat1 });*/

const catFactory = factorify(Cat);// инстациирование
const cat1 = catFactory('Charly', 3);
console.dir({ cat1 });
