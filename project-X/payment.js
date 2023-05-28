const form = document.getElementById('paymentForm')
const fullName = document.getElementById('text-input-fullName')
const email = document.getElementById('text-input-EmailName')
const cardNumber = document.getElementById('text-input-cardNumber')
const date = document.getElementById('text-input-Date')
const cardType = document.getElementById('cardtype')
const chosenPlan = document.getElementById('text-input-chosenPlan')

form.addEventListener('submit',e=>{
    validateInputs();
    if(validateInputs() === false){
        e.preventDefault();
    }
})

const setError = (element,message) => {
    const parent = element.parentElement
    const inputControl = parent.parentElement
    const errorDisplay = inputControl.lastElementChild

    parent.style.border='1px solid red'
    errorDisplay.innerHTML=message
    
}
const setSuccess = (element) => {
    const parent = element.parentElement
    const inputControl = parent.parentElement
    const errorDisplay = inputControl.lastElementChild

    parent.style.border='1px solid green'
    errorDisplay.innerHTML=""
}

const validateInputs=()=>{
    const fullNameValue = fullName.value.trim()
    const emailValue = email.value.trim()
    const cardNumberValue = cardNumber.value.trim() 
    const dateValue = date.value
    const cardTypeValue = cardType.value.trim()
    const chosenPlanValue = chosenPlan.value.trim()
    
    
    //Check if fullName is empty
    if(fullNameValue === ''){
        setError(fullName,'FullName is required')
        return false
    }
    else{
        setSuccess(fullName)
    }
    //Check if email is empty 
    if(emailValue === ''){
        setError(email, 'Email is required')
        return false
    }
    else{
        setSuccess(email)
    }

    //Checks if card Number is empty 
    if(cardNumberValue === ''){
        setError(cardNumber, 'Card Number is required')
        return false
    }
    else if (containsOnlyNumbers(cardNumberValue) === false){
        setError(cardNumber, 'Card Number must contain only numbers')
        return false
    }
    else{
        setSuccess(cardNumber)
    }
    //Check if the date is selected
    if(dateValue === ''){
        setError(date, 'Select a Date')
        return false
    }
    else{
        setSuccess(date)
    }
    //Checks if card type is chosen
    if(cardTypeValue === ''){
        setError(cardType, 'Select a card type')
        return false
    }
    else{
        setSuccess(cardType)
    }
    //Checks if payment plan is chosen
    if(chosenPlanValue === ''){
        setError(chosenPlan, 'Select a payment plan')
        return false
    }
    else{
        setSuccess(chosenPlan)
        return true
    }

}

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }