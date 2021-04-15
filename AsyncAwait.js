function getResult(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });
}

async function add1(x) {
  const a = await getResult(10);
  const b = await getResult(4);
  return x + a + b;
}

add1(5).then(v => {
  console.log(v);
});
