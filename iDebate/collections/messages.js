Messages = new Mongo.Collection( 'messages' );

Messages.schema = new SimpleSchema({
  channel: {
    type: String
  },
  owner: {
    type: String
  },
  timestamp: {
    type: Date
  },
  message: {
    type: String
  }
});
