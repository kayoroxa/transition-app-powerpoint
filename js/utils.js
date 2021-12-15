function removeElements(elements) {
  elements.forEach(element => {
    element.html.style.opacity = 0
    setTimeout(() => {
      element.html.remove()
    }, 200)
  })
}

function relativeHorizontal(size) {
  if (typeof size === 'number') {
    const pageWidth = window.innerWidth
    const percent = Number(size) / 100
    return pageWidth * percent
  }
  if (typeof size === 'string') {
    const [place, until, divididoAnt] = size.split(/[\-|\/]/).map(Number)

    const size = until - place
    const dividido = Number(divididoAnt)
    const pageWidth = window.innerWidth
    const oneWidth = pageWidth / dividido
    const sizeWidth = oneWidth * (size + 1)
    const left = oneWidth * (place - 1)
    return {
      width: sizeWidth,
      left: left,
      right: 'auto',
    }
  }
}

function relativeVertical(size) {
  if (typeof size === 'number') {
    const pageHeight = window.innerHeight
    const percent = Number(size) / 100
    return pageHeight * percent
  }
  if (typeof size === 'string') {
    const [place, until, divididoAnt] = size.split(/[\-|\/]/).map(Number)
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
}

function jogar(stringPosition, options) {
  const pageHeight = window.innerHeight
  const pageWidth = window.innerWidth

  const position = options?.notScale
    ? {
        width: 0,
        height: 0,
      }
    : {
        scale: 0,
      }

  if (stringPosition.includes('top') || stringPosition.includes('up')) {
    position.left = '50vw'
    position.top = -500
  }
  if (
    stringPosition.includes('bottom') ||
    stringPosition.includes('buttom') ||
    stringPosition.includes('down')
  ) {
    position.left = '50vw'
    position.top = '150vh'
  }
  if (stringPosition.includes('left')) {
    position.top = '50vh'
    position.left = -500
  }
  if (stringPosition.includes('right')) {
    position.top = pageHeight / 2
    position.left = '150vw'
  }
  return position
}

function Flex() {
  const children = []
  let dividedByLine = []
  let pageHeight = window.innerHeight
  let pageWidth = window.innerWidth

  function updateDividedByLine() {
    dividedByLine = []
    children.forEach(child => {
      const { line } = child
      const index = line ? line - 1 : dividedByLine.length

      dividedByLine[index] = dividedByLine[index]
        ? [...dividedByLine[index], child]
        : [child]
    })
  }
  const deleteEmptyLines = () => {} //(dividedByLine = dividedByLine.filter(Boolean))

  function getLeftAttributeLine(lineWithChildren) {
    const widthChildrenInLine = lineWithChildren.map(child => child.width)

    const totalWidth = widthChildrenInLine.reduce((acc, curr) => acc + curr, 0)

    const firstLeft = (pageWidth - totalWidth) / 2
    // get left of each child for center of page

    const leftChildrenInLine = lineWithChildren.map((line, index) => {
      const left =
        firstLeft +
        widthChildrenInLine
          .slice(0, index)
          .reduce((total, left) => total + left, 0)
      return left
    })
    return leftChildrenInLine
  }

  function getTopAttributeLine() {
    //get max height of each line
    const heightChildrenByLine = dividedByLine.map(line => {
      const maxHeight = Math.max(...line.map(child => child.height))
      return maxHeight
    })

    // get top of each line in center of page
    // somar all height of lines
    const totalHeight = heightChildrenByLine.reduce(
      (total, height) => total + height,
      0
    )
    const firstLeft = (pageHeight - totalHeight) / 2
    const topChildrenByLine = dividedByLine.map((line, index) => {
      const top =
        firstLeft +
        heightChildrenByLine
          .slice(0, index)
          .reduce((total, height) => total + height, 0)
      return top
    })

    return {
      // maxHeights: heightChildrenByLine,
      data: topChildrenByLine,
    }
  }

  const fixPercentage = number => {
    const percentage = number / 10
    return percentage
  }

  function addChild(propriedades, slideElement) {
    if (!propriedades) {
      //remove child with id
      const index = children.findIndex(child => child.id === slideElement.id)
      children.splice(index, 1)
      updateDividedByLine()
      updateChildren()
      return
    }
    const { w = null, h = null, line } = propriedades
    //check if already exist
    let exist = children.find(child => child.slideElement === slideElement)
    if (exist) {
      exist.wPercentage = fixPercentage(w)
      exist.hPercentage = fixPercentage(h)
      exist.height = fixPercentage(h) * pageHeight
      exist.width = fixPercentage(w) * pageWidth
      exist.line = line
    } else {
      children.push({
        id: slideElement.id,
        wPercentage: fixPercentage(w),
        hPercentage: fixPercentage(h),
        height: fixPercentage(h) * pageHeight,
        width: fixPercentage(w) * pageWidth,
        line,
        slideElement,
      })
    }
    // updateDividedByLine()
    // deleteEmptyLines()
    // updateChildren()
    updateAll()
    console.log({ children, dividedByLine })
  }

  function updateWidthAndHeight() {
    pageHeight = window.innerHeight
    pageWidth = window.innerWidth
    children.forEach(child => {
      child.height = child.hPercentage * pageHeight
      child.width = child.wPercentage * pageWidth
    })
  }

  const deleteChildNotInHtml = () => {
    const childrenInHtml = Array.from(
      document.querySelectorAll('.elementAninhado')
    )
    const childrenInHtmlId = childrenInHtml.map(child => child.id)
    const childrenNotInHtml = children.filter(
      child => !childrenInHtmlId.includes(child.id)
    )
    childrenNotInHtml.forEach(child => {
      const index = children.findIndex(child => child.id === child.id)
      children.splice(index, 1)
    })
  }

  function updateAll() {
    deleteChildNotInHtml()
    updateDividedByLine()
    updateChildren()
  }

  function updateChildren() {
    updateWidthAndHeight()
    //put left
    dividedByLine.forEach(line => {
      const leftChildrenInLine = getLeftAttributeLine(line)
      line.forEach((child, index) => {
        child.left = leftChildrenInLine[index]
        child.slideElement.html.style.left = child.left + 'px'
        child.slideElement.html.style.width = child.width + 'px'
      })
    })
    //put top
    const { data: topChildrenByLine } = getTopAttributeLine()
    dividedByLine.forEach((line, index) => {
      line.forEach(child => {
        child.top = topChildrenByLine[index]
        child.slideElement.html.style.top = child.top + 'px'
        child.slideElement.html.style.height = child.height + 'px'
      })
    })

    // console.log(
    //   dividedByLine.map(line =>
    //     line.map(
    //       child => JSON.stringify({ left: child.left, top: child.top }) + '\n'
    //     )
    //   )
    // )
  }

  function reload() {
    updateChildren()
  }

  return {
    addChild,
    getTopAttributeLine,
    updateChildren,
    reload,
    updateAll,
  }
}

const flex = Flex()

obs('scene').addEventListener('reset', () => {
  flex.updateAll()
})

// me.addChild({ w: 1, h: 1 }, { souElement: true, id: '1' })
// me.addChild({ w: 1, h: 1, line: 2 }, { souElement: true, id: '2' })
// me.addChild({ w: 1, h: 1, line: 2 }, { souElement: true, id: '3' })
// me.addChild({ w: 1, h: 2, line: 2 }, { souElement: true, id: '4' })
// me.addChild({ w: 1, h: 1, line: 2 }, { souElement: true, id: '4' })
// me.addChild({ w: 1, h: 1 }, { souElement: true, id: '5' })
// me.addChild({ w: 1, h: 1 }, { souElement: true, id: '5' })
// me.updateChildren()
