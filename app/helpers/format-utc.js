import Ember from 'ember';

export function formatUtc(params/*, hash*/) {
	var final = '';
	var start = Date.now();
	var utc = params[0];
	var time = (Math.floor(start/1000) - utc);
	time = Math.floor(time/3600);

	if (time > 1) {
		final = time + " hours";
	}
	else {
		final = " less than one hour";
	}
	return final;
}

export default Ember.Helper.helper(formatUtc);
