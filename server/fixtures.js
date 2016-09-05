Meteor.startup(function() {
  if(OrbiterTours.find().count() === 0) {
    OrbiterTours.insert({
      //"defaults.$.classes": 'shepherd-theme-arrows',
      "defaults.$.scrollTo": true,
      "steps.$.name": "step one",
      "steps.$.text": "first step with dynamic shepherd",
      "steps.$.attachTo": "anywhere",
      "Steps.$.customClasses": "example-step-extra-class",
      "buttons.$.text": "next"
    });
  }
})
