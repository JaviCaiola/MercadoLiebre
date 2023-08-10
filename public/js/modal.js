let openmodal = document.querySelectorAll('.openmod');
let modal = document.querySelector('.modal-session');
let cerrarmodal = document.querySelector('.close-modal');

openmodal.addEventListener('click', () => {
    modal.classList.toggle('activemod');
})
cerrarmodal.addEventListener('click', ()=>{
    modal.classList.toggle('activemod');
})