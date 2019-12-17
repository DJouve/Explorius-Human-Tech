const matriochkaFirstElement = document.querySelector('.matriochka-1-js')
const matriochkaSecondElement = document.querySelector('.matriochka-2-js')
const matriochkaThirdElement = document.querySelector('.matriochka-3-js')
const matriochkaFourthElement = document.querySelector('.matriochka-4-js')
const matriochkaFifthElement = document.querySelector('.matriochka-5-js')

matriochkaFirstElement.addEventListener('click', () => {

    matriochkaSecondElement.classList.remove('hidden')
    matriochkaSecondElement.classList.add('matriochka-2')

    matriochkaThirdElement.classList.add('matriochka-3')

    matriochkaFourthElement.classList.add('matriochka-4')

    matriochkaFifthElement.classList.add('matriochka-5')
})
