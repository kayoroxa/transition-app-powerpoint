const elements = [
  elementAninhado('teach')
    .pStyle({
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // background: 'green',
    })
    .addImg(
      'https://images.pexels.com/photos/10367728/pexels-photo-10367728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    )
    .cStyle({
      // color: 'red',
    }),
  elementAninhado('olasinho')
    .caixa({ width: 300 })
    .addText('cadeira')
    .cStyle({ color: 'red', fontSize: 50 }),
]
createElements(elements)

timeLine([
  ({ teach, olasinho }) => {
    // teach.pStyle({
    //   width: 300,
    //   height: 600,
    //   top: 100,
    //   left: 30,
    // })

    olasinho
      .caixa({
        top: 200,
        left: 450,
      })
      .multiStyle('ira', {
        color: 'black',
        fontSize: 80,
        textDecoration: 'underline',
      })
  },
  ({ olasinho }) => {
    olasinho

      .caixa({
        top: 20,
        left: 20,
      })
      .multiStyle('ira', {
        color: 'purple',
        fontSize: 30,
        textDecoration: 'overline',
        text: 'olá',
      })
  },
])
