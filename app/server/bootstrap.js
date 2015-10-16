Meteor.startup(function () {
    if (Tips.find().count() === 0) {
        Tips.insert({
            forGuideId: 'MpzJhCGoxe98xJrN8',
            userId: '43s4ZviDKKmjB8whG',
            title: 'Saraghina',
            type: 'point',
            coordinates: [-73.93536, 40.683621],
            neighborhood: 'Bedford-Stuyvesant',
            street: '435 Halsey St',
            city: 'Brooklyn',
            region: 'NY',
            postal: '11233',
            phone: '123-456-7890',
            website: 'http://www.saraghinaprobably.com',
            quote: 'Perfect for brunch after checking out museums and shops.',
            venueType: 'Restaurant',
            venueCategories: ['Italian','Brunch','Pizza','Lunch','Dinner'],
            yelpID: 'saraghina-brooklyn',
            addedOn: new Date()
        });
    }
});

Meteor.startup(function () {
    if (Guides.find().count() === 0) {
        Guides.insert({
            createdBy: '43s4ZviDKKmjB8whG',
            requestedBy: '',
            accessibleTo: [''],
            destination: 'New York City',
            title: 'Shaun\'s Guide to New York City for Random Person',
            addedOn: new Date()
        });
    };
});