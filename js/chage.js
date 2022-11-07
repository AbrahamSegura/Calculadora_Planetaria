export default function change(p, id, listId) {
    const earth = 9.8
    const planet = listId.filter(x => x.planeta === id)
    const planetAcc = planet[0].aceleracion
    return parseFloat((p / earth) * planetAcc)
}