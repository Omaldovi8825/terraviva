const infoCondominios = {
    paseoHenequen: {
        descripcion: 'Esta amenidad fue la primera del proyecto y es una de las más solicitadas por nuestros clientes',
        caracteristicas: [
            'Calles Pavimentadas a cada lote',
            'Acometida de luz a cada lote',
            'Energía eléctrica de media tensión que atraviesa el desarrollo',
            'Drenaje pluvial'
        ],
        fechasEntrega: [
            'Calles de asfalto internas (2026-2027)',
            'Energía eléctrica a pie de lote (2026-2027)'
        ],
        fotos: [
            'https://i.ibb.co/NxKKZPS/henequen1.jpg',
            'https://i.ibb.co/grFGVLX/henequen2.jpg'
        ]
    },
    jardinesHacienda: {
        descripcion: 'Cuenta con la ubicación más exclusiva por encontrarse a pie de la casa club, una de las principales amenidades del desarrollo',
        caracteristicas: [
            '686 lotes',
            'Calles pavimentadas a cada lote',
            'Acometida de luz a cada lote',
            'energía eléctrica de media tensión que atraviesa el desarrollo',
            'Drenaje pluvial',
        ],
        fechasEntrega: [
            'Calles de asfalto internas (2026-2027)',
            'Energía eléctrica a pie de lote (2026-2027)'
        ],
        fotos: [
            'https://i.ibb.co/D8Jzj50/hacienda1.jpg',
            'https://i.ibb.co/SQH3yyD/hacienda2.jpg'
        ]
    },
    ciudadDeportiva: {
        descripcion: 'Uno de los condominios más complejos y exclusivos al contar con pabellones temáticos y salones...',
        caracteristicas: [
            'Calle blanca a cada lote',
            'Mantenimiento perpetuo de calles blancas',
            'Energía eléctrica de media tensión que atraviesa el desarrollo',
            'Ubicación privilegiada por encontrarse a pie del club deportivo',
        ],
        pabellonesTematicos: [
            'Pet Friendy',
            'Ajardinado',
            'Fitness',
            'Meditación',
            'Polifacético'
        ],
        fechasEntrega: [
            'Calle central (2026)',
            'Calle blanca a pie de cada lote (2026)',
            'Energía eléctrica de media tensión (2027)'
        ],
        fotos: [
            'https://i.ibb.co/vBYTWrn/cd1.jpg',
            'https://i.ibb.co/kcw6zpM/cd2.jpg'
        ]
    },
}

function activarBotonCondominio(boton){
    const botonesCondomioContainer = document.querySelector('#condominios_botones_container')
    const fotosBotones = botonesCondomioContainer.querySelectorAll('img')
    const fotoBoton = boton.querySelector('img')
    fotosBotones.forEach( foto => {
       foto.classList.add('gris')   
    })
    fotoBoton.classList.remove('gris')

    const nombreCondominio = boton.dataset.condominio
    llenarInfoCondominiosPantalla(nombreCondominio)
}

function llenarInfoCondominiosPantalla(condominio){
    const condominioPulsado = infoCondominios[condominio]
    const {descripcion, caracteristicas, fechasEntrega, fotos, pabellonesTematicos } = condominioPulsado
    
    //llenar descricpion
    const p_descripcion = document.querySelector('#descripcionCondominio')
    p_descripcion.textContent = descripcion
    
    //llenar caracteristicas
    const ul_caracteristicas = document.querySelector('#caracteristicasCondominio')
    ul_caracteristicas.innerHTML = ''
    const caracteristicasaAgregar = []
    caracteristicas.forEach( caracteristica => {
        const li_caracteristica = document.createElement('li')
        li_caracteristica.textContent = caracteristica
        caracteristicasaAgregar.push(li_caracteristica)
    })
    ul_caracteristicas.append(...caracteristicasaAgregar)

    //llenar pabellones tematicos en caso de ciudad deportiva
    const pabellones = document.querySelector('#pabellonesTematicos')
    if(pabellonesTematicos){
        pabellones.classList.remove('oculto')
    } else {
        pabellones.classList.add('oculto')
    }

    //llenar fechas de entrega
    const ul_fechasEntrega = document.querySelector('#fechasEntrega')
    ul_fechasEntrega.innerHTML = ''
    const fechasEntregaaAgregar = []
    fechasEntrega.forEach( fechaEntrega => {
        const li_fechaEntrega = document.createElement('li')
        li_fechaEntrega.textContent = fechaEntrega
        fechasEntregaaAgregar.push(li_fechaEntrega)
    })
    ul_fechasEntrega.append(...fechasEntregaaAgregar)

    //llenar las fotos
    const div_fotosCondominio = document.querySelector('#fotosCondominios')
    div_fotosCondominio.innerHTML = ''
    const fotosCondominio = []
    fotos.forEach( foto => {
        const img_foto = document.createElement('img')
        img_foto.src = foto
        img_foto.classList.add('fotoCondominio')
        fotosCondominio.push(img_foto)
    })
    div_fotosCondominio.append(...fotosCondominio)
}

function activarBotonCondominio2(boton){
    const botonesCondomioContainer = document.querySelector('#condominios_botones_container2')
    const botones = botonesCondomioContainer.querySelectorAll('.boton_condominio2')
    botones.forEach( foto => {
       foto.style.backgroundColor = 'white'   
    })
    boton.style.backgroundColor = 'blue'

    const nombreCondominio = boton.dataset.condominio
    llenarInfoCondominiosPantalla2(nombreCondominio)
}

function llenarInfoCondominiosPantalla2(condominio){
    const condominioPulsado = infoCondominios[condominio]
    const {descripcion, caracteristicas, fechasEntrega, fotos, pabellonesTematicos } = condominioPulsado
    
    //llenar descricpion
    const p_descripcion = document.querySelector('#descripcionCondominio2')
    p_descripcion.textContent = descripcion
    
    //llenar caracteristicas
    const ul_caracteristicas = document.querySelector('#caracteristicasCondominio2')
    ul_caracteristicas.innerHTML = ''
    const caracteristicasaAgregar = []
    caracteristicas.forEach( caracteristica => {
        const li_caracteristica = document.createElement('li')
        li_caracteristica.textContent = caracteristica
        caracteristicasaAgregar.push(li_caracteristica)
    })
    ul_caracteristicas.append(...caracteristicasaAgregar)

    //llenar pabellones tematicos en caso de ciudad deportiva
    const pabellones = document.querySelector('#pabellonesTematicos2')
    if(pabellonesTematicos){
        pabellones.classList.remove('oculto')
    } else {
        pabellones.classList.add('oculto')
    }

    //llenar fechas de entrega
    const ul_fechasEntrega = document.querySelector('#fechasEntrega2')
    ul_fechasEntrega.innerHTML = ''
    const fechasEntregaaAgregar = []
    fechasEntrega.forEach( fechaEntrega => {
        const li_fechaEntrega = document.createElement('li')
        li_fechaEntrega.textContent = fechaEntrega
        fechasEntregaaAgregar.push(li_fechaEntrega)
    })
    ul_fechasEntrega.append(...fechasEntregaaAgregar)
}

