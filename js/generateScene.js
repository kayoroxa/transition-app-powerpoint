function generateCena(templates) {
  let sceneIndex = -1
  let elements = []

  function createScene(sceneIndex) {
    debugger
    elements = templates[sceneIndex].elements
    createElements(elements)

    timeLine(l => {
      const timeLineResult = templates[sceneIndex].timeLine(l)
      if (!timeLineResult) {
        return observerScene.notificar('erro-not-return')
      }
      return [
        //
        ...templates[sceneIndex].timeLine(l),
        () => nextScene(),
      ]
    }, elements)
  }
  function resetScene() {
    createElements([])
    observerScene.notificar('reset', sceneIndex)
  }

  function hiddenAllElements(mode) {
    if (mode === 'opacity') {
      elements.forEach(element => {
        element.html.style.opacity = 0
      })
    } else {
      elements.forEach(element => {
        element.hidden(mode)
      })
    }
  }

  function nextScene() {
    sceneIndex++
    if (sceneIndex < templates.length) {
      hiddenAllElements('opacity')
      setTimeout(() => {
        resetScene()
        createScene(sceneIndex)
      }, 350)
    }
  }

  nextScene()
}

const observerScene = ObserverScene()

function ObserverScene() {
  const esperando = []

  function addEventListener(evento, func) {
    esperando.push({ evento, func })
  }
  function notificar(evento, params) {
    esperando.forEach(e => {
      if (e.evento === evento) {
        e.func(params)
      }
    })
  }
  return {
    addEventListener,
    on: addEventListener,
    notificar,
  }
}
