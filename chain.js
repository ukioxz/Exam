const Text = function(s) {
  this.value = s;
};

Text.prototype.line = function(a) {
  this.value += "\n" + a;
  return this;
};

Text.prototype.toString = function() {
  return this.value;
};

const phrase = new Text("Черепашка")
      .line("по имени")
      .line("Наташка");
console.log(`*${phrase}*`);
