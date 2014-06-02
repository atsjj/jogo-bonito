var Season = DS.Model.extend({
  name:   DS.attr('string'),
  start:  DS.attr('date'),
  end:    DS.attr('date')
});

Season.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Season 1', start: '2014-06-01T00:00:00Z', end: '2014-06-30T00:00:00Z' },
    { id: 2, name: 'Season 2', start: '2014-07-01T00:00:00Z', end: '2014-07-31T00:00:00Z' }
  ]
});

export default Season;
