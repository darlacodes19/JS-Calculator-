// let numbersButton = document.querySelectorAll('.numbers-button')
// const operationsButton = document.querySelectorAll('.operations-button')
// const equalsButton = document.querySelector('.equalButton')
// const clearButton = document.querySelector('.clear-button')


//QUESTIONS:
//What does the data attribute do? Why is it helpful?
//select element you want to manipulate 


// 1- Select all numbers button using the data attribute you created 
   //data attributes must be in brackets

   let numbersButton = document.querySelectorAll('[data-number]')

//2- Select all of the operation buttons

let operationsButton = document.querySelectorAll('[data-operation')

//3- Select the rest of the buttons 
   //if only one, remember to only choose querySelector 

   let equalButton = document.querySelector('[data-equals')
   let allClearButton = document.querySelector('[data-all-clear')


//4- Select data dispaly 

let displayView = document.getElementById('display-view')





//Variables





//Functions

function add() {
   
}

function mulitply() {
   
}

function subtract() {
   
}

function divide() {
   
}



//When you have more than one collection of elements, you have to loop thorugh the array of elements 
numbersButton.forEach(e => {
    e.addEventListener('click', function(e) {
       displayView.textContent += e.target.value
       console.log(displayView.textContent)
    });
  });

operationsButton.map( e => {
   e.addEventListener('Click' , function(e) {
      console.log(e.target.value)
   })
})



