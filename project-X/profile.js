const fullName = JSON.parse(sessionStorage.getItem("fullName"))
console.log(fullName)
console.log(fullName[0]+" "+fullName[1])

const form = document.getElementById('profileForm')
const fname = document.getElementById('text-input-firstName')
const lname = document.getElementById('text-input-LastName')
const email = document.getElementById('text-input-EmailName')
const password = document.getElementById('text-input-Password')
const password2 = document.getElementById('text-input-confirmPassword')
const date = document.getElementById('text-input-Date')

const proName = document.getElementById('pro_name')
proName.innerHTML=fullName[0]+" "+fullName[1]

fname.value=fullName[0]
lname.value=fullName[1]
email.value=fullName[2]
password.value=fullName[3]
date.value=fullName[4]

const tile1 = document.getElementById('plan_tile_1_')
const tile2 = document.getElementById('plan_tile_2_')

const remove1= document.getElementById('remove_1')
remove1.addEventListener('click',()=>{
    tile1.style.display='none'
})
const remove2= document.getElementById('remove_2')
remove2.addEventListener('click',()=>{
    tile2.style.display='none'
})



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
        setError(password2, 'RE-enter your old pasword or add a new one')
        return false
    }
    else  if(password2Value.length < 8){
        setError(password, 'Password must be atleast 8 character')
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
