observerScene.addEventListener('erro-not-return', () => {
  document.body.innerHTML = `
    Você esqueceu de retornar um array no timeLine do template.. <br>
    Correto:<br>
    timeLine: el => {<br>
      >>>>> return []<br>
      },<br>
    `

  throw new Error('Você esqueceu de retornar um array no timeLine do template')
})
observerScene.addEventListener('erro-not-function', () => {
  document.body.innerHTML = `
  O array no timeline do template precisa ser um *array de funções*. <br>
    Correto:<br>
    timeLine: el => {<br>
      >>>>> return [ () => {} ]<br>
      },<br>
    `
  throw new Error(
    'O array no timeline do template precisa ser um array de funções'
  )
})
