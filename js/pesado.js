/// fazer o pai invisivel pra conseguir manter a ideia do alinhamento
//criar ideia do obj com filhos

function Element(id, children = []) {
  // const children = children
  const me = document.createElement('div')
  me.id = id
  me.classList.add('elementAninhado')
  console.log(me.left)
  // if ((me.left === 'auto' || !me.left) && me.right === 'auto') me.left = '0px'
  // if ((me.top === 'auto' || !me.top) && me.bottom === 'auto') me.top = '0px'

  function updateChildren() {
    me.innerHTML = ''
    children.forEach(child => me.appendChild(child))
    me.id = id
  }

  function addChild(child) {
    children.push(child)
    updateChildren()
  }

  function resetChildren() {
    children = []
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
      if (start === 0) {
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

    const { start, end } = matchTextSpan(textMatch, texts)

    ;[...spans].slice(start, end + 1).forEach((span, index) => {
      span.style.color = style.color
      span.style.fontSize = numberOrString(style.fontSize)
      span.style.fontWeight = style.fontWeight
      span.style.fontStyle = style.fontStyle
      span.style.textDecoration = style.textDecoration
      span.style.textTransform = style.textTransform
      span.style.textAlign = style.textAlign
      if (style.text) {
        span.style.opacity = 0
        setTimeout(() => {
          span.textContent = style.text[index]
          span.style.opacity = 1
        }, 300)
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
    me.style.position = 'absolute'
    me.style.width = numberOrString(style.width)
    me.style.height = numberOrString(style.height)
    me.style.top = numberOrString(style.top)
    me.style.left = numberOrString(style.left)
    me.style.bottom = numberOrString(style.bottom)
    me.style.background = style.background

    // if (style.center === true) {
    //   const pageWidth = window.innerWidth
    //   // const pageHeight = window.innerHeight
    //   const elementWidth = me.offsetWidth
    //   // const elementHeight = me.offsetHeight
    //   // const top = pageHeight / 2 - elementHeight / 2
    //   const left = pageWidth / 2 - elementWidth / 2
    //   // me.style.top = top + 'px'
    //   me.style.left = left + 'px'
    //   return _return
    // }

    if (!style.bottom && style.top) me.style.bottom = 'auto'
    if (!style.top && style.bottom) me.style.top = 'auto'
    if (!style.left && style.right) me.style.left = 'auto'
    if (!style.right && style.left) me.style.right = 'auto'
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
    me.style.justifyContent = style.align
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
    resetChildren,
    multiStyle,
    flex: ({ w, h, line }) => {
      flex.addChild({ w, h, line }, _return)
      return _return
    },
  }
  return _return
}
