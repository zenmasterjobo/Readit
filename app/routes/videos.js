import Ember from 'ember';

export default Ember.Route.extend({
	model(){	
		var url = "https://www.reddit.com/r/videos/.json";
		return Ember.$.getJSON(url);
	}
});
