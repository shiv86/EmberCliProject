import Ember from 'ember';
import ActiveclassMixin from 'embercliapp/mixins/activeclasscontroller';

module('ActiveclassMixin');

// Replace this with your real tests.
test('it works', function() {
  var ActiveclassObject = Ember.Object.extend(ActiveclassMixin);
  var subject = ActiveclassObject.create();
  ok(subject);
});
