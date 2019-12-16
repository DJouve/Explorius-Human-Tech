class PinataGame {
    constructor() {
        this.canvas = document.querySelector('.js-canvas')
        this.ctx = this.canvas.getContext('2d')
        this.pinatas = document.querySelectorAll('.js-pinata')
        this.init()
    }
    init() {
        for (const _element of this.pinatas) {
            _element.addEventListener('click', () => {
                _element.style.opacity = "0"
            })
        }
        // récup pinatas dans le DOM
        // au clic sur une, canvas apparait et on met l'anim explosition
    }
}

const pinataGame = new PinataGame()

