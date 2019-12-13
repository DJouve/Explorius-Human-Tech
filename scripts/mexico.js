class PinataGame {
    constructor() {
        this.canvas = document.querySelector('.js-canvas')
        this.ctx = this.canvas.getContext('2d')
        this.pinata1 = document.querySelector('.js-pinata1')
        this.pinata2 = document.querySelector('.js-pinata2')
        this.pinata3 = document.querySelector('.js-pinata3')
        this.init()
        this.disappear()
    }
    /** Draw pinatas**/
    init() {
        const stringColor = 'white'

        /** PINATA 1 **/
        // pinata left top
        this.ctx.drawImage(this.pinata1, 75, 20, 2 * 138, 2 * 150)
        //pinata left top string
        this.ctx.beginPath()
        this.ctx.moveTo(160, 142)
        this.ctx.lineTo(160, 0)
        this.ctx.closePath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = stringColor
        this.ctx.stroke()

        /** PINATA 2 **/
        // pinata right top
        this.ctx.drawImage(this.pinata2, 675, 20, 2 * 138, 2 * 150)
        //pinata right top string
        this.ctx.beginPath()
        this.ctx.moveTo(760, 142)
        this.ctx.lineTo(760, 0)
        this.ctx.closePath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = stringColor
        this.ctx.stroke()

        /** PINATA 3 **/
        // pinata bottom
        this.ctx.drawImage(this.pinata3, 350, 250, 2 * 138, 2 * 150)
        //pinata left top string
        this.ctx.beginPath()
        this.ctx.moveTo(435, 373)
        this.ctx.lineTo(435, 0)
        this.ctx.closePath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = stringColor
        this.ctx.stroke()
    }
    /** Pinata disappear**/
    disappear() {
        document.addEventListener('click', (_event) => {
            // top left
            if (_event.clientX < 300 && _event.clientY < 300) {
                this.ctx.clearRect(0, 0, 360, 320)
                // draw circle
                this.ctx.beginPath()
                this.ctx.arc(_event.clientX, _event.clientY, 50, 0, Math.PI * 2)
                this.ctx.fillStyle = 'orange'
                this.ctx.fill()
            }
            // top right
            else if (_event.clientX > 620 && _event.clientY < 300) {
                this.ctx.clearRect(630, 0, 360, 320)
                // draw circle
                this.ctx.beginPath()
                this.ctx.arc(_event.clientX, _event.clientY, 50, 0, Math.PI * 2)
                this.ctx.fillStyle = 'orange'
                this.ctx.fill()
            }
            // bottom
            else if (_event.clientX > 300 && _event.clientX < 550 && _event.clientY > 240) {
                this.ctx.clearRect(300, 240, 360, 320)
                // draw circle
                this.ctx.beginPath()
                this.ctx.arc(_event.clientX, _event.clientY, 50, 0, Math.PI * 2)
                this.ctx.fillStyle = 'orange'
                this.ctx.fill()
            }
        })
    }
}

const pinataGame = new PinataGame()

