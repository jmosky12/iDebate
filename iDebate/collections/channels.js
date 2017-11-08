Channels = new Mongo.Collection( 'channels' );

Channels.schema = new SimpleSchema({
  name: {
    type: String
  }
});
