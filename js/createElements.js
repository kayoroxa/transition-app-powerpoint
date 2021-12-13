function createElement(type, parameters) {
  if (type === 'teach') {
    return Element(parameters.id || type)
      .caixa({
        ...jogar(parameters.from || 'bottom'),
      })
      .addText(parameters.title)
      .addText(parameters.description)
      .filho({ child: 1, color: 'red', fontSize: '45px', fontWeight: 'bold' })
      .filho({
        child: 2,
        marginTop: '5px',
      })
      .multiStyle('=', { child: 1, color: 'grey' })
  } else if (type === 'exemple') {
    const matchEn = parameters.en
      .match(/\(.*?\)/g)
      .map(v => v.replace(/[\(|\)]/g, ''))[0]
    const matchPt = parameters.pt
      .match(/\(.*?\)/g)
      .map(v => v.replace(/[\(|\)]/g, ''))[0]

    console.log({ matchEn, matchPt })
    return Element(parameters.id || type)
      .caixa({
        ...jogar(parameters.from || 'bottom'),
      })
      .addText(parameters.en.replace(/[\(|\)]/g, ''))
      .addText(parameters.pt.replace(/[\(|\)]/g, ''))
      .multiStyle(matchEn, { child: 1, color: 'pink' })
      .multiStyle(matchPt, { child: 2, color: 'pink' })
  } else if (type === 'img') {
    let id = parameters.id || type
    if (typeof parameters.id === 'number') {
      id = 'img_' + parameters.id
    }
    return Element(id)
      .caixa({
        ...jogar(parameters.from || 'top'),
      })
      .addImg(parameters.src || 'https://picsum.photos/700/700')
  } else if ((type === 'text', parameters)) {
    console.log('meee')
    let id = parameters.id || type
    if (typeof parameters.id === 'number') {
      id = 'text_' + parameters.id
    }
    return Element(id)
      .caixa({
        ...jogar(parameters.from || 'top'),
      })
      .addText(parameters.text)
      .filho({ child: 1, color: 'red', fontSize: '45px', fontWeight: 'bold' })
      .multiStyle('=', { child: 1, color: 'grey' })
  }
}
