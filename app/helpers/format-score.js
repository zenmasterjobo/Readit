import Ember from 'ember';

export function formatScore(params/*, hash*/) {
	var score = params[0];
	if (score/1000 >= 1) {
		score = score/1000;
		score = Math.round(score * 10) / 10;
		score = score + "K";
	}
	return score;
}

export default Ember.Helper.helper(formatScore);
