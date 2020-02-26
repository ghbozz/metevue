import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

// import '/imports/collections/messages';
// import '/imports/publications/messages';

import App from './App.vue';
import './main.html';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});

Template.navbar.events({
	'click .js-open-login'(event, instance) {
		Modal.show('login_modal');
	},

	'click .js-logout'(event, instance) {
		Meteor.logout();
	}
})

Template.login_modal.onCreated(function() {
	this.autorun(() => {
		if (Meteor.userId()) {
			Modal.hide('login_modal');
		}
	})
})