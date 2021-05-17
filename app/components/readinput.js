import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ReadinputComponent extends Component {
  @service('score') scores_service;
  @action
  onKeyDown({ target, key }) {
    let text = target.value.trim();
    let hasValue = Boolean(text);
    if (key === 'Enter' && hasValue) {
      target.value = '';
      var score = text;
      if (text === '-1') {
        score = 'out';
        this.wickets += 1;
      }
      this.scores_service.add(score);
    }
  }
}
