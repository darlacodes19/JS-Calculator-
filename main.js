// let numbersButton = document.querySelectorAll('.numbers-button')
// const operationsButton = document.querySelectorAll('.operations-button')
// const equalsButton = document.querySelector('.equalButton')
// const clearButton = document.querySelector('.clear-button')


//QUESTIONS:
//What does the data attribute do? Why is it helpful?

let numbersButton = document.querySelectorAll('[data-number]')
let operationsButton = document.querySelectorAll('[data-operation]')
let equalButton = document.querySelector('[data-equals]')
let allClearButton = document.querySelector('[data-all-clear]')
let displayView = document.getElementById('display-view')


let operator = ""



//When you have more than one collection of elements, you have to loop thorugh the array of elements 
numbersButton.forEach(e => {
    e.addEventListener('click', function(e) {
       displayView.textContent += e.target.value
       console.log(displayView.textContent)
    });
  });

operationsButton.forEach( e => {
   e.addEventListener('click' , function(e) {
      displayView.textContent += e.target.value
      operator = e.target.value
      console.log(operator)
   })
})


equalButton.addEventListener('click', function() {
   let answer = eval(displayView.textContent)
   displayView.textContent = answer
})

allClearButton.addEventListener('click', function() {
      displayView.textContent = ''
})






