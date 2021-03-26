var slideIndex = 0;
createSlideShow();
function createSlideShow() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    console.log(slideIndex);
    setTimeout(createSlideShow, 3000);

}
