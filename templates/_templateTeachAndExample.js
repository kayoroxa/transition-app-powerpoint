function _templateTeachAndExample(params) {
  const movement = _.sample(['up', 'down', 'left'])
  return {
    elements: [
      //
      createElement('teach', {
        id: '',
        from: movement,
        title: params.title,
        description: params.description,
      }).caixa({
        width: relativeHorizontal(70),
        height: relativeVertical(40),
      }),
      createElement('exemple', {
        id: '',
        fontSize: 45,
        from: movement,
        en: params.exemple[0],
        pt: params.exemple[1],
      }),
      createElement('img', { src: params.image, from: movement }),
    ],
    timeLine: l => {
      return [
        () => {
          l['teach'].flex({ w: 7, h: 4 })
        },
        () => {
          l['teach'].caixa({ opacity: 0, top: '150vh' }).flex() //.caixa({ top: '-50vh' })
          l['exemple'].flex({ w: 4, h: 2 })
          l['img'].flex({ w: 7, h: 7 })
        },
      ]
    },
  }
}
