/**
 * Display planisphere on all the pages
 **/

class Planisphere {
    constructor() {
        this.globe = document.querySelector('.js-globe')
        this.planisphereContainer = document.querySelector('.planisphere-container')
        this.init()
    }
    init() {
        this.globe.addEventListener('click', () => {
            console.log(this.globe)
            console.log(this.planisphereContainer)
            this.planisphereContainer.classList.remove('hidden')
        })
    }
}
const planisphere = new Planisphere()