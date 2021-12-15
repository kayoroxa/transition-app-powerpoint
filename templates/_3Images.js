function _3Imagens(parameters) {
  return {
    elements: [
      createElement('twoHeader', {
        headers: parameters.headers,
        from: parameters.from,
        colors: parameters.colors,
      }),
    ],
    timeLine: el => [() => el.twoHeader.flex({ w: 7, h: 4 })],
  }
}
