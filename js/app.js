const toggle = document.getElementById('toggler');
const prices = document.querySelectorAll('.content h1');

toggle.addEventListener('click', ()=>{
    toggle.checked  ? prices[0].innerHTML = '$199.99' :  prices[0].innerHTML = '$19.99';  
    toggle.checked  ? prices[1].innerHTML = '$249.99' :  prices[1].innerHTML = '$24.99';  
    toggle.checked  ? prices[2].innerHTML = '$399.99' :  prices[2].innerHTML = '$39.99';  
})






