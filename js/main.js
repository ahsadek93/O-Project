if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'down': function () {
            window.scrollBy(0, 500)
        },
        'up': function () {
            window.scrollBy(0, -500)

        }
    }
};

annyang.addCommands(commands);
annyang.start();



$(document).ready(function () {
    $('.sliderWrapper').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                arrows: true,
            }
        }]

    });
});

var v = new Vue({
    el: '#app',
    data: {
        msg: 'You can navigate through the website using Voice command. Say "down" to scroll down. And Say "UP" to scroll Up'
    },

    created() {
        alert(this.msg)
    }
})