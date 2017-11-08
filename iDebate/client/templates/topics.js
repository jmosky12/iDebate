Template.topics.onRendered(function() {
    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            Session.set('topic_timer', minutes + ":" + seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }


    startTimer(60*10);
});

Template.topics.helpers({
    topic_timer: function() {
        return Session.get('topic_timer');
    }
});