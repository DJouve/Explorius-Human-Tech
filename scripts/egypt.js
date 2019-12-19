
const portal = document.querySelector(".portal")
const bgPortal = document.querySelector(".portal-background")

setTimeout(() =>
{
    portal.classList.add("animation-intro")
    setTimeout(() =>
    {
        bgPortal.classList.add("display-none")
        portal.classList.add("display-none")
    }, 1990)
}, 750)

// Feature

const feature = document.querySelector(".feature-background")
const featureElement = document.querySelectorAll(".feature-element")
const featureImg = document.querySelector(".feature-img-js")
const featureImgContent = ["../assets/img/hieroglyphe/F.svg","../assets/img/hieroglyphe/H.svg","../assets/img/hieroglyphe/I.svg","../assets/img/hieroglyphe/K.svg","../assets/img/hieroglyphe/N.svg","../assets/img/hieroglyphe/R.svg","../assets/img/hieroglyphe/S.svg","../assets/img/hieroglyphe/Y.svg",]
const showPopUp = document.querySelector(".background-pop-up")
const textFailure = document.querySelector(".content-pop-up.wrong-answer")
const textSucces = document.querySelector(".content-pop-up.correct-answer-final")
const textContinue = document.querySelector(".content-pop-up.correct-answer")
const succes = document.querySelector(".succes")
const again = document.querySelector(".again")
const reset = document.querySelector(".reset")
let count = 0
let random = Math.floor(Math.random()*8)
featureImg.setAttribute("src", featureImgContent[random])

for(let i=0; i<featureImgContent.length; i++)
{
    featureElement[i].addEventListener('click', () =>
    {
        if (i == random)
        {
         if (count == 2)
            {
                showPopUp.classList.remove("js-hidden")
                textSucces.classList.remove("js-hidden")
            }
            else
            {
                showPopUp.classList.remove("js-hidden")
                textContinue.classList.remove("js-hidden")
                featureImg.removeAttribute("src")
                count++
                console.log(count)
            }
        }
        else
        {
            showPopUp.classList.remove("js-hidden")
            textFailure.classList.remove("js-hidden")
        }
    })
}
succes.addEventListener('click', () =>
{
    showPopUp.classList.add("js-hidden")
    feature.classList.add("js-hidden")
})
again.addEventListener('click', () =>
{
    showPopUp.classList.add("js-hidden")
    random = Math.floor(Math.random()*8)
    featureImg.setAttribute("src", featureImgContent[random])
    textContinue.classList.add("js-hidden")
})
reset.addEventListener('click', () =>
{
    showPopUp.classList.add("js-hidden")
    textFailure.classList.add("js-hidden")
})

