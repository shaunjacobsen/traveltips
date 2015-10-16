/*****************************************************************************/
/* AddTip: Event Handlers */
/*****************************************************************************/
Template.AddTip.events({
    'submit form': function(e) {
        e.preventDefault();

        var guideId = Router.current().params._guideId;

        var tip = {
            forGuideId: guideId,
            type: e.target.type.value,
            title: e.target.title.value,
            geoType: e.target.geoType.value,
            venueType: e.target.venueType.value,
            venueCategories: e.target.venueCategories.value,
            coordinates: [ -87.666717, 41.966483 ], // dummy values for now
            neighborhood: e.target.neighborhood.value,
            street: e.target.street.value,
            city: e.target.city.value,
            region: e.target.region.value,
            postal: e.target.postal.value,
            phone: e.target.phone.value,
            website: e.target.website.value,
            yelpId: e.target.yelpId.value,
            shortTip: e.target.shortTip.value
        };

        Meteor.call('tipInsert', tip, function (error, result) {
            if (error) {
                throwError(error.reason);
            }

            Router.go('guideItem', {_id: guideId });
        });

    }
});

/*****************************************************************************/
/* AddTip: Helpers */
/*****************************************************************************/
Template.AddTip.helpers({
    venuetypes: function () {
        return Venuetypes.find();
    },
    currentGuide: function () {
        var paramsGuide = Router.current().params._guideId;
        var selectedGuide = Guides.findOne(paramsGuide);
        return selectedGuide ? selectedGuide.title : '...';
    }
});

/*****************************************************************************/
/* AddTip: Lifecycle Hooks */
/*****************************************************************************/
Template.AddTip.onCreated(function () {
});

Template.AddTip.onRendered(function () {
    // Enable two Manual Add forms
    $(document).ready(function() {
        $("input[name$='type']").click(function() {
            var test = $(this).val();

            $("div.switch-form").hide();
            $("#type" + test).show();
        });
    });
});

Template.AddTip.onDestroyed(function () {
});
