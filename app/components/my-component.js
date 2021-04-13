import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked myValue = 1;

  myModifier1 = modifier(() => {
    console.log('install or update (modifier 1)');
    return () => console.log('teardown');
  });

  myModifier2 = modifier(() => {
    console.log('install or update (modifier 2)');
    return () => console.log('teardown');
  });

  @action
  updateMyValue() {
    this.myValue++;
  }
}
