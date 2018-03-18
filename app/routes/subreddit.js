import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
			var subreddit = params.subreddit_id;
			var url = "http://www.reddit.com/r/"+subreddit+"/.json";
			return Ember.$.getJSON(url);
	}
});
