$(document).ready(function () {

    $('.nav-button').click(function () {

        $('.nav-button').toggleClass('change');
    });

    //toggles the height of the class
    /*
    $(window).scroll(function () {
        let position = $(this).scrollTop(); // calculates position when scroll down 
        if (position >= 1) {
            $('.nav-menu').addClass('custom-navbar');

        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    */

    //toggles the height of the class
    $(window).scroll(function () {
        let position = $(this).scrollTop(); /* calculates position when scroll down */
        console.log(position);
        // here always on
        if (position >= 1) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');

        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');

        }
    });

    //gallery item chooser
    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');

        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    //on click make the item active
    $('.gallery-list-item').click(function () {

        $(this).addClass('active-item').siblings().removeClass('active-item');

    });

    //transition the pricing cards
    // $(window).scroll(function () {

    //    let position = $(this).scrollTop();

    // always on
    //  if (position >= 1) {
    (() => {
        $('.card-1').addClass('moveFromLeft');
        $('.card-2').addClass('moveFromBottom');
        $('.card-3').addClass('moveFromRight');
        //}
        //else {
        /*
                $('.card-1').removeClass('moveFromLeft');
                $('.card-2').removeClass('moveFromBottom');
                $('.card-3').removeClass('moveFromRight');
                */
    })();
    //   }

    //    });

});//end document on load


const name = document.getElementById('name');
const email = document.getElementById('email');
const button_submit = document.getElementById('button-submit');
const button_signup = document.getElementById('button-signup');

button_submit.addEventListener('click', (e) => {
    e.preventDefault();
    alert('you wish to contact us');
});

button_signup.addEventListener('click', (e) => {
    e.preventDefault();
    alert('you wish to signup ');
});