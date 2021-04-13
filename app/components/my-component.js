import Component from '@glimmer/component';
import Modifier, { modifier } from 'ember-modifier';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

// class MyModifier extends Modifier {
//   didInstall() {
//     console.log('did install');
//   }

//   didUpdateArguments() {
//     console.log('did update');
//   }

//   willDestroy() {
//     console.log('will destroy');
//   }
// }

export default class MyComponent extends Component {
  @tracked myValue = 1;

  myModifier = modifier(() => {
    console.log('install or update');
    return () => console.log('teardown');
  });

  @action
  updateMyValue() {
    this.myValue++;
  }
}
