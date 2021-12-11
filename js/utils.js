function relativeHorizontal(stringSize) {
  const [place, until, divididoAnt] = stringSize.split(/[\-|\/]/)
  const size = until - place
  const dividido = Number(divididoAnt) + 1
  const pageWidth = window.innerWidth
  const oneWidth = pageWidth / dividido
  const sizeWidth = oneWidth * size
  const left = oneWidth * place
  return {
    width: sizeWidth,
    left: left,
  }
}

function relativeVertical(stringSize) {
  const [place, until, divididoAnt] = stringSize.split(/[\-|\/]/)
  const size = until - place
  const dividido = Number(divididoAnt) + 1
  const pageHeight = window.innerHeight
  const oneHeight = pageHeight / dividido
  const sizeHeight = oneHeight * size
  const top = oneHeight * place
  return {
    height: sizeHeight,
    top: top,
  }
}

function Flex() {
  const childrenVertical = []
  const childrenHorizontal = []

  function updateHorizontal() {
    console.log('updateHorizontal')
    const pageWidth = window.innerWidth
    /// add with in child not html
    childrenHorizontal.forEach(child => {
      child.width = pageWidth * (child.wPercent / 10)
    })

    const totalWidth = childrenHorizontal.reduce((acc, child) => {
      return acc + child.width
    }, 0)
    // calc left e put left
    childrenHorizontal.forEach((child, index) => {
      const lastWidth = childrenHorizontal[index - 1]
        ? childrenHorizontal[index - 1].width
        : 0

      const cinco = (pageWidth - totalWidth) / 2
      child.left = cinco + lastWidth

      child.slideElement.html.style.width = child.width + 'px'
      child.slideElement.html.style.left = child.left + 'px'
      console.log(child.slideElement.html.style.left)
      console.log({
        index: index,
        width: child.width,
        left: child.left,
        elementWidth: child.slideElement.html.offsetWidth,
        elementLeft: child.slideElement.html.offsetLeft,
        // lastWidth,
        // cinco,
        // pageWidth,
        // totalWidth,
      })
    })
  }

  function updateVertical() {
    console.log('updateVertical')
    const pageHeight = window.innerHeight
    /// add with in child not html
    childrenVertical.forEach(child => {
      child.height = pageHeight * (child.hPercent / 10)
    })
    console.log(childrenVertical, pageHeight)
    const totalHeight = childrenVertical.reduce((acc, child) => {
      return acc + child.height
    }, 0)

    childrenVertical.forEach((child, index) => {
      const lastHeight = childrenVertical[index - 1]
        ? childrenVertical[index - 1].height
        : 0

      const cinco = (pageHeight - totalHeight) / 2
      child.top = cinco + lastHeight
      console.log({
        index: index,
        height: child.height,
        top: child.top,
        // lastHeight,
        // cinco,
        // pageHeight,
      })
      child.slideElement.html.style.height = child.height + 'px'
      child.slideElement.html.style.top = child.top + 'px'
    })
  }

  function updateChildren() {
    updateHorizontal()
    updateVertical()
  }

  function addChild({ w = null, h = null }, slideElement) {
    if (childrenHorizontal.find(child => child.id === slideElement.id)) return
    if (w) {
      childrenHorizontal.push({
        id: slideElement.id,
        wPercent: w,
        slideElement,
        html: slideElement.html,
      })
    }
    if (h) {
      childrenVertical.push({
        id: slideElement.id,
        hPercent: w,
        slideElement,
        html: slideElement.html,
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
