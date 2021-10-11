var poll = function(time = 1000) {
    if (!sendRequest()) {
        return setTimeout(poll, time, time * 1.5);
    }
}