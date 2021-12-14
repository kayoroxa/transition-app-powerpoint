function _template3Examples(params) {
  return {
    elements: [
      createElement('img', {
        id: 1,
        src: params.images[0],
        from: 'bottom',
      }),
      createElement('img', {
        id: 2,
        src: params.images[1],
        from: 'bottom',
      }),
      createElement('img', {
        id: 3,
        from: 'bottom',
        src: params.images[2],
      }),
      createElement('exemple', {
        fontSize: 30,
        id: 1,
        en: params.exemples[0][0],
        pt: params.exemples[0][1],
      }),
      createElement('exemple', {
        fontSize: 30,
        id: 2,
        en: params.exemples[1][0],
        pt: params.exemples[1][1],
      }),
      createElement('exemple', {
        fontSize: 30,
        id: 3,
        en: params.exemples[2][0],
        pt: params.exemples[2][1],
      }),
    ],
    timeLine: l => [
      () => {
        l['exemple_1'].flex({ w: 3, h: 7 }).filho({
          fontSize: 40,
        })
        l['img_1'].flex({ w: 4, h: 7, line: 1 })
      },
      () => {
        l['exemple_1'].flex({ w: 3, h: 3 })
        l['img_1'].flex({ w: 4, h: 3, line: 1 })
        l['exemple_2'].flex({ w: 3, h: 6 }).filho({
          fontSize: 40,
        })
        l['img_2'].flex({ w: 4, h: 6, line: 2 })
      },
      () => {
        l['exemple_1'].flex({ w: 3, h: 2 })
        l['img_1'].flex({ w: 4, h: 2, line: 1 })
        l['exemple_2'].flex({ w: 3, h: 2 })
        l['img_2'].flex({ w: 4, h: 2, line: 2 })
        l['exemple_3'].flex({ w: 3, h: 6, line: 3 }).filho({
          fontSize: 40,
        })
        l.img_3.flex({ w: 4, h: 6, line: 3 })
      },
      () => {
        l['exemple_1'].flex({ w: 3, h: 3 })
        l['img_1'].flex({ w: 4, h: 3, line: 1 })
        l['exemple_2'].flex({ w: 3, h: 3 })
        l['img_2'].flex({ w: 4, h: 3, line: 2 })
        l['exemple_3'].flex({ w: 3, h: 3, line: 3 })
        l['img_3'].flex({ w: 4, h: 3, line: 3 })
      },
    ],
  }
}
