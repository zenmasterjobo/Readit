import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL,
	didTransition: function() {
	this._super(...arguments);
	window.scrollTo(0, 0);
	}
});
 
Router.map(function() {
	this.route('feed');
	this.route('comments', {
	path: 'post/:comments_sub/:comments_id'
	});
	this.route('subreddit', {
	path: 'r/:subreddit_id'
	});
});

export default Router;
