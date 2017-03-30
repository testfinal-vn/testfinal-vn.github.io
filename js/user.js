$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    ScreenWidth = $(window).width();
    if(ScreenWidth < 600){
        $('.slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: false,
            arrows: true,
            focusOnSelect: true
        });
    } else if(ScreenWidth < 768){
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: false,
            arrows: true,
            focusOnSelect: true
        });
    } else
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: false,
            arrows: true,
            focusOnSelect: true
        });
    $('.form-win').on("click", function() {
        $(".form-win").removeClass("active");
        $(this).addClass('active');
    });
    $(".block-button .submit-form").click(function (event) {
        event.preventDefault();
        if($('.form-list .form-win').val() != "") {
            if(($('.email').val()).indexOf('@') != -1){
                $(".error").slideUp("slow");
                $(".ok").slideDown("slow");

            } else {$(".error").slideDown("slow");}
        } else  {
            $(".error").slideDown("slow");}
    });
});