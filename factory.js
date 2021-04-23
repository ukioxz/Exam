//фабрики объектов

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
