Package.describe({
    name: 'yelp',
    summary: 'Yelp package',
    version: '1.0.0'
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.4');
    api.addFiles('yelp.js', 'server');
    api.export('Yelp');
});