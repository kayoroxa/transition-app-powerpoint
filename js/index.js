function timeLine(actions, elements) {
  if (typeof actions === 'function') {
    actions = actions(
      elements.reduce((acc, element) => ({ ...acc, [element.id]: element }), {})
    )
  }
  window.localStorage.getItem('show-grid') === 'true' &&
    [...document.querySelectorAll('.elementAninhado')].map(el => {
      el.classList.add('show-grid')
    })

  let index = 0

  // start
  setTimeout(() => {
    actions[index](
      elements.reduce((acc, element) => ({ ...acc, [element.id]: element }), {})
    )
    index++
  }, 300)

  window.addEventListener('resize', () => {
    if (index === 0) return
    actions[index - 1](
      elements.reduce((acc, element) => ({ ...acc, [element.id]: element }), {})
    )
    flex.reload()
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
      } else if ((index > 0 && e.key === 'ArrowLeft') || e.key === 'a') {
        obs('scene').notificar('need-return-scene')
        setTimeout(() => {
          index = 0
          actions[index](
            elements.reduce(
              (acc, element) => ({ ...acc, [element.id]: element }),
              {}
            )
          )
          index++
        }, 3000)
      } else if (e.key === 'g') {
        ;[...document.querySelectorAll('.elementAninhado')].map(el => {
          el.classList.toggle('show-grid')
          //save in local storage the toggle
        })
        window.localStorage.setItem(
          'show-grid',
          document
            .querySelector('.elementAninhado')
            .classList.contains('show-grid')
        )
      }
    }
    // { once: true }
  )
}

function createElements(elements) {
  document.body.innerHTML = ''
  elements.forEach(element => {
    //put id
    // elemento.id = element.query
    // elemento.innerText = element.text
    document.body.appendChild(element.html)
  })
}

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0)
// }
window.onscroll = function () {
  window.scrollTo(0, 0)
}
// setTimeout(() => {
//   catalogação[0].action()
//   catalogação[1].action()
// }, 500)
