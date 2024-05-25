const slides = document.querySelectorAll('.slide')
let counter = 0

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})


function slideImage() {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

let nextSlide = () => {
    if (counter < slides.length - 1) {
        counter++
        slideImage()
    }

}

let prevSlide = () => {
    if (counter > 0) {
        counter--
        slideImage()
    }
}

