const boton = document.querySelector(".button_slide");
const slidemenu = document.querySelector(".slide");
const botoncerrar = document.querySelector(".close")

boton.addEventListener('click', () => {
    console.log(slidemenu.classList.toggle('activo'));
    console.log('boton detectado')
})
botoncerrar.addEventListener('click', ()=>{
    slidemenu.classList.toggle('activo')
} )