import Component from '@glimmer/component';
import { action } from '@ember/object';
import MyModifier from '../modifiers/my-modifier';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked myValue = 1;

  myModifier = MyModifier;

  @action
  updateMyValue() {
    this.myValue++;
  }
}
