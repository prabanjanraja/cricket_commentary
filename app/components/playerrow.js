import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class PlayerrowComponent extends Component {
  @action
  shift(input) {
    console.log(input);
    return input[0];
  }
}
