import Ember from 'ember';

export function formatUtc(params/*, hash*/) {
	var start = Date.now();
	var utc = params[0];
	var final = (Math.floor(start/1000) - utc);
	final = Math.floor(final/3600);
	return final;
}

export default Ember.Helper.helper(formatUtc);
