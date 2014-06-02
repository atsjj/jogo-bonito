var Player = DS.Model.extend({
  name:   DS.attr('string'),
  phone:  DS.attr('string'),
  email:  DS.attr('string')
});

Player.reopenClass({
  FIXTURES: [
    { id: 1, name: 'John Doe', phone: '(555) 555-5555', email: 'address@domain.com' },
    { id: 2, name: 'Jane Doe', phone: '(555) 555-5555', email: 'address@domain.com' }
  ]
});

export default Player;
