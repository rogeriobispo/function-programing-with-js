// Javascript object passa parametro por referencia
pessoa = {
  name: "rogerio"
};

const mudaNome = (pessoa, newName) => {
  pessoa.name = newName;
  return pessoa;
};
const p1 = mudaNome(pessoa, "Bispo");
const p2 = mudaNome(p1, "Ancle Phio");
const p3 = mudaNome(p2, "Bispão");

console.log("p1", p1);
console.log("p2", p2);
console.log("p2", p3);
console.log("p0", pessoa);

// Javascript string passa parametro por valor
name = "rogerio";

const mudaNome = (nome, newName) => {
  nome = newName;
  return nome;
};
const n1 = mudaNome(name, "Bispo");
const n2 = mudaNome(n1, "Ancle Phio");
const n3 = mudaNome(n2, "Bispão");

console.log("n1", n1);
console.log("n2", n2);
console.log("n2", n3);
console.log("p0", name);

// Javascript array passagem por valor

numeros = [1, 3, 4];

const mudaNumeros = numeros => {
  return numeros.map(Math.sqrt);
};
const n1 = mudaNumeros(numeros);
const n2 = mudaNumeros(n1);
const n3 = mudaNumeros(n2);

console.log("n1", n1);
console.log("n2", n2);
console.log("n2", n3);
console.log("n0", numeros);
