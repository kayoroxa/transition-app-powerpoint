function relativeHorizontal(stringSize) {
  const [place, until, divididoAnt] = stringSize.split(/[\-|\/]/).map(Number)

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
  const deleteEmptyLines = () => (dividedByLine = dividedByLine.filter(Boolean))

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

  function addChild({ w = null, h = null, line }, slideElement) {
    console.log({ w, h, line, id: slideElement.id })
    //check if already exist
    let exist = children.find(child => child.slideElement === slideElement)
    if (exist) {
      debugger
      exist.wPercentage = fixPercentage(w)
      exist.hPercentage = fixPercentage(h)
      exist.height = fixPercentage(h) * pageHeight
      exist.width = fixPercentage(w) * pageWidth
      exist.line = line
      console.log('exist', exist)
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
      console.log(children.slice(-1))
    }
    updateDividedByLine()
    deleteEmptyLines()
    updateChildren()
  }

  function updateChildren() {
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

    console.log(
      dividedByLine.map(line =>
        line.map(
          child => JSON.stringify({ left: child.left, top: child.top }) + '\n'
        )
      )
    )
  }
  console.log({ pageHeight, pageWidth })

  return {
    addChild,
    getTopAttributeLine,
    updateChildren,
  }
}

const flex = Flex()
// me.addChild({ w: 1, h: 1 }, { souElement: true, id: '1' })
// me.addChild({ w: 1, h: 1, line: 2 }, { souElement: true, id: '2' })
// me.addChild({ w: 1, h: 1, line: 2 }, { souElement: true, id: '3' })
// me.addChild({ w: 1, h: 2, line: 2 }, { souElement: true, id: '4' })
// me.addChild({ w: 1, h: 1, line: 2 }, { souElement: true, id: '4' })
// me.addChild({ w: 1, h: 1 }, { souElement: true, id: '5' })
// me.addChild({ w: 1, h: 1 }, { souElement: true, id: '5' })
// me.updateChildren()
