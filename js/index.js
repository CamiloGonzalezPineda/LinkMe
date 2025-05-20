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


    //contt.classList.add('butterfly')
    /* agrega un contador con 'for' que simula carga hasta el 100% */

    /*    for (let cont = 0; cont <=100; cont++) {
        // un contador para la velocidad de carga
             setTimeout(() => {
                 const contt = document.querySelector('.conta')
                 contt.textContent = cont + '%'
                 
             }, cont * 10);
       
         }*/
    //Tiempo de carga 
    setTimeout(() => {
        window.location.href = url
    }, 2000);


    setTimeout(() => {
        car.classList.remove('carr')
    }, 2600);
}




/* Selecionamos los btns para poder reulizar la funcion de redireccionamiento y simulacion de carga */
document.querySelectorAll('[data-url]').forEach(btn => {
    btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url')
        carg(url)
    })
})


/*https://www.tiktok.com/@accesoriosalora?_t=ZS-8vmp0cVUqYx&_r=1*/
/*https://www.instagram.com/accesoriosalora/*/

// selecionamos los elementos para poder manipularlos con el DOM 

const btnCata = document.getElementById('btnCatalogo')
const closs = document.getElementById('closedd')
const modalC = document.getElementById('modal')
const modalC2 = document.querySelector('.contenido-modal')

btnCata.addEventListener('click', () => {
    // mostrar el modal padre 
    modalC.style.display = 'flex'

    //recetear los efectos de la transicion
    modalC2.style.transition = 'none'
    modalC2.style.transform = 'translateY(-100px)'
    modalC2.style.opacity = '0'

    // forzar la transition
    void modalC2.offsetWidth;

    // aplicar los efectos de la transicion de entrada
    modalC2.style.opacity = '1'
    modalC2.style.transform = 'translateY(0px)'
    modalC2.style.transition = 'all 1s ease-in-out'
})


// Cerra el modal del catalogo
closs.addEventListener('click', () => {
    // Animacion de salida
    modalC2.style.transform = 'translateY(700px)'
    modalC2.style.opacity = '0' // Animacion de salid
    modalC2.style.transition = 'all 1s ease-in-out'
    setTimeout(() => {
        modalC.style.display = 'none'  // Ocultar el modal despues de un segundo, una vez se complete el desplazamiento
    }, 1000);


})
// cerra el modl cuando el usuario de click fuera de el
window.addEventListener('click', (e) => {

    if (e.target === modalC) {
        // Animaciones de salida 
        modalC2.style.opacity = '0'
        modalC.style.transition = 'all 1s ease-in-out'
        modalC2.style.transform = 'translateY(700px)'
        setTimeout(() => {
            modalC.style.display = 'none'//  Ocultar el modal despues de un segundo, una vez se complete el desplazamiento
        }, 1000);
    }
})