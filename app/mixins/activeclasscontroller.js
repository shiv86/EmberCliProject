import Ember from 'ember';


export default Ember.Mixin.create({
    isHome: '',
    isPosts: '',
    isAbout: '',

    sayAlert: function(sayAlert){
    	alert(sayAlert);
    },

    setActiveClass: function(routeName) {
        //alert('called setActiveClass:' + routeName);
        if ((routeName === 'isHome') || (routeName === 'application') || (routeName === 'index')) {
            this.set('isHome', 'active');
            this.set('isPosts', '');
            this.set('isAbout', '');
        }

        if (routeName === 'isPosts' || (routeName === 'posts')) {
            this.set('isPosts', 'active');
            this.set('isHome', '');
            this.set('isAbout', '');
        }

        if (routeName === 'isAbout' || (routeName === 'about')) {
            this.set('isAbout', 'active');
            this.set('isPosts', '');
            this.set('isHome', '');
        }

    },

    actions: {
        clickedAction: function(routeName) {
            this.setActiveClass(routeName);
        }
    }
});
