
const imgBgIntro = document.querySelector(".background-intro-image")
const bgIntro = document.querySelector(".intro")

imgBgIntro.addEventListener("click", () =>
{
    imgBgIntro.classList.add("animation-intro")
    bgIntro.classList.add("subanimation-intro")
    setTimeout(() =>
    {
        bgIntro.classList.add("display-none")
    }, 1990)
})