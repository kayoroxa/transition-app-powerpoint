## 📁 Files:
- Use the file `catalogation.js` to write your slide

## ❓ How to use `catalogation.js`:

- There are 2 things (elements & timeLine)

```javascript
const elements = [
  //🦃 put your Element here, for exemple:
  //Element('id') ....
]
createElements(elements)

timeLine(({id, id2}) => [
  //🦘 put your timeline functions here, for exemple
  //({ id, id2 }) => {.....}
])
```

# 🦃 Element

- ### Create Element 

```javascript
Element('id') //replace for your id
    .caixa({ 
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // style atributes 
    })
```
- ### Create Element **image**
```javascript
Element('id') //replace for your id
    .caixa({ 
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // style atributes 
    })
    .addImg('url') //replace for your url
```

- ### Create Element **text**
```javascript
Element('id') //replace for your id
    .caixa({ 
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // style atributes 
    })
    .addText('text') //replace for your text
```

- ### Edit style of children ( **Text** / **Image** )
```javascript
Element('id') //replace for your id
    .caixa({ 
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // style atributes 
    })
    .addText('text') //replace for your text
    .filho({
      // style atributes 
    })
```

- ### Text MultiStyle
```javascript
Element('id') //replace for your id
    .caixa({ 
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // style atributes 
    })
    .addText('text') //replace for your text
    .multiStyle('you_match_text', {
      //style atributes who will work only in text match
    })
```

- ### Change text content
```javascript
Element('id') //replace for your id
    .caixa({ 
      width: '0px',
      height: '0px',
      top: '-500px',
      left: '50px',
      // style atributes 
    })
    .addText('text') //replace for your text
    .multiStyle('you_match_text', {
      //style atributes who will work only in text match
      text: 'newTest'
    })
```
- ### Change specific child style
```javascript
.filho({
      child: 1, // ( child: "all" ) is default
      fontSize: '70px',
    })
```
# 🦘 Timeline function
```javascript
() => {
  id.caixa({
      //style atributes
    }).filho({
      //style atributes
    })

  id2.caixa({
      //style atributes
    }).filho({
      //style atributes
    })
}
```
# ❤ Flex
```javascript
myElementId.flex({w : 2, h: 2, line 1}) // width: 20%  | heigh: 20% | especifique line 1

// use flex empty to remove flex
myElementId.flex()

//remove flex and throw to up
myElementId.caixa({...jogar('up')}).flex()
```


# 👽 News
```javascript
// you can use that in style atributes of CAIXA

...relativeHorizontal('1-3/4')

...relativeVertical('1-2/4')
```
- you can use this parameters in caixa in initial style:

```javascript
...jogar('top') // come from top
...jogar('bottom')  // come from bottom
...jogar('left') // come from left
...jogar('right') // come from right
```

# 💌 Templates

- Create template
```javascript
function _templateNew() {
  return {
    elements: [],
    timeLine: (el) => {}
  }
}
```

# 📢 Tips

- If you wanna resize the Caixa, but not text break line, use **scale**
```javascript
.caixa({
  scale: 0, // 0 to 1... 0 is like: with: 0 and heigh 0
})
.caixa({
  scale: 1, // 0 to 1... 1 is like: with: "auto", heigh: "auto" (real size)
})
.caixa({
  scale: 0.5 // 0.5 is like 50% of real value size
})
```
- if you wanna show something, use just `flex`

- Use template ( in file `catalogation.js` )
```javascript
  const x = _templateNew(params)

  const elements = [
    ...x.elements,
  ]

  timeLine(el => [
    ...x.timeLine(el),
  ])
}
```


# 🆘 SOS

![ezgif-3-d404e8067570](https://user-images.githubusercontent.com/54248474/145738392-54073c1a-301e-4d39-8839-68c2e10e4b0a.gif)
```javascript
timeLine(({ exemple_text, teach, image_1, image_2 }) => [
  () => {
    teach.flex({ w: 7, h: 3.6 })
  },
  () => {
    teach.flex({ w: 7, h: 3 })
    image_1.flex({ w: 4, h: 5.5, line: 2 })
  },
  () => {
    teach.flex({ w: 7, h: 3 })
    image_1.flex({ w: 4, h: 5.5, line: 2 })
    image_2.flex({ w: 4, h: 5.5, line: 2 })
  },
  () => {
    exemple_text.flex({ w: 4, h: 5.5, line: 2 })
    image_1
      .caixa({ opacity: 0.4, height: '50vh', top: '40vh', zIndex: '-6' })
      .flex()
  },
])
```




# 🎈 API
- Hidden  **Como você vai esconder a caixa**
  - "top" | "down" | "left" ...
  - "opacity"



# Criar rápido
```javascript

```