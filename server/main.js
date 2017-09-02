import { Meteor } from 'meteor/meteor';
import Twit from 'twit';

// API configuration

Meteor.startup(() => {

  // first, remove configuration in case service is already configured
  ServiceConfiguration.configurations.remove({ service: "twitter" })

  // next, source the token data from the private folder
  const oAuth = JSON.parse(Assets.getText("oauth.json"))
  const twAuth = JSON.parse(Assets.getText("twit.json"))

  // then, add it to the service configuration
  ServiceConfiguration.configurations.insert(oAuth)

  // starting up twit api
  T = new Twit(twAuth)

  // Twit library: https://github.com/ttezel/twit

  // example: get 10 followers of @berkeley

  T.get('followers/ids', {
    screen_name: 'berkeley',
    count: 10
  }, function (err, data, response) {

    // print out data
    console.log(data)

  })

})
