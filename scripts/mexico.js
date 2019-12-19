class PinataGame {
    constructor() {
        this.feature = document.querySelector('.js-feature')
        this.pinatas = document.querySelectorAll('.js-pinata')
        this.confettisContainer = document.querySelector('.js-confettis-container')
        this.confettis = new Array(120) // number of confettis
        this.exploded = new Array()
        this.popUp = document.querySelector('.js-pop-up')
        this.button = this.popUp.querySelector('.js-button')
        this.init()
    }
    init() {
        // clicking a pinata
        for (const _element of this.pinatas) {
            _element.addEventListener('click', (_event) => {
                this.exploded.push(_element)
                if (this.exploded.length == 3) {
                    this.popUp.classList.remove('hidden')
                    this.button.addEventListener('click', () => {
                        this.popUp.classList.add('hidden')
                        this.feature.classList.add('hidden')
                    })
                }
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

                    _element.classList.add('confetti')
                    this.confettisContainer.appendChild(_element)

                    // confettis move
                    const directions = [1, -1]
                    const indexDirectionX = Math.floor(Math.random() * 2)
                    const indexDirectionY = Math.floor(Math.random() * 2)
                    const mx = directions[indexDirectionX] * Math.floor(Math.random() * 300)
                    const my = directions[indexDirectionY] * Math.floor(Math.random() * 300)
                    window.setInterval(() => {
                        _element.style.transition = 'transform 2s'
                        _element.style.transform = `translate(${mx}px,${my}px)`
                    }, 10)
                }
            })
        }
    }
}

const pinataGame = new PinataGame()

