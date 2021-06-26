import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ResultComponent extends Component {
  @service('score') scores_service;
  result = this.scores_service.remaining_score <= 0 ? "Won" : "Lost";
  get manofmatch() {
    var manofmatch;
    var max = 0;
    this.scores_service.player_names.forEach(element => {
      if (this.scores_service.players_score[element] > max) {
        max = this.scores_service.players_score[element];
        manofmatch = element;
      }
    });
    return manofmatch;
  }
}
