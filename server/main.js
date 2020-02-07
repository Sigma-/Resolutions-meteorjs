import { Meteor } from 'meteor/meteor';

Resolutions = new Mongo.Collection("resolutions");

Meteor.startup(() => {

});


Meteor.methods({
  addResolution(resolution) {
    check(resolution, String);
    if(!Meteor.userId()){
      throw new Meteor.Error('non-authorized');
    }
    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },

  toggleResolution(resolution) {
    check(resolution, Object);
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error('non-authorized');
    }
    Resolutions.update(resolution._id, {
      $set: {complete: !resolution.complete}
    })
  },

  deleteResolution(resolution){
    check(resolution, Object);
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error('non-authorized');
    }
    Resolutions.remove(resolution._id);
  }
});

Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});

Meteor.publish("userResolutions", function() {
  return Resolutions.find({user: this.userId});
});
