const pantalla_codominios = document.querySelector('#pantalla_condominios')
const pabellonesTematicos = document.querySelector('#pabellonesTematico')


function cambiarCondominio(boton_condominio, condominio){
    const descripcion = document.querySelector('#descripcionCondominio')
    const listaCaracteristicas = document.querySelector('#listaCaracteristicas')
    const siblings = boton_condominio.parentElement.children

    for(boton of siblings){
        const textoBoton = boton.children[0]
        textoBoton.classList.remove('txt_verde_vivo')
        textoBoton.classList.add('txt_gris_claro')
        boton.classList.remove('bg_gris_claro')
        boton.classList.add('bg_gris_uscuro')
    }

    const textoBoton = boton_condominio.children[0]
    textoBoton.classList.remove('txt_gris_claro')
    textoBoton.classList.add('txt_verde_vivo')
    boton_condominio.classList.remove('bg_gris_uscuro')
    boton_condominio.classList.add('bg_gris_claro')

    let tplCondominio
    switch (condominio) {
        case 1:
            pabellonesTematicos.classList.add('d-none')
            descripcion.textContent = 'Esta amenidad fue la primera del proyecto y es una de las más solicitadas por nuestros clientes'
            tplCondominio = document.querySelector('#tplCarPH')
            break;
        case 2:
            pabellonesTematicos.classList.add('d-none')
            descripcion.textContent = 'Cuenta con la ubicación más exclusiva por encontrarse a pie de la casa club, una de las principales amenidades del desarrollo'
            tplCondominio = document.querySelector('#tplCarJH')
            break;
        case 3:
            pabellonesTematicos.classList.remove('d-none')
            descripcion.textContent = 'Uno de los condominios más complejos y exclusivos al contar con pabellones temáticos y salones...'
            tplCondominio = document.querySelector('#tplCarCD')
            break;
        default:
            //alert('no')
            break;
    }
    
    listaCaracteristicas.innerHTML = ''
    listaCaracteristicas.append(tplCondominio.content.cloneNode(true))
}

function cargarEfectosAnimacion(){
    const elements = document.querySelectorAll('.invisible')
    observer = new IntersectionObserver((entries, observer) => {
        //console.log(entries)
        entries.forEach( entry => {
            if (entry.isIntersecting) {
                const tipoAnimacion = entry.target.dataset.animacion
                entry.target.classList.remove('invisible')
                let animacion
                switch(tipoAnimacion){
                    case 'left':
                        animacion = 'animate__fadeInLeft'
                        break
                    case 'rigth':
                        animacion = 'animate__fadeInRight'
                        break
                    case 'down':
                        animacion = 'animate__fadeInUp'
                        break
                    case 'bounce':
                        animacion = 'animate__rubberBand'
                        break
                    default:
                        animacion = 'animate__fadeInUp'
                        break
                }
                entry.target.classList.add('animate__animated', animacion)
                observer.unobserve(entry.target);
            } 
        })
    }, {threshold: 1.0})

    elements.forEach( element => observer.observe(element))
}