const flowersContainer = document.querySelectorAll(".flower-js")
// const flowerContainerLeft = document.querySelector(".container-left")
// const flowerContainerTop = document.querySelector(".container-top")
// const flowerContainerRight = document.querySelector(".container-right")
// const flowerContainerBottom = document.querySelector(".container-bottom")

const container = document.querySelector(".container-flower")
const flowerClass = [".left-transition", ".top-transition", ".right-transition", ".bottom-transition"]
for (let i=0; i<flowersContainer.length; i++)
{
    for (let j=0; j<200; j++)
    {
        let flower = document.createElement("img")
        let flowerdiv = document.createElement("div")
        flower.classList.add("exist")
        flowerdiv.appendChild(flower)
        flowersContainer[i].appendChild(flowerdiv)
        flower.setAttribute("src", "../assets/img/sakura.svg")
        flowerdiv.classList.add("flower")
        flowerdiv.classList.add(flowerClass[i])
        flowerdiv.style.left = Math.floor(Math.random()*100) + "%"
        flowerdiv.style.top = Math.floor(Math.random()*100) + "%"
    }
    flowersContainer[i].addEventListener("mouseover", () => 
    {
        setTimeout(() => {
            flowersContainer[i].classList.add("display-none")
        }, 1000)
    })
}
