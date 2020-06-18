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
        msg: 'Due to COVID19 - You can now use Voice Commands to navigate through our website, and interact with the content. Say "Down" to scroll down, "up" to scroll up. "Home" to get back to the top of the page. "End" to scroll down to the end of the page. And you can also interact with the silder using "Next" and "Back" to navigate between the slides.'
    },

    mounted() {
        alert(this.msg)
    }
})