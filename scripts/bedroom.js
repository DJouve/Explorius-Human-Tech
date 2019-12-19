let allText = []
// display souvenirs and postcards from visited countries 
class Visited {
    constructor() {
        // get all the souvenirs from the DOM
        this.souvenirEgypt = document.querySelector('.js-souvenir-egypt')
        this.souvenirIndia = document.querySelector('.js-souvenir-india')
        this.souvenirJapan = document.querySelector('.js-souvenir-japan')
        this.souvenirKenya = document.querySelector('.js-souvenir-kenya')
        this.souvenirMexico = document.querySelector('.js-souvenir-mexico')
        this.souvenirRussia = document.querySelector('.js-souvenir-russia')
        this.souvenirScotland = document.querySelector('.js-souvenir-scotland')
        // get all the postcards from the DOM
        this.pcEgypt = document.querySelector('.js-postcard-egypt')
        this.pcIndia = document.querySelector('.js-postcard-india')
        this.pcJapan = document.querySelector('.js-postcard-japan')
        this.pcKenya = document.querySelector('.js-postcard-kenya')
        this.pcMexico = document.querySelector('.js-postcard-mexico')
        this.pcRussia = document.querySelector('.js-postcard-russia')
        this.pcScotland = document.querySelector('.js-postcard-scotland')
        this.init()
        this.saveTextForPostCard()
        this.initTextPostCard()
        this.onClickOfSaveButtonPostCard()
    }
    // if country visited, display souvenir and country
    init() {
        // Egypt
        const visitEgypt = sessionStorage.getItem('egypt')
        if (visitEgypt == "visited") {
            this.souvenirEgypt.classList.remove('hidden')
            this.pcEgypt.classList.remove('hidden')
        }
        // India
        const visitIndia = sessionStorage.getItem('india')
        if (visitIndia == "visited") {
            this.souvenirIndia.classList.remove('hidden')
            this.pcIndia.classList.remove('hidden')
        }
        // Japan
        const visitJapan = sessionStorage.getItem('japan')
        if (visitJapan == "visited") {
            this.souvenirJapan.classList.remove('hidden')
            this.pcJapan.classList.remove('hidden')
        }
        // Kenya
        const visitKenya = sessionStorage.getItem('kenya')
        if (visitKenya == "visited") {
            this.souvenirKenya.classList.remove('hidden')
            this.pcKenya.classList.remove('hidden')
        }
        // Mexico
        const visitMexico = sessionStorage.getItem('mexico')
        if (visitMexico == "visited") {
            this.souvenirMexico.classList.remove('hidden')
            this.pcMexico.classList.remove('hidden')
        }
        // Russia
        const visitRussia = sessionStorage.getItem('russia')
        if (visitRussia == "visited") {
            this.souvenirRussia.classList.remove('hidden')
            this.pcRussia.classList.remove('hidden')
        }
        // Scotland
        const visitScotland = sessionStorage.getItem('scotland')
        if (visitScotland == "visited") {
            this.souvenirScotland.classList.remove('hidden')
            this.pcScotland.classList.remove('hidden')
        }
    }

    saveTextForPostCard()
    {
        const saveTextInPostCard = document.querySelectorAll('.test')
        console.log(saveTextInPostCard)
        allText = new Array ()
        
        for (let i = 0; i < saveTextInPostCard.length; i++)
        {
            allText.push(saveTextInPostCard[i].innerHTML)
        }
        console.log(allText)
        let temp = JSON.stringify(allText)
        sessionStorage.setItem('sessionTextPostCard', temp)
    }

    initTextPostCard()
    {
        if(sessionStorage.getItem('sessionTextPostCard')!=null){
            allText = sessionStorage.getItem('sessionTextPostCard')
            allText = JSON.parse(allText)
        } 
    }

    onClickOfSaveButtonPostCard()
    {
        const buttonPostCard = document.querySelector('.primary-button')
        console.log(buttonPostCard)
        const changeColorPlaceholder = document.querySelectorAll('.test')

        buttonPostCard.addEventListener('click', () =>
        {
            this.saveTextForPostCard()
            for( let i = 0; i < changeColorPlaceholder.length; i++)
            {
                changeColorPlaceholder[i].style.backgroundColor = 'rgb(248, 222, 193)'
            }
        })
    }

}
const visit = new Visited()
