import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.resource('index', { path: '/'});
  this.resource('about');
  this.resource('posts', function(){
      this.resource('post', {path: '/post/:post_id'});
  });
});





export default Router;
