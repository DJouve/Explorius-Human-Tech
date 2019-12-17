// display souvenirs from visited countries on the bookcase
class Bookcase {
    constructor() {
        this.souvenirEgypt = document.querySelector('.js-souvenir-egypt')
        this.souvenirIndia = document.querySelector('.js-souvenir-india')
        this.souvenirJapan = document.querySelector('.js-souvenir-japan')
        this.souvenirKenya = document.querySelector('.js-souvenir-kenya')
        this.souvenirMexico = document.querySelector('.js-souvenir-mexico')
        this.souvenirRussia = document.querySelector('.js-souvenir-russia')
        this.souvenirScotland = document.querySelector('.js-souvenir-scotland')
        this.init()
    }
    init() {
        const visitEgypt = sessionStorage.getItem('egypt')
        if (visitEgypt == "visited") {
            this.souvenirEgypt.classList.remove('hidden')
        }
        const visitIndia = sessionStorage.getItem('india')
        if (visitIndia == "visited") {
            this.souvenirIndia.classList.remove('hidden')
        }
        const visitJapan = sessionStorage.getItem('japan')
        if (visitJapan == "visited") {
            this.souvenirJapan.classList.remove('hidden')
        }
        const visitKenya = sessionStorage.getItem('kenya')
        if (visitKenya == "visited") {
            this.souvenirKenya.classList.remove('hidden')
        }
        const visitMexico = sessionStorage.getItem('mexico')
        if (visitMexico == "visited") {
            this.souvenirMexico.classList.remove('hidden')
        }
        const visitRussia = sessionStorage.getItem('russia')
        if (visitRussia == "visited") {
            this.souvenirRussia.classList.remove('hidden')
        }
        const visitScotland = sessionStorage.getItem('scotland')
        if (visitScotland == "visited") {
            this.souvenirScotland.classList.remove('hidden')
        }
    }
}
const bookcase = new Bookcase()
