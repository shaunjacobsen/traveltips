Tips = new Mongo.Collection('tips');

Meteor.methods({
    tipInsert: function (tipAttributes) {
        check(Meteor.userId(), String);

        var user = Meteor.user();
        var tip = _.extend(tipAttributes, {
            userId: user._id,
            submitted: new Date()
        });

        var tipId = Tips.insert(tip);

        return {
            _id: tipId
        };
    }
});

if (Meteor.isServer) {
  Tips.allow({
    insert: function (userId, doc) {
      return userId === doc.userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
        return userId === doc.userId;
    },

    remove: function (userId, doc) {
        return userId === doc.userId;
    }
  });

}
