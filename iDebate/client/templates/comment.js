/**
* Templates
*/
if (Meteor.isClient) {

  Template.comment.helpers({
    channel: function() {
      return Session.get('channel');
    },
    category: function() {
      return Session.get('category');
    }
  })
  
  Template.messages.helpers({
    messages: function() {
      return Messages.find({channel: Session.get('channel')}, { sort: { timestamp: 1}});
    }
  });

  Template.comment.onRendered(function() {
      var urlParams = new URLSearchParams(window.location.search);
      Session.set('channel', urlParams.get('channel'));
      Session.set('category', urlParams.get('category'));
      Session.set('username', 'John Tang');
      Session.set('submitted', false);
  
    
    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            Session.set('comment_timer', minutes + ":" + seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }


    startTimer(60*10);
});

  Template.comment.helpers({
      comment_timer: function() {
          return Session.get('comment_timer');
      },
      submitted: function() {
        return Session.get('submitted');
      }
  });


  Template.input.events = {
    'keydown input#message' : function (event) {
    if (Session.get('submitted')) {
      return;
    }
    if (event.which == 13) { // 13 is the enter key event
      Session.set('submitted', true);
      var name = Session.get('username');
      var message = document.getElementById('message');
      if (message.value != '') {
        Messages.insert({
          owner: name,
          message: message.value,
          timestamp: Date.now(),
          channel: Session.get('channel')
        });

        document.getElementById('message').value = '';
        message.value = ''
      }

    }

  }
  }
}