import { Template } from 'meteor/templating';
import './main.html';

Template.main.helpers({
  userID() {
    return Meteor.user().services.twitter.id
  },

  sName() {
    return Meteor.user().services.twitter.screenName
  },

  ulink() {
    return "https://twitter.com/" + Meteor.user().services.twitter.screenName
  },
});

Template.main.events({
  'click button#submit'(e) {
    console.log("example event:", e)
  }
});

Template.main.onRendered(function() {
  console.log("page rendered!")
})

