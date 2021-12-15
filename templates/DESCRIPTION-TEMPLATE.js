//tipo CIRCO 🎪 ( Imagine essa area como seu kit layers )
createElement('teach', {
  from: 'bottom',
  en: 'asdasdasd',
  pt: 'asdasdasdasd',
  //id: 2, //obrigatorio caso aja mais de 1 no mesma cena / template
})

// Nesse elemento/layer abaixo vai ser responsavel por mostrar um exemplo com a frase traduzida
createElement('exemple', {
  fontSize: 30, //font pra os 2
  en: '(exemplo) [em] {inglês} |entendeu| ?', //cada caracteres ( abre e fecha ) é uma cor especifica
  pt: '(exemplo) [em] {pt} |entendeu|?',
  //id: 2, //obrigatorio caso aja mais de 1 no mesma cena / template
})

createElement('img', {
  src: 'linkDaImage',
  from: 'bottom',
  //id: 2, //obrigatorio caso aja mais de 1 no mesma cena / template
})

createElement('twoHeader', {
  // 2 header do mesmo tamanho, com cores independentes,se você colocar "=" vai ficar cinza
  headers: ['header1 ou have = ter', 'header2'],
  colors: ['blue', 'orange'],
  from: 'bottom',
  //id: 2, //obrigatorio caso aja mais de 1 no mesma cena / template
})
///////END CIRCO/////////

function _templatePrePronto(params) {
  //você pode usar o params "." alguma coisa -
  // pra o usuario passar do lado de fora alguma customização
  return {
    elements: [
      //coloque aqui qualquer 1 do tipo CIRCO 🎪, simplesmente para criar mas sem aparecer na tela
      //exemple:
      createElement('img', {
        src: params.src || params.img,
        from: 'bottom',
        //id: 2, //obrigatorio caso aja mais de 1 no mesma cena / template
      }),
    ],
    timeLine: el => [
      // cada função () => {} é executada quando eu clicar,
      // a primeira vai ser executada automaticamente (pra aparecer na tela)
      () => {
        el['coloca o id aq'].flex({ w: 3, h: 7, linha: 1 }) // linha opcional
      },
      () => {
        el['coloca o id aq'].flex({ w: 3, h: 7 }) // linha opcional
      },
    ],
  }
}
