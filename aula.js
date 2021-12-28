function myCarros() {
  const carros = []
  function comprarCarro(carro) {
    carros.push(carro)
  }
  function getCarros() {
    return carros
  }
  return { comprarCarro, getCarros }
}

const concessionaria = myCarros()

// comprar 10 carros
for (let i = 0; i < 10; i++) {
  concessionaria.comprarCarro('carro')
}
console.log(concessionaria.getCarros())
