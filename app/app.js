import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'jogo-bonito',
  Resolver: Resolver
});

loadInitializers(App, 'jogo-bonito');

export default App;
