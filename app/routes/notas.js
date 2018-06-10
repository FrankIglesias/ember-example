import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    this.get('store').createRecord('nota', {
        materia: 'Rails is Omakase',
        promedio: 3
    });
    return this.get('store').findAll('nota');
  }
});
