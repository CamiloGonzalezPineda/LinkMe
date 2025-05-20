/* Variables para poder manipular con el DOM */
const tikk = document.querySelector('.tik')
const inst = document.querySelector('#ins')
const car = document.querySelector('.carga')
const cuerpoo = document.querySelector('main')
const contt = document.querySelector('.conta')


window.addEventListener('load', () => {
    cuerpoo.style.opacity = '1'

})

/* Funcion reutilizable para simular carga */
function carg(url) {
    /* agrega clase que simula carga */
    car.classList.add('carr')

    setTimeout(() => {
        contt.classList.add('butterfly')
    }, 100);

  //Tiempo de carga 
    setTimeout(() => {
          window.location.href = url 
        contt.classList.remove('butterfly')
    }, 2000);


    setTimeout(() => {
        car.classList.remove('carr')
    }, 2600);
    
}document.querySelectorAll('[data-url]').forEach(btn => {
    btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url')
        carg(url)
    })
})

    //contt.classList.add('butterfly')
    /* agrega un contador con 'for' que simula carga hasta el 100% */

    /*    for (let cont = 0; cont <=100; cont++) {
        // un contador para la velocidad de carga
             setTimeout(() => {
                 const contt = document.querySelector('.conta')
                 contt.textContent = cont + '%'
                 
             }, cont * 10);
       
         }*/
  
/* Selecionamos los btns para poder reulizar la funcion de redireccionamiento y simulacion de carga */


