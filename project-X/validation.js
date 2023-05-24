const form = document.getElementById('SignUpForm')
const fname = document.getElementById('text-input-firstName')
const lname = document.getElementById('text-input-LastName')
const email = document.getElementById('text-input-EmailName')
const password = document.getElementById('text-input-Password')
const password2 = document.getElementById('text-input-confirmPassword')
const date = document.getElementById('text-input-Date')
const gender = document.getElementsByName('gender')

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
    const fnameValue = fname.value.trim()
    const lnameValue = lname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim() 
    const password2Value = password2.value.trim()
    const dateValue = date.value
    
    
    //Check if firstname is empty
    if(fnameValue === ''){
        setError(fname,'FirstName is required')
        return false
    }
    else{
        setSuccess(fname)
    }

    //Check if lastname is empty
    if(lnameValue === ''){
        setError(lname, 'LastName is required')
        return false
    }
    else{
        setSuccess(lname)
    }

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
    }
    //Checks if confirm password is empty and if it has the same input as password
    if(password2Value === ''){
        setError(password2, 'Confirm your password')
        return false
    }
    else if(passwordValue !== password2Value){
        setError(password2, 'Passwords do not match')
        return false
    }
    else{
        setSuccess(password2)
    }
    //Check if the date is selected
    if(dateValue === ''){
        setError(date, 'Select a Date')
        return false
    }
    else{
        setSuccess(date)
        return true
        
    }

}