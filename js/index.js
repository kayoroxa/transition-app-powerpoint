function timeLine(actions) {
  if (typeof actions === 'function') {
    actions = actions(
      elements.reduce((acc, element) => ({ ...acc, [element.id]: element }), {})
    )
  }
  let index = 0

  window.addEventListener('resize', () => {
    if (index === 0) return
    actions[index - 1](
      elements.reduce((acc, element) => ({ ...acc, [element.id]: element }), {})
    )
  })
  document.addEventListener(
    'keydown',
    e => {
      if (index < actions.length && (e.key === 'ArrowRight' || e.key === 'd')) {
        actions[index](
          elements.reduce(
            (acc, element) => ({ ...acc, [element.id]: element }),
            {}
          )
        )
        index++
      } else if (index > 0 && e.key === 'ArrowLeft') {
        index--
        actions[index](
          elements.reduce(
            (acc, element) => ({ ...acc, [element.id]: element }),
            {}
          )
        )
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
