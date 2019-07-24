$(document).ready(() => {

    //$('.RocketCityLogo').hide();

    $('.btn').on('click', () => {
        $('html, body').animate({
            scrollTop: $("#next").offset().top
        }, 1000);
        //$('.RocketCityLogo').slideToggle('slow');
    });

});