var Team = DS.Model.extend({
  name: DS.attr('string')
});

Team.reopenClass({
  FIXTURES: [
    { id: 1, name: 'City Team' },
    { id: 2, name: 'State Club' }
  ]
});

export default Team;
