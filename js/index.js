const result = document.querySelector('.result')
const form = document.getElementById('form')
const buttonContent = document.querySelector('.button-content');
const btnEarth = document.querySelector('.btn-earth');
const inputForm = document.getElementById('input-form')
class Gravedad {
    constructor(p, a) {
        this.planeta = p;
        this.aceleracion = a;
    }
}
let gravedad = [];
gravedad.push(new Gravedad('Mercurio', 3.7));
gravedad.push(new Gravedad('Venus', 8.87));
gravedad.push(new Gravedad('Luna', 1.62));
gravedad.push(new Gravedad('Marte', 3.4));
gravedad.push(new Gravedad('Jupiter', 24.8));
gravedad.push(new Gravedad('Saturno', 10.44));
gravedad.push(new Gravedad('Urano', 8.87));
gravedad.push(new Gravedad('Neptuno', 11.15));
gravedad.push(new Gravedad('Pluton', 0.67));

addEventListener('DOMContentLoaded', () => {
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < gravedad.length; i++) {
        const btn = createButton(gravedad[i].planeta)
        fragment.appendChild(btn)
    }
    buttonContent.appendChild(fragment)
    //---------------------------------------------
    form.addEventListener('submit', e => {
        e.preventDefault();

        const Peso = form['input-form'].value;
        const submiter = e.submitter.id;
        if (Peso <= 0) {
            return result.innerHTML = "Introduce un peso valido"
        }
        result.innerHTML = `Tu peso en ${submiter} es: ${change(peso, submiter, gravedad)}Kg`;
    })
    //---------------------------------------------
    btnEarth.addEventListener('click', (e) => {
        const Peso = form['input-form'].value;

        if (Peso <= 0) {
            return result.innerHTML = "Introduce un peso valido"
        }
        result.innerHTML = `Tu peso en La Tierra es: ${Peso}Kg`;
    })
})
//---------------------------------------------
function createButton(id) {
    const btn = document.createElement('button');
    const planeta = id;
    const text = document.createTextNode(`${planeta}`);
    btn.id = planeta;
    btn.className = 'btn';
    btn.appendChild(text);
    return btn;
}
function change(p, id, listId) {
    const earth = 9.8;
    const planet = listId.filter(x => x.planeta == id);
    const planetAcc = planet[0].aceleracion;
    const change = Math.round(parseFloat((p / earth) * planetAcc));
    return change;
}