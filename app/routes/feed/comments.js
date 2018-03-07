import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		var id = params.comments_id;
		var sub = params.comments_sub;
		var url = "http://www.reddit.com/"+sub+"/comments/"+id+"/.json";
		return Ember.$.getJSON(url);
	}
});
