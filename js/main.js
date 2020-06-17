if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'down': function () {
            window.scrollBy({
                top: 700,
                behavior: "smooth"
            })
        },
        'up': function () {
            window.scrollBy({
                top: -700,
                behavior: "smooth"
            })

        },
        'next': function () {
            $(".slick-next").click()
        },
        'back': function () {
            $(".slick-prev").click()

        },
        'home': function () {
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        },
        'end': function () {
            window.scroll({
                top: 100000000000000000000,
                behavior: "smooth"
            })
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
        msg: 'You can navigate through the website using Voice command. Say "down" to scroll down. And Say "UP" to scroll Up. You can also navigate through slide with saying"Next" and "Back"'
    },

    mounted() {
        alert(this.msg)
    }
})