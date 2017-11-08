Topics = new Mongo.Collection( 'topics' );

Topics.schema = new SimpleSchema({
  interest: {
    type: String
  },
  topicText: {
    type: String
  },
  joined: {
      type: Number
  }
});