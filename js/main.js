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



var v = new Vue({
    el: '#app',
    data: {}
})