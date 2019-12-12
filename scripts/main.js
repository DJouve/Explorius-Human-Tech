// Zoé

class Journey {
    constructor() {
        this.game = document.querySelector('body')
        this.welcomeAudio = this.game.querySelector('.js-welcome-audio')
        this.monumentAudio = this.game.querySelector('.js-monument-audio')
        this.animalAudio = this.game.querySelector('.js-animal-audio')
        this.activityAudio = this.game.querySelector('.js-activity-audio')
        this.foodAudio = this.game.querySelector('.js-food-audio')
        this.monument = this.game.querySelector('.js-monument')
        this.animal = this.game.querySelector('.js-animal')
        this.activity = this.game.querySelector('.js-activity')
        this.food = this.game.querySelector('.js-food')
        this.child = this.game.querySelector('.js-child')
        this.welcome()
        this.monumentInfo()
        this.animalInfo()
        this.activityInfo()
        this.foodInfo()
    }
    // welcome the user
    welcome() {
        // by clicking the child
        this.child.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.game.classList.contains('voice-playing')) {
                //play the voice
                this.welcomeAudio.play()
                this.game.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.welcomeAudio.addEventListener('ended', () => {
                    this.game.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the monument
    monumentInfo() {
        // by clicking the monument
        this.monument.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.game.classList.contains('voice-playing')) {
                //play the voice
                this.monumentAudio.play()
                this.game.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.monumentAudio.addEventListener('ended', () => {
                    this.game.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the animal
    animalInfo() {
        // by clicking the animal
        this.animal.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.game.classList.contains('voice-playing')) {
                //play the voice
                this.animalAudio.play()
                this.game.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.animalAudio.addEventListener('ended', () => {
                    this.game.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the activity
    activityInfo() {
        // by clicking the activity
        this.activity.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.game.classList.contains('voice-playing')) {
                //play the voice
                this.activityAudio.play()
                this.game.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.activityAudio.addEventListener('ended', () => {
                    this.game.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the food
    foodInfo() {
        // by clicking the food
        this.food.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.game.classList.contains('voice-playing')) {
                //play the voice
                this.foodAudio.play()
                this.game.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.foodAudio.addEventListener('ended', () => {
                    this.game.classList.remove('voice-playing')
                })
            }
        })
    }
}

const journey = new Journey()


// Dam's

const text = document.querySelectorAll(".text")
const img = document.querySelectorAll(".img-js")
const dct = document.querySelectorAll(".dct-js")
const no = document.querySelector(".no")
let bool = true

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
        for (let k = 0; k < dct.length; k++) {
            if (text[k].classList.contains("visible")) {
                text[k].classList.remove("visible")
            }
            setTimeout(() => {
                text[i].classList.add("visible")
            }, 500);
        }
    })
}

no.addEventListener('click', () => {
    if (text[3].classList.contains("visible")) {
        text[3].classList.remove("visible")
    }
})

const yes = document.querySelector(".yes")
const links = ["../pages/japan.html", "../pages/egypt.html", "../pages/india.html", "../pages/kenya.html", "../pages/mexico.html", "../pages/russia.html", "../bedroom.html"]
let random
let done = new Array(JSON.parse(tab))
do {
    random = Math.floor(Math.random() * 6)
}
while (done.includes(random))
yes.setAttribute("href", links[random])
done.push(random)
let tab = JSON.stringify(done)
console.log(links)
console.log(done)
console.log(yes)
