//MODAL 1

var modalToggle = document.querySelector('.modal-toggle');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalToggle.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
});


//MODAL 2

var modalToggle2 = document.querySelector('.modal-toggle2');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose2 = document.querySelector('.modal-close2');

modalToggle2.addEventListener('click', function () {
    modalBg2.classList.add('bg-active');
});

modalClose2.addEventListener('click', function () {
    modalBg2.classList.remove('bg-active');
});

//MODAL 3

var modalToggle3 = document.querySelector('.modal-toggle3');
var modalBg3 = document.querySelector('.modal-bg3');
var modalClose3 = document.querySelector('.modal-close3');

modalToggle3.addEventListener('click', function () {
    modalBg3.classList.add('bg-active');
});

modalClose3.addEventListener('click', function () {
    modalBg3.classList.remove('bg-active');
});

//MODAL 4

var modalToggle4 = document.querySelector('.modal-toggle4');
var modalBg4 = document.querySelector('.modal-bg4');
var modalClose4 = document.querySelector('.modal-close4');

modalToggle4.addEventListener('click', function () {
    modalBg4.classList.add('bg-active');
});

modalClose4.addEventListener('click', function () {
    modalBg4.classList.remove('bg-active');
});

//MISC.

//Trying to close modal if clicking outside the modal-body

//$(document).ready(function () {
//    $('body').click(function () {
//        $('.modal').hide()
//    });
//});

//$("body").click(function () {
//    if ($(".modal").is(":visible")) {
//        $(".modal").hide();
//    }
//});