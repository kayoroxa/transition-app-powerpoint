function _templatePrePronto(params) {
  const elements = []

  const lines = fakeIA(params.script)

  const sanitize = {}

  lines.forEach(line => {
    if (line === 'title') {
      sanitize['titles'] = [...sanitize?.['titles'], line.replace('t:', '')]
    }
    if (line === 'description') {
      sanitize['description'] = [
        ...sanitize?.['description'],
        line.replace('d:', ''),
      ]
    }
    if (line === 'exampleEn') {
      sanitize['exampleEn'] = [
        ...sanitize?.['exampleEn'],
        line.replace('e:', ''),
      ]
    }
  })

  return {
    elements,
    timeLine: el => [],
  }
}

template({
  script: [
    't:to run away',
    'd:fugir ou escapar de algo',
    'https://picsum.photos/700/700',
    'e:he +runs away+',
    'p:ele +fugiu+',
  ],
})

function fakeIA(lines) {
  return lines.map(line => {
    if (line.includes('t:')) return 'title'
    if (line.includes('d:')) return 'description'
    if (line.includes('e:')) return 'exampleEn'
    if (line.includes('p:')) return 'examplePt'
    if (line.includes('https://')) return 'img'
    else return 'other'
  })
}
