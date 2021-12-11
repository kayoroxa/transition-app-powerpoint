/// fazer o pai invisivel pra conseguir manter a ideia do alinhamento
//criar ideia do obj com filhos

function elementAninhado(id, children = []) {
  // const children = children
  const me = document.createElement('div')
  console.log(id)
  me.id = id
  me.classList.add('elementAninhado')

  function updateChildren() {
    me.innerHTML = ''
    children.forEach(child => me.appendChild(child))
    me.id = id
  }

  function addChild(child) {
    children.push(child)
    updateChildren()
  }

  function addText(text) {
    //create element html
    const element = document.createElement('p')
    const letras = text.split('').map(letra => {
      const l = document.createElement('span')
      l.textContent = letra
      return l
    })

    console.log(letras)
    element.append(...letras)

    element.style.top = '0'
    element.style.left = '0'
    element.style.textAlign = 'center'
    addChild(element)
    return _return
  }

  function matchTextSpan(textMatch, texts) {
    let start = 0
    let end = 0
    let find = 0

    while (find < textMatch.length) {
      console.log({ find, textMatch: textMatch.length })
      if (start === 0) {
        debugger
        start = texts.indexOf(textMatch[0], start)
        end = start
        find++
      }
      if (start === -1) return { start: 0, end: 0 }

      newEnd = texts.indexOf(textMatch[find], end + 1)

      if (end === -1 || newEnd - end !== 1) {
        start = texts.indexOf(textMatch[find], end + 1)
        end = newEnd
      } else {
        find++
        end = newEnd
      }
    }
    return {
      start,
      end,
    }
  }

  function multiStyle(textMatch, style) {
    const spans = children[0].children
    const texts = [...spans].map(span => span.textContent)

    // let start = 0
    // let end = 0
    // let find = 0

    // while (find < textMatch.length) {
    //   console.log({ find, textMatch: textMatch.length })
    //   if (start === 0) {
    //     debugger
    //     start = texts.indexOf(textMatch[0], start)
    //     end = start
    //     find++
    //   }
    //   if (start === -1) return _return

    //   newEnd = texts.indexOf(textMatch[find], end + 1)

    //   if (end === -1 || newEnd - end !== 1) {
    //     start = texts.indexOf(textMatch[find], end + 1)
    //     end = newEnd
    //   } else {
    //     find++
    //     end = newEnd
    //   }
    // }

    const { start, end } = matchTextSpan(textMatch, texts)

    ;[...spans].slice(start, end + 1).forEach(span => {
      span.style.color = style.color
      span.style.fontSize = numberOrString(style.fontSize)
      span.style.fontWeight = style.fontWeight
      span.style.fontStyle = style.fontStyle
      span.style.textDecoration = style.textDecoration
      span.style.textTransform = style.textTransform
      span.style.textAlign = style.textAlign
      if (style.text) {
        span.textContent = style.text
      }
    })
    return _return
  }

  function addImg(src) {
    const element = document.createElement('img')
    element.src = src
    element.style.top = '0'
    element.style.left = '0'
    element.style.width = '100%'
    element.style.height = '100%'
    addChild(element)
    return _return
  }

  const style = {
    width: me.style.width,
    height: me.style.height,
    top: me.style.top,
    left: me.style.left,
    background: me.style.background,
    border: me.style.border,
    borderRadius: me.style.borderRadius,
    boxShadow: me.style.boxShadow,
    transform: me.style.transform,
    zIndex: me.style.zIndex,
    position: me.style.position,
    display: me.style.display,
    opacity: me.style.opacity,
  }

  function pStyle(style) {
    me.style.width = numberOrString(style.width)
    me.style.height = numberOrString(style.height)
    me.style.top = numberOrString(style.top)
    me.style.left = numberOrString(style.left)
    me.style.background = style.background

    return _return
  }

  function cStyle(style) {
    if (children.length <= 0)
      return throwError('elementAninhado: Não tem filho')
    children[0].style.width = numberOrString(style.width)
    children[0].style.height = numberOrString(style.height)
    children[0].style.top = numberOrString(style.top)
    children[0].style.left = numberOrString(style.left)
    children[0].style.fontSize = numberOrString(style.fontSize)
    children[0].style.background = style.background
    children[0].style.color = style.color
    children[0].style.color = style.textColor
    children[0].style.textAlign = style.textAlign

    // if (style.text) {
    //   const texts = [...children[0].children].map(span => span.textContent)
    //   const { start, end } = matchTextSpan(style.text, texts)
    //   ;[...children[0].children]
    //     .slice(start, end + 1)
    //     .forEach((span, index) => {
    //       span.textContent = style.text[index]
    //     })
    // }
    return _return
  }

  function numberOrString(value) {
    if (typeof value === 'number') {
      return value + 'px'
    } else {
      return value
    }
  }

  const _return = {
    addText,
    addImg,
    children,
    html: me,
    ...style,
    pStyle,
    caixa: pStyle,
    cStyle,
    filho: cStyle,
    id,
    multiStyle,
  }
  return _return
}
