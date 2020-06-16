if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'scroll down': function () {
            window.scroll(0, 100)
        }
    }
};

annyang.addCommands(commands);
annyang.start();



var v = new Vue({
    el: '#app',
    data: {}
})