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
        this.souvenirAudio = this.country.querySelector('.js-souvenir-audio')
        this.voices = [this.welcomeAudio, this.monumentAudio, this.animalAudio, this.activityAudio, this.foodAudio, this.souvenirAudio]
        this.monument = this.country.querySelector('.js-monument')
        this.animal = this.country.querySelector('.js-animal')
        this.activity = this.country.querySelector('.js-activity')
        this.food = this.country.querySelector('.js-food')
        this.child = this.country.querySelector('.js-child')
        this.souvenir = this.country.querySelector('.js-souvenir')
        this.iconsElement = document.querySelector('.icons-container')
        this.welcome()
        this.monumentInfo()
        this.animalInfo()
        this.activityInfo()
        this.foodInfo()
        this.giveSouvenir()
        this.playMusic()
    }
    // welcome the user
    welcome() {
        // by clicking the child
        this.child.addEventListener('click', () => {
            // go throw all the voices
            for (const _element of this.voices) {
                // if one voice is already playing
                if (_element.classList.contains('playing')) {
                    // stop this voice
                    _element.pause()
                    _element.currentTime = 0
                    _element.classList.remove('playing')
                    this.country.classList.remove('voice-playing')
                }
            }
            //play the voice
            this.welcomeAudio.play()
            this.welcomeAudio.classList.add('playing')
            this.country.classList.add('voice-playing')
            // when voice ended, remove class playing
            this.welcomeAudio.addEventListener('ended', () => {
                this.welcomeAudio.classList.remove('playing')
                this.country.classList.remove('voice-playing')
            })
        })
    }
    // gives info about the monument
    monumentInfo() {
        // by clicking the monument
        this.monument.addEventListener('click', () => {
            // go throw all the voices
            for (const _element of this.voices) {
                // if one voice is already playing
                if (_element.classList.contains('playing')) {
                    // stop this voice
                    _element.pause()
                    _element.currentTime = 0
                    _element.classList.remove('playing')
                    this.country.classList.remove('voice-playing')
                }
            }
            //play the voice
            this.monumentAudio.play()
            this.monumentAudio.classList.add('playing')
            this.country.classList.add('voice-playing')
            // when voice ended, remove class playing
            this.monumentAudio.addEventListener('ended', () => {
                this.monumentAudio.classList.remove('playing')
                this.country.classList.remove('voice-playing')
            })
        })
    }
    // gives info about the animal
    animalInfo() {
        // by clicking the animal
        this.animal.addEventListener('click', () => {
            // go throw all the voices
            for (const _element of this.voices) {
                // if one voice is already playing
                if (_element.classList.contains('playing')) {
                    // stop this voice
                    _element.pause()
                    _element.currentTime = 0
                    _element.classList.remove('playing')
                    this.country.classList.remove('voice-playing')
                }
            }
            //play the voice
            this.animalAudio.play()
            this.animalAudio.classList.add('playing')
            this.country.classList.add('voice-playing')
            // when voice ended, remove class playing
            this.animalAudio.addEventListener('ended', () => {
                this.animalAudio.classList.remove('playing')
                this.country.classList.remove('voice-playing')
            })
        })
    }
    // gives info about the activity
    activityInfo() {
        // by clicking the activity
        this.activity.addEventListener('click', () => {
            // go throw all the voices
            for (const _element of this.voices) {
                // if one voice is already playing
                if (_element.classList.contains('playing')) {
                    // stop this voice
                    _element.pause()
                    _element.currentTime = 0
                    _element.classList.remove('playing')
                    this.country.classList.remove('voice-playing')
                }
            }
            //play the voice
            this.activityAudio.play()
            this.activityAudio.classList.add('playing')
            this.country.classList.add('voice-playing')
            // when voice ended, remove class playing
            this.activityAudio.addEventListener('ended', () => {
                this.activityAudio.classList.remove('playing')
                this.country.classList.remove('voice-playing')
            })
        })
    }
    // gives info about the food
    foodInfo() {
        // by clicking the food
        this.food.addEventListener('click', () => {
            // go throw all the voices
            for (const _element of this.voices) {
                // if one voice is already playing
                if (_element.classList.contains('playing')) {
                    // stop this voice
                    _element.pause()
                    _element.currentTime = 0
                    _element.classList.remove('playing')
                    this.country.classList.remove('voice-playing')
                }
            }
            //play the voice
            this.foodAudio.play()
            this.foodAudio.classList.add('playing')
            this.country.classList.add('voice-playing')
            // when voice ended, remove class playing
            this.foodAudio.addEventListener('ended', () => {
                this.foodAudio.classList.remove('playing')
                this.country.classList.remove('voice-playing')
            })
        })
    }
    // when user wants to leave the country, give him/her a souvenir
    giveSouvenir() {
        this.iconsElement.addEventListener('mouseover', () => {
            //play the voice and make the souvenir fall
            // check if it has not been done before
            if (!this.souvenirAudio.classList.contains('played')) {
                // go throw all the voices
                for (const _element of this.voices) {
                    // if one voice is already playing
                    if (_element.classList.contains('playing')) {
                        // stop this voice
                        _element.pause()
                        _element.currentTime = 0
                        _element.classList.remove('playing')
                        this.country.classList.remove('voice-playing')
                    }
                }
                // play the voice
                this.souvenirAudio.play()
                this.souvenirAudio.classList.add('playing')
                this.souvenirAudio.classList.add('played')
                this.country.classList.add('voice-playing')
                // when voice ended, remove class playing
                this.monumentAudio.addEventListener('ended', () => {
                    this.monumentAudio.classList.remove('playing')
                    this.country.classList.remove('voice-playing')
                })
                // make souvenir fall
                this.souvenir.style.transition = 'all 1s ease-out'
                this.souvenir.style.top = '70%'
                // make souvenir rotate
                this.souvenir.addEventListener('mouseover', () => {
                    this.souvenir.classList.add('souvenir-rotate')
                    this.souvenir.addEventListener('animationend', () => {
                        this.souvenir.classList.remove('souvenir-rotate')
                    })
                })
            }
        })
    }
    playMusic() {
        const music = document.querySelector('.js-music')
        const musicStarter = document.querySelector('.js-music-start')
        music.volume = 0.1
        musicStarter.addEventListener('click', () => {
            music.play()
        })
    }
}

const speak = new Speak()
