const text = document.querySelectorAll(".text")
const img = document.querySelectorAll(".img-js")
const dct = document.querySelectorAll(".dct-js")
let bool = true

console.log(img)
console.log(dct)

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
           
        //    if (dct[k].classList.contains("visible-dct"))
        //    {
        //        dct[k].classList.remove("visible-dct")
        //    }
        //    setTimeout(() => {
        //     dct[i].classList.add("visible-dct")
        //     console.log(dct[i])
        //    }, 500);
           
       }
       
       
    })
}
