# Project Related To DOM

## Project Link
[Click Here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

# Solution Code 

## Project 1 - Color Switcher
```javascipt

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button){
  // console.log(button);
  // Event Listerner is a fucntion in which it records browers activities such as MouseClick, Hower Etc
  button.addEventListener('click',function(e){
    console.log(e);// it will hold the mouse actions -> PointerEvent{isTrusted: true}
console.log(e.target); // it will the object properties of button such as id class etc
   // Output 
     // HTMLSpanElement{attributes: {…}, innerHTML: "", nodeType: 1, tagName: "span"}
     // attributes: Object
     // class: "button"
     // id: "grey"
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```
# Solution Code With Assignement

## Project 2 - BMI Calculator

```javascript
const form = document.querySelector('form');
// This usecase is not prefred coz this will hold value before submiting '0'
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // parseInt -> convert give value into interger
  // .value -> this is used to abstract value from id(height) from form
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid input of height ${height}`;
  }
  if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid input of weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // showing result
    if(BMI < 18.6){
      results.innerHTML = `<span> BMI Is ${BMI},
      According To BMI Your Are Under Weight</span>`
    }
    if(18.6 > BMI < 24.9){
      results.innerHTML = `<span> BMI Is ${BMI},
      According To BMI Your Are Normal Range</span>`
    }
    if(BMI > 24.9){
      results.innerHTML = `<span> BMI Is ${BMI},
      According To BMI Your Are Overweight </span>`
    }
  }
});

```