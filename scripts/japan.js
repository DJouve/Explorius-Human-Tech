// Pop up
const popUp = document.querySelector('.js-pop-up')
const button = document.querySelector('.js-button')

button.addEventListener('click', () => {
    popUp.classList.add('hidden')
})

// Flowers

const country = document.querySelector(".js-country")
const flowers = new Array()
const animatedflowers = new Array()

for (let j = 0; j < 120; j++) {
    let flower = document.createElement("img")
    flower.setAttribute("src", "../assets/img/sakura.svg")
    flower.style.left = Math.floor(Math.random() * 100) + "%"
    flower.style.top = Math.floor(Math.random() * 100) + "%"
    flower.classList.add('flower')
    country.appendChild(flower)
    flowers.push(flower)
}

for (let i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener("mouseover", () => {
        flowers[i].classList.add("animation-flower")
        setTimeout(() => {
            flowers[i].classList.add("display-none")
        }, 1500)
    })
    flowers[i].addEventListener("touchmove", () => {
        flowers[i].classList.add("animation-flower")
        setTimeout(() => {
            flowers[i].classList.add("display-none")
        }, 1500)
    })
}


// const imgBgIntro = document.querySelector(".background-intro-image")
// const bgIntro = document.querySelector(".intro")

// imgBgIntro.addEventListener("click", () => {
//     imgBgIntro.classList.add("animation-intro")
//     bgIntro.classList.add("subanimation-intro")
//     setTimeout(() => {
//         bgIntro.classList.add("display-none")
//     }, 1490)
// })
