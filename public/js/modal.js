let openmodal = document.querySelector('.openmod');
let openmod = document.querySelector('.openmodal');
let modal = document.querySelector('.modal-session');
let cerrarmodal = document.querySelector('.close-modal');

openmod.addEventListener('click', ()=>{
    modal.classList.toggle('activemod');
})
openmodal.addEventListener('click', () => {
    modal.classList.toggle('activemod');
})
cerrarmodal.addEventListener('click', ()=>{
    modal.classList.toggle('activemod');
})