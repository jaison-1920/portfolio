// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=500) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

//form validation
let nameError=document.getElementById('name-error')
let emailError=document.getElementById('email-error')
let submitError=document.getElementById('submit-error')

function validateName(){
let name=document.getElementById('contact-name').value;

if(name.length==0){
    nameError.innerHTML='*Name is required';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML='*Write full name';
    return false;
}
nameError.innerHTML=' ';
    return true;
    
}

function validateEmail(){
    let email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='*email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='*email invalid';
        return false;
    }
    emailError.innerHTML=' ';
    return true;
}

function validateForm(){

    if(!validateName()||!validateEmail()){
        submitError.style.display='block'
        submitError.innerHTML='*Fix the error'
        setTimeout(function(){submitError.style.display='none'},3000)
        return false;
    }

    submitError.innerHTML='Submitted'
    return true;
}