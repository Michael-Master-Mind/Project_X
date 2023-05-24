const form = document.getElementById('LoginForm')
const email = document.getElementById('text-input-EmailName')
const password = document.getElementById('text-input-Password')

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
    
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim() 
 
    //Check if email is empty 
    if(emailValue === ''){
        setError(email, 'Email is required')
        return false
    }
    else{
        setSuccess(email)
    }

    //Checks if password is empty and is it has atleast 8 characters
    if(passwordValue === ''){
        setError(password, 'Password is required')
        return false
    }
    else if(passwordValue.length < 8){
        setError(password, 'Password must be atleast 8 character')
        return false
    }
    else{
        setSuccess(password)
        return true
    }


}