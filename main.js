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
let timeHour = document.querySelector('#time-hour')
let timeMinute = document.querySelector('#time-minute')

let isClicked = 1
let operator = ""
let prevValue;
let currentValue;
let otherValue;
let answer;

// Set Time

const setTime = () => {
   let currentTime = new Date ()

   timeHour.textContent = currentTime.getHours().toString().padStart(2,0)
   timeMinute.textContent = currentTime.getMinutes().toString().padStart(2,0)

   if(timeHour.textContent > 12) {
      timeHour.textContent-=12
   }

}


setInterval(setTime, 1000)





//When you have more than one collection of elements, you have to loop thorugh the array of elements 
numbersButton.forEach(e => {
    e.addEventListener('click', function(e) {
        
       displayView.textContent += e.target.value 

      //  console.log( displayView.textContent)
    });
  });

operationsButton.forEach( e => {
   e.addEventListener('click' , function(e) {
      // displayView.textContent += e.target.value
      
      //set whats currently being displayed to the preValue variables 
      prevValue = displayView.textContent
      
      //set the operator variable to the operator that was clicked 
      operator = e.target.value

      //set the display an empty string every time you click on an operation 
      displayView.textContent = ' '
      // console.log(operator)
      
      isClicked++

      if(isClicked > 2) {
         currentValue = displayView.textContent
         answer = calculate(prevValue, operator , currentValue)
         displayView.textContent = answer
      }
      
      //if already clicked 
      //How do you keep track of the other numbers??? 
   })
})


equalButton.addEventListener('click', function(e) {
   currentValue = displayView.textContent
   // console.log(currentValue)
   // console.log(prevValue)
   
   answer = calculate(prevValue, operator , currentValue)
   // console.log(operator)
   displayView.textContent = answer
})

allClearButton.addEventListener('click', function() {
      displayView.textContent = ''
})


function calculate (prevValue, operator , currentValue) {

   prevValue = parseInt(prevValue)
   currentValue = parseInt(currentValue)

   if (operator === '+') return prevValue + currentValue
   if (operator === '*') return prevValue * currentValue
   if (operator === '/') return prevValue / currentValue
   if (operator === '-') return prevValue - currentValue
   
}






