/*****************************************************************************/
/* Guides: Event Handlers */
/*****************************************************************************/
Template.Guides.events({
});

/*****************************************************************************/
/* Guides: Helpers */
/*****************************************************************************/
Template.Guides.helpers({
    guides: function () {
        return Guides.find({createdBy: Meteor.userId()}, { sort: { createdAt: -1} })
    }

});

/*****************************************************************************/
/* Guides: Lifecycle Hooks */
/*****************************************************************************/
Template.Guides.onCreated(function () {
});

Template.Guides.onRendered(function () {
});

Template.Guides.onDestroyed(function () {
});
