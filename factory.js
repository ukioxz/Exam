const useFactory = (name, host, age) => ({
  name, host, age
});

const user = useFactory("Charmin", "Tyler", 5 );
console.log(user);
