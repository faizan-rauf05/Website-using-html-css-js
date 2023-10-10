let slides = document.querySelectorAll('#emp-slide');

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 45}%`
})

const move_right = () => {
    if (counter == slides.length - 2) {
        counter = 0 - 1;
    }
    counter++;
    slide_move();
}

const move_left = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        sli();
    }
    counter--;
    slide_move();
}

const slide_move = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 155}%)`
    })
}

//slide-site

$(document).ready(function () {
    $('a[href="#services-section"]').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var aboutSection = $('#services-section'); // Get the "About" section by ID
        var offsetTop = aboutSection.offset().top; // Get the top offset position of the section
        $('html, body').animate({ scrollTop: offsetTop }, 3000); // Scroll to the section smoothly in 1 second
    });
});
