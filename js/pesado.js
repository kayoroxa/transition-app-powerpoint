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

  function handleAddMultiText(texts) {
    texts.forEach(text => addText(text))
    // return _return
  }

  function addText(text) {
    if (Array.isArray(text)) {
      handleAddMultiText(text)
      return _return
    }
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

  function matchTextSpan(textMatch, texts, startCaracter) {
    let start = -1
    let end = -1
    let find = 0
    let Try = 0
    while (find < textMatch.length || Try < 60) {
      Try++
      if (start < 0) {
        start = texts.indexOf(textMatch[0], Math.max(start, startCaracter, 0))
        end = start
        find++
      }
      if (find >= textMatch.length) break
      // if (start < 0) return { start: -1, end: -1 }

      newEnd = texts.indexOf(
        textMatch[find],
        Math.max(start, startCaracter, 0, end + 1)
      )
      if (newEnd < 0) return { start: -1, end: -1 }

      if (end === -1 || newEnd - end !== 1) {
        start = texts.indexOf(textMatch[0], start + 1)
        if (start < 0) return { start: -1, end: -1 }
        end = start
        find = 1
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

  function multiStyle(textMatch, style, indexChild = 1) {
    if (!textMatch) return _return
    let index = style.child ? style.child - 1 : indexChild - 1
    const spans = children[index].children
    const texts = [...spans].map(span => span.textContent)

    let startCaracter = 0

    while (startCaracter < texts.length) {
      const { start, end } = matchTextSpan(textMatch, texts, startCaracter)
      if (end < 0) break
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

      startCaracter = end + 1
    }
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
    me.style.opacity = style.opacity
    me.style.zIndex = style.zIndex
    if (style.scale !== undefined) me.style.transform = `scale(${style.scale})`

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

  function cStyleDo(style, index = 0) {
    children[index].style.width = numberOrString(style.width)
    children[index].style.height = numberOrString(style.height)
    children[index].style.top = numberOrString(style.top)
    children[index].style.left = numberOrString(style.left)
    children[index].style.fontSize = numberOrString(style.fontSize)
    children[index].style.color = style.textColor
    children[index].style.alignSelf = 'flex-' + style.align
    me.style.justifyContent = style.alignH
    children[index].style.color = style.color
    children[index].style.background = style.background
    children[index].style.textAlign = style.textAlign
    children[index].style.textDecoration = style.textDecoration
    children[index].style.textTransform = style.textTransform
    children[index].style.fontWeight = style.fontWeight
    children[index].style.fontStyle = style.fontStyle
    children[index].style.border = style.border
    children[index].style.marginTop = style.marginTop
    if (style.scale) {
      children[index].style.transform = `scale(${style.scale})`
    }
    // console.log(`scale(${style.scale})`)
    ///all style
    return _return
  }
  function handleCStyleFunc(func) {
    children.forEach((_, index) => {
      cStyleDo(func(index), index)
    })
  }

  function cStyle(style, index = 0) {
    if (typeof style === 'function') {
      handleCStyleFunc(style)
      return _return
    }
    if (children.length <= 0)
      return throwError('elementAninhado: Não tem filho')

    if (!style.child || style.child === 'all') {
      children.forEach((_, index) => {
        cStyleDo(style, index)
      })
      return _return
    }

    index = style.child ? Math.max(style.child - 1, 0, index) : index
    // children[index].style = { ...children[index].style, ...style }

    cStyleDo(style, index)
    return _return
  }

  function numberOrString(value) {
    if (typeof value === 'number') {
      return value + 'px'
    } else {
      return value
    }
  }

  const show = () => {
    me.classList.remove('left')
    me.classList.remove('right')
    me.classList.remove('up')
    me.classList.remove('down')
    me.classList.remove('bottom')
    me.classList.remove('top')
    pStyle({ scale: 1 })
    cStyle({ scale: 1 })
    return _return
  }
  const hidden = position => {
    me.classList.add(position)
    return _return
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
    hidden,
    show,
    flex: propriedades => {
      flex.addChild(propriedades, _return)
      show()
      // setTimeout(() => {}, 300)

      return _return
    },
  }
  return _return
}
