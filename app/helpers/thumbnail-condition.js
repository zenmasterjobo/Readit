import Ember from 'ember';

export function thumbnailCondition(params/*, hash*/) {
	var thumbnail = params[0];
	if (thumbnail === 'nsfw' || thumbnail === 'default' || thumbnail === 'self' || thumbnail === 'image') {
		thumbnail = 0;
	}
	return thumbnail;
}

export default Ember.Helper.helper(thumbnailCondition);
