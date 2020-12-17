const fetchData = function(){
    return fetch('./data/data.json')
    .then(response => {
        if(response.ok){
            console.log('SUCCESS')
        } else {
            console.log('NOT Successfull')
        }
        return response.json()
    })
    .then(json => json.items)
    .catch(error => console.log('ERROR'))
}

const displayItems = function(items){
    const container = document.querySelector('.items')
    container.innerHTML = items.map((item) => createHTMLString(item)).join('')
}

const createHTMLString = function(item){
    return `<li class='item'>
        <img src='${item.image}' alt='${item.type}' class='item__thumbnail'/>
        <span class='item__description'>${item.gender}, ${item.color} <span/>
    </li>`
}

function onButtonClick(event, items){
    const dataset = event.target.dataset
    const key = dataset.key
    const value = dataset.value
    
    if(key == null || value == null){
        return;
    }
    const filtered = items.filter(item => item[key] === value)
    displayItems(filtered)
}

function setEventListeners(items){
    const logo = document.querySelector('.logo')
    const buttons = document.querySelector('.buttons')
    logo.addEventListener('click', () => displayItems(items))
    buttons.addEventListener('click', event => onButtonClick(event, items))
}
fetchData()
    .then(items => {
        displayItems(items)
        setEventListeners(items)
    })
    .catch(console.log())