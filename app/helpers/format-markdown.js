import Ember from 'ember';
/* global Showdown */

export function formatMarkdown(input) {	
	var converter = new Showdown.converter();
	return new Ember.Handlebars.SafeString(converter.makeHtml(input));
}

export default Ember.Handlebars.makeBoundHelper(formatMarkdown);
