/**
* Templates
*/
if (Meteor.isClient) {
  var urlParams = new URLSearchParams(window.location.search);
  var channel = urlParams.get('channel');
  var countDownMinutes = 30;
  var countDownSeconds = 0;
  Session.set('timer', countDownMinutes + ":" + countDownSeconds);
  
  
  Template.comment.helpers({
    channel: function() {
      return channel;
    },
    timer: function() {
      return Session.get('timer');
    }
  })
  
  Template.messages.helpers({
    messages: function() {
    return Messages.find({channel: channel}, { sort: { timestamp: 1}});
  }
  });



  Template.input.events = {
    'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event

      var name = 'John Tang';
        var message = document.getElementById('message');
        if (message.value != '') {
          Messages.insert({
            owner: name,
            message: message.value,
            timestamp: Date.now(),
            channel: channel
          });

          document.getElementById('message').value = '';
          message.value = '';
        }
      }
    }
  }
}