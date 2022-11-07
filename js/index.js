//--------------imports-------------------------
import change from "./chage.js"
import createButton from "./createButton.js"
//--------------herpers-------------------------
const $ = select => document.querySelector(select)
//--------------elements------------------------
const result = $('.result')
const form = $('#form')
const buttonContent = $('.button-content')
const btnEarth = $('.btn-earth')
//----------------class-------------------------
class Gravedad {
    constructor(p, a) {
        this.planeta = p
        this.aceleracion = a
    }
}
let gravedad = []
gravedad.push(new Gravedad('Mercurio', 3.7))
gravedad.push(new Gravedad('Venus', 8.87))
gravedad.push(new Gravedad('Luna', 1.62))
gravedad.push(new Gravedad('Marte', 3.4))
gravedad.push(new Gravedad('Jupiter', 24.8))
gravedad.push(new Gravedad('Saturno', 10.44))
gravedad.push(new Gravedad('Urano', 8.87))
gravedad.push(new Gravedad('Neptuno', 11.15))
gravedad.push(new Gravedad('Pluton', 0.67))

//------------------events-----------------
addEventListener('DOMContentLoaded', () => {
    let fragment = document.createDocumentFragment()
    gravedad.map(({ planeta }) => fragment.appendChild(createButton(planeta)))

    // for (let i = 0 i < gravedad.length i++) {
    //     const btn = createButton(gravedad[i].planeta)
    //     fragment.appendChild(btn)
    // }
    buttonContent.appendChild(fragment)


    form.addEventListener('submit', e => {
        e.preventDefault()
        const Peso = form['input-form'].value
        const submiter = e.submitter.id
        if (Peso <= 0) {
            return result.innerHTML = "Introduce un peso valido"
        }
        result.innerHTML = `Tu peso en ${submiter} es: ${change(Peso, submiter, gravedad)}Kg`
    })


    //---------------------------------------------
    btnEarth.addEventListener('click', () => {
        const Peso = form['input-form'].value

        if (Peso <= 0) {
            return result.innerHTML = "Introduce un peso valido"
        }
        result.innerHTML = `Tu peso en La Tierra es: ${Peso}Kg`
    })
})