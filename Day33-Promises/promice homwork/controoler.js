
'use strict'

function onFormSubmit(event) {
    event.preventDefault()
    onAsk()
}

function onAsk() {
    console.log('Loanding...')
    ask()
        .then(renderAns)
        .catch(err => console.log('err:', err))
        .finally(() => console.log('Finally!'))

        //! another way ⬇️
    // .then(res => renderAns(res))
}

function renderAns(ans) {
    console.log(ans)
    const elAns = document.querySelector('.answer')
    elAns.querySelector('h2').innerText = ans.answer
    elAns.querySelector('img').src = ans.image
}
