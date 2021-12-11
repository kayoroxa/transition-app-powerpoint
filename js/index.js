function timeLine(actions) {
  let index = 0
  document.addEventListener(
    'keydown',
    () => {
      if (index < actions.length) {
        actions[index](
          elements.reduce(
            (acc, element) => ({ ...acc, [element.id]: element }),
            {}
          )
        )
        index++
      }
    }
    // { once: true }
  )
}

function createElements(elements) {
  elements.forEach(element => {
    //put id
    // elemento.id = element.query
    // elemento.innerText = element.text
    document.body.appendChild(element.html)
  })
}

// setTimeout(() => {
//   catalogação[0].action()
//   catalogação[1].action()
// }, 500)
