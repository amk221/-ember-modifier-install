import Modifier from 'ember-modifier';

export default class MyModifier extends Modifier {
  didInstall() {
    console.log('install');
  }

  didUpdateArguments() {
    console.log('update');
  }

  willDestroy() {
    console.log('destroy');
  }
}
