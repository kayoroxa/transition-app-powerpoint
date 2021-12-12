const elements = [
  // Element('header') //replace for your id
  //   .caixa({
  //     left: 0,
  //     right: 0,
  //     // width: '0px',
  //     // height: '0px',
  //     // bottom: '0px',
  //     // center: true,
  //   })
  //   .addText('header')
  //   .filho({
  //     align: 'end',
  //   }),
  Element('header') //replace for your id
    .caixa({
      left: 0,
      right: 0,
      // width: '0px',
      // height: '0px',
      // bottom: '0px',
      // center: true,
    })
    .addText('asdasd')
    .filho({
      // align: 'end',
    }),
  Element('image_exemplo')
    .caixa({
      width: '0px',
      height: '0px',
      top: '2000px',
    })
    .addImg('https://picsum.photos/700/700'),
]
createElements(elements)

timeLine([
  ({ header }) => {
    // your id elements who you wanna animate
    header
      .caixa({
        ...relativeHorizontal('2-4/5'),
        ...relativeVertical('2-4/5'),
      })
      .filho({
        //style atributes
      })
  },
  ({ image_exemplo, header }) => {
    // your id elements who you wanna animate
    console.log('olá')
    header
      .caixa({
        ...relativeHorizontal('2-4/5'),
        ...relativeVertical('2-3/16'),
      })
      .filho({
        //style atributes
      })
    image_exemplo
      .caixa({
        ...relativeHorizontal('2-4/5'),
        ...relativeVertical('4-9/10'),
      })
      .filho({
        //style atributes
      })
  },
])
