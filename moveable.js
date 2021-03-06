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

let moveable2 = new Moveable(document.body, {
  // If you want to use a group, set multiple targets(type: Array<HTMLElement | SVGElement>).
  target: document.querySelector('#dois'),
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

let infos2 = {}

let frame2 = {
  translate: [0, 0],
}

moveable2
  .on('resizeStart', e => {
    e.setOrigin(['%', '%'])
    e.dragStart && e.dragStart.set(frame2.translate)
  })
  .on('resize', e => {
    const beforeTranslate = e.drag.beforeTranslate

    frame2.translate = beforeTranslate
    e.target.style.width = `${e.width}px`
    e.target.style.height = `${e.height}px`
    e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
    // console.log({
    //   transform: `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`,
    //   width: e.width,
    //   height: e.height,
    //   width: e.width,
    // })
    infos2 = {
      ...infos2,
      transform: `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`,
      width: e.width,
      height: e.height,
    }
    document.querySelector('.info2').innerHTML = JSON.stringify(infos2, null, 2)
  })
  .on('dragStart', e => {
    e.set(frame2.translate)
  })
  .on('drag', e => {
    frame2.translate = e.beforeTranslate
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`
    infos2 = {
      ...infos2,
      transform: `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`,
      width: e.width,
      height: e.height,
    }
    document.querySelector('.info2').innerHTML = JSON.stringify(infos2, null, 2)
    save()
  })

//save in local storage
let save = () => {
  localStorage.setItem('infos', JSON.stringify(infos))
  localStorage.setItem('infos2', JSON.stringify(infos2))
}

// let load = () => {
//   if (localStorage.getItem('infos')) {
//     infos = JSON.parse(localStorage.getItem('infos'))
//     infos2 = JSON.parse(localStorage.getItem('infos2'))
//     document.querySelector('.info').innerHTML = JSON.stringify(infos, null, 2)
//     document.querySelector('.info2').innerHTML = JSON.stringify(infos2, null, 2)

//     document.querySelector('#uno').style.transform = infos.transform
//     document.querySelector('#uno').style.width = `${infos.width}px`
//     document.querySelector('#uno').style.height = `${infos.height}px`

//     document.querySelector('#dois').style.transform = infos2.transform
//     document.querySelector('#dois').style.width = `${infos2.width}px`
//     document.querySelector('#dois').style.height = `${infos2.height}px`
//   }
// }
