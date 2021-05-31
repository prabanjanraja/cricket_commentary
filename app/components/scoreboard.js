import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';



export default class ScoreboardComponent extends Component {
  @tracked display = true;
  @tracked button_text = "Display";
  @action
  toggle() {
    this.button_text = "Hide";
    this.display = !this.display;
  }


  playing_team = "Chennai Super Kings";
  current_over = 0;
  @service('score') scores_service;

  get remaining_score() {
    return this.scores_service.total_runs - this.scores_service.total_score;
  }

}
