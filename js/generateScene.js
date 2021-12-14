function generateCena(templates) {
  let sceneIndex = -1
  let elements = []

  function createScene(sceneIndex) {
    elements = templates[sceneIndex].elements
    createElements(elements)

    timeLine(l => {
      console.log({ l })
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

  function nextScene() {
    sceneIndex++
    if (sceneIndex < templates.length) {
      resetScene()
      createScene(sceneIndex)
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
