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


        this.transition()
        this.initCountry()
    }

    initCountry()
    {
        for (let i = 0; i<7; i++){
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
    }

    transition()
    {
        const transition = document.querySelector(".transition")
        let isOn = true

        transition.addEventListener ( 'click', () =>
        {
            if(isOn == true) {
                isOn == false
                transition.classList.remove('visible')
                transition.classList.add('invisible')
                this.country.classList.add('visible')
                this.country.classList.remove('invisible')
            }
        })
        this.object.addEventListener('click', () =>
        {
            isOn == true
            transition.classList.remove('invisible')
            transition.classList.add('visible')
            this.country.classList.remove('visible')
            this.country.classList.add('invisible')
            changeCountry()
        })        
    }

    // changeCountry()
    // {
    //     for (let i = 0; i<8; i++)
    //     {

    //     }
    // }

}

const Japan = new Country(document.querySelector(".country"), "../assets/img/country/JAPON.jpg")
// const Russia = new Country(document.querySelector(".country"), )
// const India = new Country(document.querySelector(".country"), )
// const Mexico = new Country(document.querySelector(".country"), )
// const Kenya = new Country(document.querySelector(".country"), )
// const Egypt = new Country(document.querySelector(".country"), )
// const Scotland = new Country(document.querySelector(".country"), )