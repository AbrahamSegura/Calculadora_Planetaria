export default function createButton(id) {
    const btn = document.createElement('button')
    const planeta = id
    const text = document.createTextNode(`${planeta}`)
    btn.id = planeta
    btn.className = 'btn'
    btn.appendChild(text)
    return btn
}
