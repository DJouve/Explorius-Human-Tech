const nessieContainer = document.querySelector('.js-nessie-container')
const popUp = document.querySelector('.js-pop-up')
const button = document.querySelector('.js-button')

nessieContainer.addEventListener('click', () => {
    popUp.classList.remove('hidden')
    button.addEventListener('click', () => {
        popUp.classList.add('hidden')
        nessieContainer.classList.remove('nessie-anim')
        nessieContainer.classList.add('nessie-not-anim')
    })
})