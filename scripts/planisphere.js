/**
 * Display planisphere on all the pages
 **/

class Planisphere {
    constructor() {
        this.mapIcon = document.querySelector('.js-map')
        this.planisphereContainer = document.querySelector('.planisphere-container')
        this.egypt = this.planisphereContainer.querySelector('.js-planisphere-egypt')
        this.india = this.planisphereContainer.querySelector('.js-planisphere-india')
        this.japan = this.planisphereContainer.querySelector('.js-planisphere-japan')
        this.kenya = this.planisphereContainer.querySelector('.js-planisphere-kenya')
        this.mexico = this.planisphereContainer.querySelector('.js-planisphere-mexico')
        this.russia = this.planisphereContainer.querySelector('.js-planisphere-russia')
        this.scotland = this.planisphereContainer.querySelector('.js-planisphere-scotland')
        this.closeIcon = this.planisphereContainer.querySelector('.js-planisphere-x')
        this.init()
    }
    init() {
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