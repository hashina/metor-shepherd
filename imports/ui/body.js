import { Template } from 'meteor/templating';

import { OrbiterTours } from '../api/collections.js';

import './body.html';

Template.main.onCreated(function() {
  Meteor.subscribe("tours");
});


