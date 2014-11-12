import Ember from 'ember';

export default Ember.Mixin.create({
/*
    activate: function(){
        var routeName = this.get('routeName');
        var controller = this.controllerFor('application');
        //controller.sayAlert('ActiveClassRouteMixin: routeName ' + routeName);

       // controller.setActiveClass(routeName);
    },

    */
    setupController: function(controller,model) {
        this._super(controller,model);
      	var routeName = this.get('routeName');
        this.controllerFor('application').setActiveClass(routeName);
      }
});
