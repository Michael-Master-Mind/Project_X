const plan_1 = document.getElementById('plan_1')
const plan_2 = document.getElementById('plan_2')
const plan_3 = document.getElementById('plan_3')

plan_1.addEventListener('click',()=>{
    var  amount = 14.99;
    sessionStorage.setItem("amount", JSON.stringify(amount));
    location.href = "payment.html";
    window.location.href = "payment.html"
})

plan_2.addEventListener('click',()=>{
    var  amount = 7.99;
    sessionStorage.setItem("amount", JSON.stringify(amount));
    location.href = "payment.html";
    window.location.href = "payment.html"
})

plan_3.addEventListener('click',()=>{
    var  amount = 82.99;
    sessionStorage.setItem("amount", JSON.stringify(amount));
    location.href = "payment.html";
    window.location.href = "payment.html"
})