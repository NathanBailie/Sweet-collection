"use strict"

let images = document.querySelector('.images');

for (let image of images.children) {
    image.addEventListener('click', () => {
        resetClasses(images.children, image.id)

        if (image.classList.contains('active')) {
            image.classList.remove('active');
        } else {
            image.classList.add('active');
        };
    });
};

function resetClasses(array, id) {
    for (let item of array) {
        if (item.id !== id) {
            item.classList.remove('active');
        };
    };
}