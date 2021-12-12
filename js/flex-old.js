function Flex() {
  const children = []

  function updateHorizontal(line) {
    const pageWidth = window.innerWidth
    /// add with in child not html
    const childrenHorizontal = children.filter(
      child => child.wPercent && child.line === line
    )

    childrenHorizontal.forEach(child => {
      child.width = pageWidth * (child.wPercent / 10)
    })

    const totalWidth = childrenHorizontal.reduce((acc, child) => {
      return acc + child.width
    }, 0)

    // calc left e put left
    childrenHorizontal.forEach((child, index) => {
      const lastWidth = childrenHorizontal[index - 1]
        ? childrenHorizontal.slice(0, index).reduce((acc, child) => {
            return acc + child.width
          }, 0)
        : 0

      const cinco = (pageWidth - totalWidth) / 2
      child.left = cinco + lastWidth //todos os ultimos width juntos
      child.slideElement.html.style.width = child.width + 'px'
      child.slideElement.html.style.left = child.left + 'px'
    })
  }

  function updateVertical(allLines) {
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

    ///cada child de uma line diferente

    childrenVertical.forEach((child, index) => {
      const countVerticalItems = allLines.length
      const allChildInLine = allLines.map(line =>
        children.filter(child => child.line === line)
      )

      const lastHeight = allChildInLine[index - 1]

      // const lastWidth = childrenVertical[index - 1]
      //   ? childrenVertical.slice(0, index).reduce((acc, child) => {
      //       return acc + child.height
      //     }, 0)
      //   : 0

      // const cinco = (pageHeight - totalHeight) / 2
      // child.top = cinco //+ lastHeight

      child.top = (pageHeight - child.height) / 2

      child.slideElement.html.style.height = child.height + 'px'
      child.slideElement.html.style.top = child.top + 'px'
    })
  }

  function updateChildren() {
    const allLines = children.reduce((acc, child) => {
      //unique lines
      if (!acc.includes(child.line)) {
        acc.push(child.line)
      }
      return acc
    }, [])
    allLines.forEach(line => {
      updateHorizontal(line)
    })
    updateVertical(allLines)
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
