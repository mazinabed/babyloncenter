// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}


// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();



//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// slider carousel control


$('.slider_btn_prev').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('prev')
    $('.slider_image_carousel').carousel('prev')
})


$('.slider_btn_next').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('next')
    $('.slider_image_carousel').carousel('next')
})


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
function submitForm() {
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('message').value;

    // Construct mailto link
    var mailtoLink = "mailto:mazin_a_abd@yahoo.com"
        + "?subject=Contact Form Submission"
        + "&body=Full%20Name:%20" + encodeURIComponent(fullName)
        + "%0D%0AEmail:%20" + encodeURIComponent(email)
        + "%0D%0APhone%20Number:%20" + encodeURIComponent(phoneNumber)
        + "%0D%0AMessage:%20" + encodeURIComponent(message);

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
}