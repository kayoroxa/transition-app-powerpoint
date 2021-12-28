function generateCena(templates) {
  let sceneIndex = -1
  let elements = []

  function createScene(sceneIndex) {
    elements = templates[sceneIndex].elements
    createElements(elements)

    timeLine(l => {
      const timeLineResult = templates[sceneIndex].timeLine(l)
      //check if timeline result is array of funcions
      const isFunc = timeLineResult?.every(func => typeof func === 'function')
      if (!isFunc) return obs('scene').notificar('erro-not-function')
      if (!timeLineResult) {
        return obs('scene').notificar('erro-not-return')
      }
      return [
        //
        ...timeLineResult,
        () => nextScene(),
      ]
    }, elements)
  }
  function returnScene() {
    sceneIndex--
    if (sceneIndex < 0) sceneIndex = 0
    resetScene()
    createScene(sceneIndex)
  }

  obs('scene').on('need-return-scene', returnScene)

  function resetScene() {
    createElements([])
    obs('scene').notificar('reset')
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
