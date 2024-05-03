
// ************* Getting Items ************ //
const images = document.querySelectorAll('.image')
let lightbox = document.querySelector('.lightbox')
let closeBtn = document.querySelector('.close')
let mainImage = document.querySelector('.main-image')
let previousBtn = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')
let body = document.querySelector('body')
let currentIndex = 0


// ************* Event Listener to Image ************ //
images.forEach(function (image, index) {
    image.addEventListener('click', function (e) {
        const imageSource = image.querySelector('img').src
        currentIndex = index
        showImage(imageSource)
    })
})

// ************* Show Image ************ //
function showImage(imageSource) {
    lightbox.style.display = 'block'
    mainImage.src = imageSource
}

// ************* Close Button ************ //
closeBtn.addEventListener('click', function () {
    lightbox.style.display = 'none'
})

// ************* Click Outside Lightbox Image ************ //
body.addEventListener('click', function (e) {
    if (body === e.target) {
        lightbox.style.display = 'none'
    }
})

// ************* Next Button ************ //
nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length
    const imageSource = images[currentIndex].querySelector('img').src
    showImage(imageSource)
})

// ************* Previous Button ************ //
previousBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1) % images.length
    const imageSource = images[currentIndex].querySelector('img').src
    showImage(imageSource)
})