
/* Variables para poder manipular con el DOM */
const tikk = document.querySelector('.tik')
const inst = document.querySelector('#ins')
const car = document.querySelector('.carga')
const cuerpoo = document.querySelector('main')


window.addEventListener('load', ()=>{
    cuerpoo.style.opacity='1'
})

/* Funcion reutilizable para simular carga */
function carg(url) {
/* agrega clase que simula carga */
     car.classList.add('carr')
/* Tiempo de carga*/
    setTimeout(() => {
       
        window.location.href=url
    }, 1000);
    setTimeout(() => {
        car.classList.remove('carr')
    }, 1600);
}


/* Selecionamos los btns para poder reulizar la funcion de redireccionamiento y simulacion de carga */
document.querySelectorAll('[data-url]').forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const url = btn.getAttribute('data-url')
        carg(url)
    })
})


/*https://www.tiktok.com/@accesoriosalora?_t=ZS-8vmp0cVUqYx&_r=1*/
/*https://www.instagram.com/accesoriosalora/*/