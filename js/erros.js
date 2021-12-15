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
