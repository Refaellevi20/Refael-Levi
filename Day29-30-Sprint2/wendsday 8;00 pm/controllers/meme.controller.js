'use strict'

let gElCanvas
let gCtx


function initCanvas() {
    gElCanvas = document.getElementById('memeCanvas')
    gCtx = gElCanvas.getContext('2d')
    // showEditor()
    renderGallery()
    initMemeEditor()
    // addListeners()
    //* render
    renderMeme()
}

function initMemeEditor() {
    const imageUpload = document.getElementById('imageUpload')
    imageUpload.addEventListener('change', handleImageUpload)

    document.querySelector('.topText').addEventListener('input', (event) => {
        gMeme.topText = event.target.value
        renderMeme()
    })

    document.querySelector('.bottomText').addEventListener('input', (event) => {
        gMeme.bottomText = event.target.value
        renderMeme()
    })

    document.querySelector('.textColor').addEventListener('input', (renderMeme))
}


function handleImageUpload(event) {
    const reader = new FileReader()
    reader.onload = function (event) {
        gMeme.img.src = event.target.result
        gMeme.img.onload = function () {
            gElCanvas.width = gMeme.img.width
            gElCanvas.height = gMeme.img.height
            renderMeme()
        }
    }
    reader.readAsDataURL(event.target.files[0])
}

function renderMeme() {
    if (!gMeme.img.src) return

    //* Clear the canvas
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

    //* uploaded image
    gCtx.drawImage(gMeme.img, 0, 0, gElCanvas.width, gElCanvas.height)

    //* style for text
    gCtx.font = '30px Impact'
    gCtx.fillStyle = document.querySelector('.textColor').value
    gCtx.strokeStyle = document.querySelector('.stokeColor').value
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.textAlign = 'center'

    //* top
    gCtx.fillText(gMeme.topText.toUpperCase(), gElCanvas.width / 2, 50)
    gCtx.strokeText(gMeme.topText.toUpperCase(), gElCanvas.width / 2, 50)

    //* bottom text
    gCtx.fillText(gMeme.bottomText.toUpperCase(), gElCanvas.width / 2, gElCanvas.height - 20)
    gCtx.strokeText(gMeme.bottomText.toUpperCase(), gElCanvas.width / 2, gElCanvas.height - 20)
}



//* Handle the listeners
// function addListeners() {
//     addMouseListeners()
    //* Listen for resize ev
    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })
// }

function addMouseListeners() {
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}








