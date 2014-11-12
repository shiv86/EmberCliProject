import Ember from 'ember';
import ActiveclassrouteMixin from 'embercliapp/mixins/activeclassroute';

module('ActiveclassrouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var ActiveclassrouteObject = Ember.Object.extend(ActiveclassrouteMixin);
  var subject = ActiveclassrouteObject.create();
  ok(subject);
});
