/**
 * Voices controls on all the pages
 **/
class Speak {
    constructor() {
        this.country = document.querySelector('.js-country')
        this.welcomeAudio = this.country.querySelector('.js-welcome-audio')
        this.monumentAudio = this.country.querySelector('.js-monument-audio')
        this.animalAudio = this.country.querySelector('.js-animal-audio')
        this.activityAudio = this.country.querySelector('.js-activity-audio')
        this.foodAudio = this.country.querySelector('.js-food-audio')
        this.monument = this.country.querySelector('.js-monument')
        this.animal = this.country.querySelector('.js-animal')
        this.activity = this.country.querySelector('.js-activity')
        this.food = this.country.querySelector('.js-food')
        this.child = this.country.querySelector('.js-child')
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
            if (!this.country.classList.contains('voice-playing')) {
                //play the voice
                this.welcomeAudio.play()
                this.country.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.welcomeAudio.addEventListener('ended', () => {
                    this.country.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the monument
    monumentInfo() {
        // by clicking the monument
        this.monument.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.country.classList.contains('voice-playing')) {
                //play the voice
                this.monumentAudio.play()
                this.country.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.monumentAudio.addEventListener('ended', () => {
                    this.country.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the animal
    animalInfo() {
        // by clicking the animal
        this.animal.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.country.classList.contains('voice-playing')) {
                //play the voice
                this.animalAudio.play()
                this.country.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.animalAudio.addEventListener('ended', () => {
                    this.country.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the activity
    activityInfo() {
        // by clicking the activity
        this.activity.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.country.classList.contains('voice-playing')) {
                //play the voice
                this.activityAudio.play()
                this.country.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.activityAudio.addEventListener('ended', () => {
                    this.country.classList.remove('voice-playing')
                })
            }
        })
    }
    // gives info about the food
    foodInfo() {
        // by clicking the food
        this.food.addEventListener('click', () => {
            // if no voice is playing already
            if (!this.country.classList.contains('voice-playing')) {
                //play the voice
                this.foodAudio.play()
                this.country.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.foodAudio.addEventListener('ended', () => {
                    this.country.classList.remove('voice-playing')
                })
            }
        })
    }
}

const speak = new Speak()
