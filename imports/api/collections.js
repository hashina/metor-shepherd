import { Mongo } from 'meteor/mongo';

OrbiterTours = new Mongo.Collection('orbiterTours');

var Schemas = {};

OrbiterToursSchema = new SimpleSchema({

  "defaults": {
    type: Array
  },
  "defaults.$": {
    type: Object
  },
  "defaults.$.classes": {
    type: String
  },
  "defaults.$.scrollTo": {
    type: Boolean
  },
  "steps": {
    type: Array,
  },
  "steps.$": {
    type: Object
  },
  "steps.$.name": {
    type: String
  },
  "steps.$.text": {
    type: String
  },
  "steps.$.attachTo": {
    type: String
  },
  "Steps.$.customClasses": {
    type: String
  },
  "buttons": {
    type: Array
  },
  "buttons.$": {
    type: Object
  },
  "buttons.$.text": {
    type: String
  }
})

OrbiterTours.attachSchema(OrbiterToursSchema);
