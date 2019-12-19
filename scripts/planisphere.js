/**
 * Display planisphere on all the pages
 **/

class Planisphere {
    constructor() {
        this.mapIcon = document.querySelector('.js-map')
        this.planisphereContainer = document.querySelector('.planisphere-container')
        this.planisphereImg = this.planisphereContainer.querySelector('.planisphere')
        this.egypt = this.planisphereContainer.querySelector('.planisphere-egypt')
        this.india = this.planisphereContainer.querySelector('.planisphere-india')
        this.japan = this.planisphereContainer.querySelector('.planisphere-japan')
        this.kenya = this.planisphereContainer.querySelector('.planisphere-kenya')
        this.mexico = this.planisphereContainer.querySelector('.planisphere-mexico')
        this.russia = this.planisphereContainer.querySelector('.planisphere-russia')
        this.scotland = this.planisphereContainer.querySelector('.planisphere-scotland')
        this.closeIcon = this.planisphereContainer.querySelector('.js-planisphere-x')
        this.init()
    }
    init() {
        // japon is blocked
        this.japan.classList.add('hidden')
        // if user said namaste, japon unblocked
        const namasteSaid = sessionStorage.getItem('namaste')
        if (namasteSaid == "ok") {
            this.planisphereImg.setAttribute('src', '../assets/img/planisphere2.svg')
            this.japan.classList.remove('hidden')
        }
        // open planisphere
        this.mapIcon.addEventListener('click', () => {
            this.planisphereContainer.classList.remove('hidden')
            // close planisphere
            this.closeIcon.addEventListener('click', () => {
                this.planisphereContainer.classList.add('hidden')
            })
            window.addEventListener('keydown', (_event) => {
                if (_event.code == "Escape") {
                    this.planisphereContainer.classList.add('hidden')
                }
            })
            // click on Egypt
            this.egypt.addEventListener('click', () => {
                sessionStorage.setItem('egypt', 'visited')
            })
            // click on India
            this.india.addEventListener('click', () => {
                sessionStorage.setItem('india', 'visited')
            })
            // click on Japan
            this.japan.addEventListener('click', () => {
                sessionStorage.setItem('japan', 'visited')
            })
            // click on Kenya
            this.kenya.addEventListener('click', () => {
                sessionStorage.setItem('kenya', 'visited')
            })
            // click on Mexico
            this.mexico.addEventListener('click', () => {
                sessionStorage.setItem('mexico', 'visited')
            })
            // click on Russia
            this.russia.addEventListener('click', () => {
                sessionStorage.setItem('russia', 'visited')
            })
            // click on Scotland
            this.scotland.addEventListener('click', () => {
                sessionStorage.setItem('scotland', 'visited')
            })
        })
    }
}
const planisphere = new Planisphere()