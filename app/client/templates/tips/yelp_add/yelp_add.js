/*****************************************************************************/
/* YelpAdd: Event Handlers */
/*****************************************************************************/
Template.YelpAdd.events({
});

/*****************************************************************************/
/* YelpAdd: Helpers */
/*****************************************************************************/
Template.YelpAdd.helpers({
    guides: function () {
        return Guides.find({_id: Session.get('ActiveGuide')});
    }
});

/*****************************************************************************/
/* YelpAdd: Lifecycle Hooks */
/*****************************************************************************/
Template.YelpAdd.onCreated(function () {
});

Template.YelpAdd.onRendered(function () {
});

Template.YelpAdd.onDestroyed(function () {
});
