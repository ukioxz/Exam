const palindrome = str => {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('') ? true: false;
}



console.log(palindrome("anna"));
