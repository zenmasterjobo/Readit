import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('feed');
  this.route('comments', {
      path: ':comments_sub/:comments_id'
  });
  this.route('videos');
});

export default Router;
