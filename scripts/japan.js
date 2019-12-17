const flowersContainer = document.querySelector(".flower-js")
// const flowerContainerLeft = document.querySelector(".container-left")
// const flowerContainerTop = document.querySelector(".container-top")
// const flowerContainerRight = document.querySelector(".container-right")
// const flowerContainerBottom = document.querySelector(".container-bottom")

const container = document.querySelector(".container-flower")
for (let j=0; j<10; j++)
{
    let flower = document.createElement("img")
    let flowerdiv = document.createElement("div")
    flower.classList.add("exist")
    flowerdiv.appendChild(flower)
    flowersContainer.appendChild(flowerdiv)
    flower.setAttribute("src", "../assets/img/sakura.svg")
    flowerdiv.classList.add("flower")
    flowerdiv.style.left = Math.floor(Math.random()*100) + "%"
    flowerdiv.style.top = Math.floor(Math.random()*100) + "%"
}
const flowers = document.querySelectorAll(".flower")
for (let i = 0; i<flowers.length; i++)
{
    flowers[i].addEventListener("mouseover", () => 
    {
        flowers[i].classList.add("animation-flower")
        setTimeout(() => {
            flowers[i].classList.add("display-none")
        }, 1500)
    })
}


const imgBgIntro = document.querySelector(".background-intro-image")
const bgIntro = document.querySelector(".intro")

imgBgIntro.addEventListener("click", () =>
{
    imgBgIntro.classList.add("animation-intro")
    bgIntro.classList.add("subanimation-intro")
    setTimeout(() =>
    {
        bgIntro.classList.add("display-none")
    }, 2100)
})
