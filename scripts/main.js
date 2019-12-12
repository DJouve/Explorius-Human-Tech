
const text = document.querySelectorAll(".text")
const img = document.querySelectorAll(".img-js")
const dct = document.querySelectorAll(".dct-js")
const no = document.querySelector(".no")
let bool = true

for (let i=0; i<img.length; i++){
    img[i].addEventListener('click', () =>
    {
       for (let k=0; k<dct.length; k++)
       {
           if (text[k].classList.contains("visible"))
           {
               text[k].classList.remove("visible")
           }
           setTimeout(() => {
            text[i].classList.add("visible")
           }, 500);           
       }
    })
}

no.addEventListener('click', ()=>
{
    if (text[3].classList.contains("visible"))
    {
        text[3].classList.remove("visible")
    }
})

const yes = document.querySelector(".yes")
const links = ["../pages/japan.html", "../pages/egypt.html", "../pages/india.html", "../pages/kenya.html", "../pages/mexico.html", "../pages/russia.html", "../bedroom.html"]
let random
let done = new Array(JSON.parse(tab))
do{
    random = Math.floor(Math.random()*6)
}
while(done.includes(random))
yes.setAttribute("href", links[random])
done.push(random)
let tab = JSON.stringify(done)
console.log(links)
console.log(done)
console.log(yes)
