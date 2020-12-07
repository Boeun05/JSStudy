const tag = document.querySelector('.tag')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')
const image = document.querySelector('.image')
document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    tag.textContent = `${x},${y}`
    tag.style.left = `${x}px`
    tag.style.top = `${y}px`
    vertical.style.left = `${x}px`
    horizontal.style.top = `${y}px`
    image.style.left = `${x}px`
    image.style.top = `${y}px`
})




