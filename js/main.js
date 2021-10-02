const pantalla_codominios = document.querySelector('#pantalla_condominios')
const tpl_paseo_henequen = document.querySelector('#tpl_paseo_henequen')
const tpl_jardines_hacienda = document.querySelector('#tpl_jardines_hacienda')
const tpl_ciudad_deportiva = document.querySelector('#tpl_ciudad_deportiva')

function cargarCondominio(el, id_condominio){
    let condominio_actual
    switch (id_condominio) {
        case 1:
            condominio_actual = tpl_paseo_henequen
            break
        case 2:
            condominio_actual = tpl_jardines_hacienda
            break
        case 3:
            condominio_actual = tpl_ciudad_deportiva
            break
        default:
            condominio_actual = tpl_paseo_henequen
            break;
    }

    const elemento_padre = el.parentElement
    const sibling_elements = elemento_padre.children
    for(element of sibling_elements){
        element.classList.remove('bg-info')
    }
    el.classList.add('bg-info')

    const clon = condominio_actual.content.cloneNode(true)
    pantalla_codominios.innerHTML = ""
    pantalla_codominios.appendChild(clon)
}