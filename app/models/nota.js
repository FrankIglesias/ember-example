import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  materia: DS.attr(),
  promedio: DS.attr(),

  aprobada: computed('promedio',function() {
    return this.get('promedio') > 6;
  })
});
