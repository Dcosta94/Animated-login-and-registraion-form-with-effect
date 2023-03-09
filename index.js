const Loginform=document.querySelector('.Loginform')
const MainButton=document.querySelector('.MainButton')
const Registerform=document.querySelector('.Registerform')
const Registerbtn=document.querySelector('.Registerbtn')
MainButton.addEventListener('click',()=>{
    Loginform.classList.add('Loginform-box')
})
Registerbtn.addEventListener('click',()=>{
    Registerform.classList.add('Registerform-box')
    Loginform.classList.remove('Loginform-box')
})