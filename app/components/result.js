import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ResultComponent extends Component {
  @service('score') scores_service;
  result = this.scores_service.remaining_score <= 0 ? "Won" : "Lost";
}
