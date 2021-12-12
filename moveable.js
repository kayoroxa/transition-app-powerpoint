let moveable = new Moveable(document.body, {
  // If you want to use a group, set multiple targets(type: Array<HTMLElement | SVGElement>).
  target: document.querySelector('#uno'),
  resizable: true,
  draggable: true,
  keepRatio: false,
  throttleResize: 0,
  renderDirections: ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'],
  edge: false,
  zoom: 1,
  origin: true,
  padding: { left: 0, top: 0, right: 0, bottom: 0 },
})
let frame = {
  translate: [0, 0],
}

let infos = {}

moveable
  .on('resizeStart', e => {
    e.setOrigin(['%', '%'])
    e.dragStart && e.dragStart.set(frame.translate)
  })
  .on('resize', e => {
    const beforeTranslate = e.drag.beforeTranslate

    frame.translate = beforeTranslate
    e.target.style.width = `${e.width}px`
    e.target.style.height = `${e.height}px`
    e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
    // console.log({
    //   transform: `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`,
    //   width: e.width,
    //   height: e.height,
    //   width: e.width,
    // })
    infos = {
      ...infos,
      transform: `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`,
      width: e.width,
      height: e.height,
    }
    document.querySelector('.info').innerHTML = JSON.stringify(infos, null, 2)
  })
  .on('dragStart', e => {
    e.set(frame.translate)
  })
  .on('drag', e => {
    frame.translate = e.beforeTranslate
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`
    infos = {
      ...infos,
      transform: `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`,
      width: e.width,
      height: e.height,
    }
    document.querySelector('.info').innerHTML = JSON.stringify(infos, null, 2)
  })

//key down
// document.addEventListener('keydown', e => {
//   console.log(e.key)
//   if (e.key === ' ') {
//     document.querySelector('.info').innerHTML = JSON.stringify(infos, null, 2)
//   }
// })
