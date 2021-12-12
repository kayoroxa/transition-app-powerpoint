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



# 👽 News
```javascript
// you can use that in style atributes of CAIXA

...relativeHorizontal('1-3/4')

...relativeVertical('1-2/4')

//or

Element('id').flex({w : 2, h: 2, line 1}) // width: 20%  | heigh: 20% | especifique line 1
```