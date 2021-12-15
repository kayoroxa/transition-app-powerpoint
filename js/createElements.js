function createElement(type, parameters) {
  if (type === 'teach') {
    return Element(parameters.id || type)
      .hidden(parameters.from || 'bottom')
      .addText(parameters.title)
      .addText(parameters.description)
      .filho({
        child: 1,
        color: cor.pink,
        fontSize: '65px',
        fontWeight: 'bold',
      })
      .filho({
        child: 2,
        fontSize: '40px',
        marginTop: '5px',
      })
      .multiStyle('=', { child: 1, color: 'grey' })
  } else if (type === 'exemple') {
    return Element(parameters.id ? 'exemple_' + parameters.id : type)
      .hidden(parameters.from || 'bottom')
      .addText(parameters.en.replace(/[\(|\)|\[|\]|\{|\}|\|]/g, ''))
      .addText(parameters.pt.replace(/[\(|\)|\[|\]|\{|\}|\|]/g, ''))
      .filho({ fontSize: parameters.fontSize || '40px' })
      .multiStyle(match(parameters.en, '()'), { child: 1, color: cor.pink })
      .multiStyle(match(parameters.pt, '()'), { child: 2, color: cor.pink })

      .multiStyle(match(parameters.en, '[]'), { child: 1, color: cor.blue })
      .multiStyle(match(parameters.pt, '[]'), { child: 2, color: cor.blue })

      .multiStyle(match(parameters.en, '{}'), { child: 1, color: cor.green })
      .multiStyle(match(parameters.pt, '{}'), { child: 2, color: cor.green })

      .multiStyle(match(parameters.en, '||'), { child: 1, color: cor.purple })
      .multiStyle(match(parameters.pt, '||'), { child: 2, color: cor.purple })
  } else if (type === 'img') {
    let id = parameters.id || type
    if (typeof parameters.id === 'number') {
      id = 'img_' + parameters.id
    }
    return Element(id)
      .hidden(parameters.from || 'bottom')
      .addImg(parameters.src || 'https://picsum.photos/700/700')
  } else if (type === 'text') {
    let id = parameters.id || type
    if (typeof parameters.id === 'number') {
      id = 'text_' + parameters.id
    }
    return Element(id)
      .hidden(parameters.from || 'bottom')
      .addText(parameters.text)
      .filho({ child: 1, color: 'red', fontSize: '45px', fontWeight: 'bold' })
      .multiStyle('=', { child: 1, color: cor.gray })
  } else if (type === 'twoHeader') {
    return (
      Element(parameters.id || type)
        // .caixa({
        //   w: '40vh',
        //   h: '30vh',
        // })
        .hidden(parameters.from || 'bottom')
        .addText(parameters.headers[0])
        .addText(parameters.headers[1])
        .filho({
          fontSize: '65px',
          fontWeight: 'bold',
        })
        .filho({
          child: 1,
          color: cor[parameters.colors[0]] || cor.pink,
        })
        .filho({
          child: 2,
          color:
            cor[parameters.colors[1]] || parameters.colors[0] || cor.purple,
        })
        .multiStyle('=', { child: 1, color: cor.gray })
        .multiStyle('=', { child: 2, color: cor.gray })
    )
  }
}

function match(text, match = '()') {
  const regex = new RegExp(`\\${match.split('').join('.*?\\')}`, 'g')
  const removeRegex = new RegExp(`[\\${match.split('').join('|\\')}]`, 'g')
  const result = text.match(regex)?.map(v => v.replace(removeRegex, ''))
  return result?.[0]
}
