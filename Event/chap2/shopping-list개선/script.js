const input = document.querySelector('.footer__input')
const addBtn = document.querySelector('.footer__button')
const items = document.querySelector('.items')

function onAdd(){
    const value = input.value
    const item = createItem(value)
    items.appendChild(item)
    item.scrollIntoView({block: 'center'})
    input.value = ''
    input.focus()
}

let id = 0 //UUID
function createItem(value){
    const itemRow = document.createElement('li')
    itemRow.setAttribute('class', 'item__row')
    itemRow.setAttribute('data-id', id)
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${value}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt"  data-id="${id}"></i>
            </button>
        </div>
        <div class="item__divider"></div>
    `
    id++
    return itemRow
}
addBtn.addEventListener('click', () => {
    if(input.value === ''){
        input.focus()
        return
    }
    onAdd()
})

input.addEventListener('keypress', e => {
    if(input.value === ''){
        input.focus()
        return
    }
    if(e.keyCode === 13){
        onAdd()
    }
})

items.addEventListener('click', event => {
    const id = event.target.dataset.id
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`)
        toBeDeleted.remove()
    }
})