var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('teams', function() {
    this.resource('team', function() {});
  });

  this.resource('players', function() {
    this.resource('player', function() {});
  });
});

export default Router;
