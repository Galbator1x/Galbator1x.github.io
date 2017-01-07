$(function() {
    var guessRegionForm = $('.notify-region');
    $('.notify-region-close, #btn-notify-region-yes').click(function() {
        guessRegionForm.hide();
    });

    $('#btn-notify-region-no').click(function() {
        guessRegionForm.hide();
        $('.navbar-dropdown-region').dropdown('toggle');
        return false;
    });


    $('.reviews-carousel').slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.reviews-arrow-left, .reviews-arrow-left-bottom').click(function() {
        $('.reviews-carousel').slick('slickPrev');
    });

    $('.reviews-arrow-right').click(function() {
        $('.reviews-carousel').slick('slickNext');
    });

    $('.settings-navigation ul li').click(function() {
        $('.settings div').hide();
        $(`.settings :nth-child(${$(this).index() + 1})`).show();
    });

});
