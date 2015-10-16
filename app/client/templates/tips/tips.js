/*****************************************************************************/
/* Tips: Event Handlers */
/*****************************************************************************/
Template.Tips.events({
});

/*****************************************************************************/
/* Tips: Helpers */
/*****************************************************************************/
Template.Tips.helpers({
    tips: function () {
        return Tips.find();
    },
    getAQuote: function () {
        var quoteToGet = Tips.findOne({_id: this._id});
        return quoteToGet;
    }
});

/*****************************************************************************/
/* Tips: Lifecycle Hooks */
/*****************************************************************************/
Template.Tips.onCreated(function () {
});

Template.Tips.onRendered(function () {
});

Template.Tips.onDestroyed(function () {
});
