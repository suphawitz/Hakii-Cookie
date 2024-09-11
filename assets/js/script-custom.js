$(document).ready(function(){
    $('.ar-slick-sec07').slick({
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
        // nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right'></i></button>"
    });

    document.querySelector('.slick-prev').innerHTML = "<i class='bx bx-chevron-left'>";
    document.querySelector('.slick-next').innerHTML = "<i class='bx bx-chevron-right'>";
});