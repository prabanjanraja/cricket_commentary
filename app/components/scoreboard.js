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


  current_over = 0;
  @service('score') scores_service;

  @tracked remaining_score = this.scores_service.remaining_score;

}
