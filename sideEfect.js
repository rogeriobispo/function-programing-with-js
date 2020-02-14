let cnt = 0;

let incrementWithSideEfects = () => {
  cnt++;
  return cnt;
};
// este tipo de implementação pode ter efeito colateral cnt pode
// ser alterada por outro fator externo. muitos lugares pode mudar.
// este valor.
console.log(incrementWithSideEfects());

cntWithouSideEfects = 0;
let incrementWithoutSideEfects = num => {
  return num + 1;
};
// função pura não modifica nada fora da função.
// não tem efeito colateral.
console.log(incrementWithSideEfects(cntWithouSideEfects));

// ____________________________________________________________________________//
// Exemplo 2 sem efeito colateral dentro da função.

let average = scores => {
  var total = 0;
  const scoresLength = scores.length;
  for (let i = 0; i < scoresLength; i++) {
    total += scores[i];
  }
  console.log("Total: ", total);
  return total / scoresLength;
};

console.log("Média é", average([10, 20, 30]));
