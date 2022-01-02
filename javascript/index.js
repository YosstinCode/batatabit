const $ =(selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const nextRight = $(".slider__arrow--right")
const nextLeft = $(".slider__arrow--left")
const sliderItems = $$(".slider__article")

const addOrRemoveHidden = ()=>{
    sliderItems[0].classList.toggle("hidden")
    sliderItems[1].classList.toggle("hidden")
}
nextRight.addEventListener("click", addOrRemoveHidden)
nextLeft.addEventListener("click",addOrRemoveHidden)
