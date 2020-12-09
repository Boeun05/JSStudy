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

function createItem(value){
    const itemRow = document.createElement('li')
    itemRow.setAttribute('class', 'item__row')

    const item = document.createElement('div')
    item.setAttribute('class', 'item')

    const itemName = document.createElement('span')
    itemName.setAttribute('class', 'item__name')
    itemName.innerHTML = value

    const itemDelete = document.createElement('button')
    itemDelete.setAttribute('class', 'item__delete')
    itemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>'

    itemDelete.addEventListener('click', () => {
        items.removeChild(itemRow)
    })

    const itemDivider = document.createElement('div')
    itemDivider.setAttribute('class', 'item__divider') 

    item.appendChild(itemName)
    item.appendChild(itemDelete)

    itemRow.appendChild(item)
    itemRow.appendChild(itemDivider)

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