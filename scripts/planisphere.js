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
            this.planisphereContainer.classList.remove('hidden')
        })
    }
}
const planisphere = new Planisphere()