Meteor.publish("tours", function() {
  return OrbiterTours.find();
})
