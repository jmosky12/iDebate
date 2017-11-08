Users = new Mongo.Collection( 'users' );

Users.schema = new SimpleSchema({
  name: {
    type: String
  },
  interests: {
    type: [String]
  }
});
