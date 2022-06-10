export function createButton(id) {
    const btn = document.createElement('button');
    const planeta = id;
    const text = document.createTextNode(`${planeta}`);
    btn.id = planeta;
    btn.className = 'btn';
    btn.appendChild(text);
    return btn;
}
export function change(p, id, listId) {
    const earth = 9.8;
    const planet = listId.filter(x => x.planeta == id);
    const planetAcc = planet[0].aceleracion;
    const change = Math.round(parseFloat((p / earth) * planetAcc));
    return change;
}