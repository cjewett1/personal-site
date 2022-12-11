//Image Caro

// Some "global" variables
const images = ['bridge.webp', 'nighttime.webp', 'bridgetwo.webp', 'landscape.webp', 'reindeer.webp'];

let currentImg = 0;
var idx;

function updateSlide(index) {
    // display the new current image
    document.querySelector('.carousel>img').src = 'img/' + images[index];

    // update the active selector bullet
    document.querySelector('.image-tracker .active').classList.remove('active');
    document.querySelectorAll('[data-idx]')[index].classList.add('active');
}

let slideshowInterval; // variable to track the context of the interval
slideshowInterval = setInterval(function() {
currentImg += 1;
if (currentImg === images.length) {
    currentImg = 0;
}
updateSlide(currentImg);
}, 10000);


//Stop the slideshow on mouseover.
imageEvent = document.querySelector('img');

imageEvent.addEventListener('mouseover', function() {

    clearInterval(slideshowInterval);

})

//Resume interval on mouseout. 
imageEvent.addEventListener('mouseout', function() {

    slideshowInterval = setInterval(function() {
        currentImg += 1;
        if (currentImg === images.length) {
            currentImg = 0;
        }
        updateSlide(currentImg);
        }, 3000);
})

// display the current image
document.querySelector('.carousel>img').src = 'img/' + images[0];

// add the appropriate number of selector bullets
for (let idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

// highlight the first bullet as 'active'
document.querySelector('.image-tracker').querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function(evt) {
    let target = evt.target;
    if (target.classList.contains('control') || target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            currentImg = (currentImg >= images.length) ? 0 : currentImg;
        } else if (target.classList.contains('prev')) {
            // move to the previous index in the array
            currentImg -= 1;
            currentImg = (currentImg < 0) ? images.length - 1 : currentImg;
        } else {
            // selector bullet clicked
            // use Number() to convert from string to number
            currentImg = Number(target.dataset.idx);
        }

        // Call our function
        updateSlide(currentImg);
    }
});


