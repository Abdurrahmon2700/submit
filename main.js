let items1 = document.querySelector ('#leftitem1')
let items2 = document.querySelector ('#leftitem2')
let items3 = document.querySelector ('#leftitem3')
let choosebox1 = document.querySelector ('#box1')
let choosebox2 = document.querySelector ('#box2')
let choosebox3 = document.querySelector ('#box3')
let span1 = document.querySelector('#span1')
let span2 = document.querySelector('#span2')
let span3 = document.querySelector('#span3')
let link1 = document.querySelector('#link1')
let link2 = document.querySelector('#link2')
let link3 = document.querySelector('#link3')
let submit1 = document.querySelector('#submit1')
let back = document.querySelector('#back')
let submitdesc = document.querySelector('#submitdesc')
let nogoback = document.querySelector('#nogoback')
let yesgoahead = document.querySelector('#yesgoahead')
let box4 = document.querySelector('#box4')

items1.addEventListener('click', (e) => {
  choosebox1.style.display ='block'
  choosebox2.style.display = 'none'
  choosebox3.style.display = 'none'
  box4.style.display = 'none'
  span2.style.background = '#FAFAFA'
  link2.style.color = '#BDBDBD'
  span3.style.background = '#FAFAFA'
  link3.style.color = '#BDBDBD'
  count = 0
})
let count = 0
items2.addEventListener('click', (e) => {
  choosebox1.style.display ='none'
  choosebox2.style.display = 'block'
  choosebox3.style.display = 'none'
  box4.style.display = 'none'
  span2.style.background = '#2875A8'
  link2.style.color = '#000'
  span3.style.background = '#FAFAFA'
  link3.style.color = '#BDBDBD'
  count = 1
})

nogoback.addEventListener('click',(e) => {
  choosebox1.style.display ='none'
  choosebox2.style.display = 'block'
  choosebox3.style.display = 'none'
  box4.style.display = 'none'
  span2.style.background = '#2875A8'
  link2.style.color = '#000'
  span3.style.background = '#FAFAFA'
  link3.style.color = '#BDBDBD'
  count ++
})

submitdesc.addEventListener('click', (e) => {
  if (count == 1) {
    choosebox1.style.display ='none'
    choosebox2.style.display = 'none'
    choosebox3.style.display = 'block'
    span3.style.background = '#2875A8'
    link3.style.color = '#000'
    count = 0
  }
})

items3.addEventListener('click', (e) => {
  if (count == 1) {
    choosebox1.style.display ='none'
    choosebox2.style.display = 'none'
    choosebox3.style.display = 'block'
    span3.style.background = '#2875A8'
    link3.style.color = '#000'
    count = 0
  }
})

submit1.addEventListener('click',(e) => {
  choosebox1.style.display ='none'
  choosebox2.style.display = 'block'
  choosebox3.style.display = 'none'
  span2.style.background = '#2875A8'
  link2.style.color = '#000'
  span3.style.background = '#FAFAFA'
  link3.style.color = '#BDBDBD'
  count ++
})

back.addEventListener('click',(e) => {
  choosebox1.style.display ='block'
  choosebox2.style.display = 'none'
  choosebox3.style.display = 'none'
  span2.style.background = '#FAFAFA'
  link2.style.color = '#BDBDBD'
  span3.style.background = '#FAFAFA'
  link3.style.color = '#BDBDBD'
})

yesgoahead.addEventListener('click', (e) => {
  choosebox3.style.display = 'none'
  box4.style.display = 'block'
})