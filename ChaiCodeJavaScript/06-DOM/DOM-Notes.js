
document.getElementById('title')
// Output -> {/* <h1 id=​"title" class=​"heading">​DOM Learning With Chai or Code​</h1>​ */}
document.getElementById('title').id
// 'title'
document.getElementById('title').class
// undefined
document.getElementById('title').className
// 'heading'

document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] } -> yeah ik function hai 
document.getElementById('title').getAttribute('id')
// 'title'
document.getElementById('title').getAttribute('class')
// 'heading'
document.getElementById('title').setAttribute('class','test')
// undefined -> bata hai pr class yeah attribute ki value overwrite hue hoti hai actual code mein
document.getElementById('title').setAttribute('class','test heading')
// undefined

const title = document.getElementById('title')
// undefined
title
//   <h1 id="title" class="heading">DOM Learning With Chai or Code</h1>
title.style.backgroundColor = 'orange'
// 'orange'
title.style.padding = '20px'
// '20px'
title.style.borderRadius = "15px"
// '15px'

title.textContent
'DOM Learning With Chai or Code'
title.innerHTML
'DOM Learning With Chai or Code'
title.innerText
'DOM Learning With Chai or Code'

console.log("---After Adding Span with styling display none property-------");

title.textContent
'DOM Learning With Chai or Code  Text Test' // it give only text content that present in it
title.innerHTML
'DOM Learning With Chai or Code <span style="display: none;"> Text Test </span>' // it gies all contect present in it
title.innerText
'DOM Learning With Chai or Code' // it shows only the displayed text if we want change only displayed text

document.querySelector('h1')
//  <h1 id=​"title" class=​"heading">​…​</h1>​  
document.querySelector('.heading') 
// . is used for class selection
//  <h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('#title')
// # is used for id selection
//  <h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('input[type="password"]')
// for selection of input field such as password filed

document.querySelector('ul')
//   <ul>​…​</ul>​
const myUl = document.querySelector('ul')
//   undefined
const turnGreen = myUl.querySelector('li')
// undefined
turnGreen.style.backgroundColor = 'orange'
// 'orange'
turnGreen.style.padding = '15px'
// '15px'
turnGreen.style.borderRight = '15px'
// '15px'
turnGreen.style.borderRadius = '15px'
// '15px'
turnGreen.innerHTML
// 'One'
turnGreen.innerText
// 'One'
turnGreen.innerText = "Five"
// 'Five'


document.querySelectorAll('li')
// NodeList(4) [li, li, li, li]
const myLiList = document.querySelectorAll('li')
// undefined
myLiList.style.color = 'orange'
// orange
myLiList[1].style.color = "green"
// green


const myH1 = document.querySelectorAll('h1')
// undefined
myH1.style.color = 'green'
// error
myH1[0].style.color = 'green'
//  WORKS

const myLiList = document.querySelectorAll('li')
// undefined
myLiList
// NodeList(4) [li, li, li, li]
myLiList.forEach(function (l) {
    l.style.backgroundColor = 'orange'
})
// undefined


document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const classList = document.getElementsByClassName('list-item')
// undefined
-- classList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(classList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
const myConvertedList = Array.from(classList)
// undefined
myConvertedList.forEach(function(li) {
    li.style.color = 'orange'    
})
// undefined worked