const images = [
    './images/images-0.jpg',
    './images/images-1.jpg',
    './images/images-2.jpg',
    './images/images-3.jpg',
    './images/images-4.jpg',
    './images/images-5.jpg',
    './images/images-6.jpg',
    './images/images-7.jpg',
    './images/images-8.jpg',
    './images/images-9.jpg',
    './images/images-10.jpg',
    './images/images-11.jpg',
];
let imageIndex = 0;
const SliderImages = document.getElementById('images')

setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imageUrl = images[imageIndex]
    SliderImages.setAttribute('src', imageUrl)

    imageIndex++;
}, 1000)