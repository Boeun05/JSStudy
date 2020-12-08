const tag = document.querySelector('.tag')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')
const image = document.querySelector('.image')

window.addEventListener('load', () => {
    const imageRect = image.getBoundingClientRect()
    const imageWidth = imageRect.width / 2
    const imageHeight = imageRect.height / 2

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX
        const y = e.clientY
        tag.textContent = `${x},${y}`
        tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`
        vertical.style.transform = `translateX(${x}px)`
        horizontal.style.transform = `translateY(${y}px)`
        image.style.transform = `translate(${x - imageWidth}px , ${y - imageHeight}px)`
    })
})




