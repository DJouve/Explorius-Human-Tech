class PinataGame {
    constructor() {
        this.pinatas = document.querySelectorAll('.js-pinata')
        this.confettisContainer = document.querySelector('.js-confettis-container')
        this.confettis = new Array(100) // number of confettis
        this.init()
    }
    init() {
        // clicking a pinata
        for (const _element of this.pinatas) {
            _element.addEventListener('click', (_event) => {
                // hide pinata
                _element.style.opacity = "0"

                // confettis
                for (let _element of this.confettis) {

                    this.confettisContainer.style.display = "block"
                    _element = document.createElement('div')

                    // position where the client click
                    _element.style.left = `${_event.clientX}px`
                    _element.style.top = `${_event.clientY}px`

                    // randoms colors
                    const cr = Math.floor(50 + Math.random() * (255 - 50))
                    const cg = Math.floor(50 + Math.random() * (250 - 50))
                    const cb = Math.floor(50 + Math.random() * (250 - 50))
                    _element.style.backgroundColor = `rgb(${cr}, ${cg}, ${cb})`

                    // confettis move
                    const directions = [1, -1]
                    const indexDirectionX = Math.floor(Math.random() * 2)
                    const indexDirectionY = Math.floor(Math.random() * 2)
                    const mx = directions[indexDirectionX] * Math.floor(Math.random() * 300)
                    const my = directions[indexDirectionY] * Math.floor(Math.random() * 300)
                    _element.style.transform = `translate(${mx}px,${my}px)`

                    _element.classList.add('confetti')
                    this.confettisContainer.appendChild(_element)
                }
            })
        }
    }
}

const pinataGame = new PinataGame()

