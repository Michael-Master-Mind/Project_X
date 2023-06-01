const profileName = document.getElementById('pro-name')
const butn = document.getElementById('butn')

const fullName = JSON.parse(sessionStorage.getItem("fullName"))
console.log(fullName)
console.log(fullName[0]+" "+fullName[1])


profileName.innerHTML = fullName[0] + " " +fullName[1]
profileName.style.color="orangered";
if(profileName !== null){
    butn.style.display="none"
}
// sessionStorage.setItem("fullName", JSON.stringify(fullName));
// location.href = "profile.html";
