// const _3Examples = _template3Examples({
//   images: [
//     'https://picsum.photos/700/700',
//     'https://picsum.photos/700/700',
//     'https://picsum.photos/700/700',
//   ],
//   exemples: [
//     ["hi i'ts (me)", 'olá eu sou (eu)'],
//     ['you gonna tell to (me)', 'você vai dizer para (mim)'],
//     ['take (me) away from this', '(me) tire disso'],
//   ],
// })

const make = _templateTeachAndExample({
  title: 'Have = Ter',
  description: 'usado pra dizer que você tem algo',
  exemple: ['olá eu sou eu', 'olá eu sou eu'],
  image: 'https://picsum.photos/700/700',
})
const make2 = _templateTeachAndExample({
  title: 'to do = Ter',
  description: 'to do que você tem algo',
  exemple: ['oto dou eu', 'olá eto do eu'],
  image: 'https://picsum.photos/700/700',
})

generateCena([make, make2])
