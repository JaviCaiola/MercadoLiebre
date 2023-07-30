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

const zoomImages = document.querySelectorAll('.zoomeable');

zoomImages.forEach((img) => {
  const container = img.parentElement;
  const zoomEffect = document.createElement('div');
  zoomEffect.classList.add('zoom-effect');
  container.appendChild(zoomEffect);

  container.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = container;
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    zoomEffect.style.backgroundImage = `url(${img.src})`;
    zoomEffect.style.backgroundPosition = `${x}% ${y}%`;
    zoomEffect.style.opacity = '1';
  });

  container.addEventListener('mouseleave', () => {
    zoomEffect.style.opacity = '0';
  });
});