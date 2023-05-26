const name=document.getElementById('name');
const surname=document.getElementById('surname');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const message=document.getElementById('message');
const submit=document.querySelector('.form')

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Clicked');
})