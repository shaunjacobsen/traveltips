/*****************************************************************************/
/* GuideItem: Event Handlers */
/*****************************************************************************/
Template.GuideItem.events({
});

/*****************************************************************************/
/* GuideItem: Helpers */
/*****************************************************************************/
Template.GuideItem.helpers({
    tip: function () {
        thisGuide = Router.current().params._id;
        return Tips.find({forGuideId: thisGuide});
    }
});

/*****************************************************************************/
/* GuideItem: Lifecycle Hooks */
/*****************************************************************************/
Template.GuideItem.onCreated(function () {
});

Template.GuideItem.onRendered(function () {
    initPackery();
    $container.packery();
});

Template.GuideItem.onDestroyed(function () {
});

var initPackery = function () {
    // initialize packery
    var $container = $('#container');
    $container.packery({
        itemSelector: '.card',
        gutter: 10
    });
    // once images have loaded, re-load packery
    $container.imagesLoaded(function () {
        $container.packery();
    });
}