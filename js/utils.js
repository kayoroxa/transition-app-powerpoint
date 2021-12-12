function relativeHorizontal(stringSize) {
  const [place, until, divididoAnt] = stringSize.split(/[\-|\/]/).map(Number)

  const size = until - place
  const dividido = Number(divididoAnt)
  const pageWidth = window.innerWidth
  const oneWidth = pageWidth / dividido
  const sizeWidth = oneWidth * (size + 1)
  const left = oneWidth * (place - 1)
  console.log({ dividido, pageWidth, oneWidth, size, place })
  return {
    width: sizeWidth,
    left: left,
    right: 'auto',
  }
}

function relativeVertical(stringSize) {
  const [place, until, divididoAnt] = stringSize.split(/[\-|\/]/).map(Number)
  const size = until - place
  const dividido = Number(divididoAnt)
  const pageHeight = window.innerHeight
  const oneHeight = pageHeight / dividido

  const sizeHeight = oneHeight * (size + 1)
  const top = oneHeight * (place - 1)
  return {
    height: sizeHeight,
    top: top,
  }
}

function Flex() {
  const children = []

  function updateHorizontal() {
    const pageWidth = window.innerWidth
    /// add with in child not html
    const childrenHorizontal = children.filter(child => child.wPercent)

    childrenHorizontal.forEach(child => {
      child.width = pageWidth * (child.wPercent / 10)
    })

    const totalWidth = childrenHorizontal.reduce((acc, child) => {
      return acc + child.width
    }, 0)

    console.log({ totalWidth, pageWidth })

    // calc left e put left
    childrenHorizontal.forEach((child, index) => {
      const lastWidth = childrenHorizontal[index - 1]
        ? childrenHorizontal.slice(0, index).reduce((acc, child) => {
            return acc + child.width
          }, 0)
        : 0

      const cinco = (pageWidth - totalWidth) / 2
      console.log({ cinco })
      child.left = cinco + lastWidth //todos os ultimos width juntos
      console.log({ left: cinco + lastWidth, index })
      child.slideElement.html.style.width = child.width + 'px'
      child.slideElement.html.style.left = child.left + 'px'
    })
  }

  function updateVertical() {
    const pageHeight = window.innerHeight
    /// add with in child not html
    // const height = pageHeight * (this.hPercent / 10)
    const childrenVertical = children.filter(child => child.hPercent)
    childrenVertical.forEach(child => {
      child.height = pageHeight * (child.hPercent / 10)
    })
    // const totalHeight = childrenVertical.reduce((acc, child) => {
    //   return acc + child.height
    // }, 0)

    childrenVertical.forEach((child, index) => {
      // const lastHeight = childrenVertical[index - 1]
      //   ? childrenVertical[index - 1].height
      //   : 0

      // const cinco = (pageHeight - totalHeight) / 2
      // child.top = cinco //+ lastHeight

      child.top = (pageHeight - child.height) / 2

      child.slideElement.html.style.height = child.height + 'px'
      child.slideElement.html.style.top = child.top + 'px'
    })
  }

  function updateChildren() {
    updateHorizontal()
    updateVertical()
  }

  function addChild({ w = null, h = null, line = 1 }, slideElement) {
    const findChild = children.find(child => child.id === slideElement.id)
    if (findChild) {
      if (w) findChild.wPercent = w
      if (h) findChild.hPercent = h
      if (line) findChild.line = line
    } else {
      children.push({
        id: slideElement.id,
        wPercent: w,
        hPercent: h,
        line,
        slideElement,
      })
    }

    updateChildren()

    return _return
  }
  const _return = {
    addChild,
  }
  return _return
}

const flex = Flex()
