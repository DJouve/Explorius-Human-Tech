class Country
{
    constructor(_e, bgSource, charaSource, monumentSource, animalSource, foodSource, objectSource)
    {
        this.element = _e
        this.background = document.querySelector(".background")
        this.character = document.querySelector(".character")
        this.monument = document.querySelector(".monument")
        this.animal = document.querySelector(".animal")
        this.object = document.querySelector(".object")
        this.food = document.querySelector(".food")
        this.bgSource = bgSource
        this.charaSource = charaSource
        this.monumentSource = monumentSource
        this.animalSource = animalSource
        this.foodSource = foodSource
        this.objectSource = objectSource
        this.backgroundElements = document.querySelectorAll(".background-element")
        this.country = document.querySelector(".country")


        this.changeCountry()
        this.initCountry()
    }

    initCountry()
    {
        const imgBg = document.querySelector(".img-background")
        const imgChara = document.querySelector(".img-character")
        const imgMonu = document.querySelector(".img-monument")
        const imgAnimal = document.querySelector(".img-animal")
        const imgObject = document.querySelector(".img-object")
        const imgFood = document.querySelector(".img-food")
        imgBg.setAttribute("src", this.bgSource)
        imgChara.setAttribute("src", this.charaSource)
        imgMonu.setAttribute("src", this.monumentSource)
        imgAnimal.setAttribute("src", this.animalSource)
        imgObject.setAttribute("src", this.objectSource)
        imgFood.setAttribute("src", this.foodSource)
    }

    changeCountry()
    {
        const transition = document.querySelector(".transition")
        
        transition.addEventListener ( 'click', () =>
            {
                console.log(this.bgSource)
                transition.classList.add('invisible')
                this.country.classList.add('visible')
            }
        )
        
    }
}

const country = new Country(document.querySelector(".country"), "../assets/img/JAPON.jpg")