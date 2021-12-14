const elements = [
  createElement('teach', {
    title: 'have = ter',
    description: 'se usa pra dizer que tem algo',
  }),
  createElement('img', {
    id: 1,
    src: 'https://picsum.photos/700/700',
  }),
  createElement('img', {
    id: 2,
    src: 'https://picsum.photos/700/700',
  }),
  createElement('img', {
    id: 3,
    src: 'https://picsum.photos/700/700',
  }),

  Element('exemple_text')
    .caixa({
      ...jogar('top'),
    })
    .addText('you are the best')
    .addText('você é o cara')
    .filho({
      fontSize: '40px',
    }),
]
createElements(elements)

timeLine(({ exemple_text, teach, img_1, img_2, img_3 }) => [
  () => {
    teach.flex({ w: 7, h: 3.6 })
  },
  () => {
    teach.flex({ w: 7, h: 3 })
    img_1.flex({ w: 4, h: 5.5, line: 2 })
  },
  () => {
    teach.flex({ w: 7, h: 3 })
    img_1.flex({ w: 4, h: 5.5, line: 2 })
    img_2.flex({ w: 4, h: 5.5, line: 2 })
  },
  () => {
    // teach.caixa({ opacity: 0 }).flex()
    exemple_text.flex({ w: 4, h: 5.5, line: 2 })
    img_1
      .caixa({ opacity: 0.4, height: '50vh', top: '40vh', zIndex: '-6' })
      .flex()
  },
])
