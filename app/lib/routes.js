Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('tips', {
  name: 'tips',
  controller: 'TipsController',
  where: 'client'
});

Router.route('tips/add/:_guideId', {
    name: 'AddTip',
    controller: 'TipsController',
    where: 'client'
});

Router.route('guides', {
    name: 'guides',
    controller: 'GuidesController',
    where: 'client',
    action: 'list'
});

Router.route('/guides/:_id', {
    name: 'guideItem',
    controller: 'GuidesController',
    where: 'client',
    action: 'item'
});

var requireLogin = function () {
    if (! Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: 'guideItem'});