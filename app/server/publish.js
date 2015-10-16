Meteor.publish('tips', function () {
  return Tips.find();
});

Meteor.publish('tipsForGuide', function (guideId) {
    return Tips.find({forGuideId: guideId});
});

Meteor.publish('guides', function () {
  return Guides.find({createdBy: this.userId});
});

Meteor.publish('guide', function (id) {
  return Guides.find({_id: id});
});

Meteor.publish('venuetypes', function () {
    return Venuetypes.find();
});