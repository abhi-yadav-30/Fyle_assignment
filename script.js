var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
// Auto Slide   if you need auto slide ,remove the commit "//"
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  
   
   slideIndex--;
   if (slideIndex < 0) { slideIndex = 2 }
    dots[slideIndex ].className += " active";
   slides[slideIndex ].style.display = "block";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function pjt_handler(a){
    // alert('heee');
    // console.log(document.getElementById("image"));
       var image = document.getElementById("image");
       image.src = a;
    
    //    console.log(document.getElementById("image"));

}


