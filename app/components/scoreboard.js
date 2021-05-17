import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';



export default class ScoreboardComponent extends Component {
  @tracked display = false;

  @action
  toggle() {
    this.display = !this.display;
  }

  total_runs = 200;
  total_overs = 20;
  playing_team = "Chennai Super Kings";
  current_over = 0;
  player = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  @service('score') scores_service;

  get remaining_score() {
    return this.total_runs - this.scores_service.total_score;
  }


  get over_score() {
    var ret = []
    var len = this.scores_service.scores.length;
    var cur_ovr = -1;
    var sum = 0;
    for (var i = 0; i < len + (6 - (len % 6)); i++) {
      if (i % 6 === 0) {
        if (i !== 0)
          ret[cur_ovr] = [...ret[cur_ovr], "total " + sum];
        cur_ovr += 1;
        ret = [...ret, ['over ' + (cur_ovr + 1)]];
        sum = 0;
      }
      if (i < len)
        ret[cur_ovr] = [...ret[cur_ovr], this.scores_service.scores[i]];
      else
        ret[cur_ovr] = [...ret[cur_ovr], ' '];
      if (!isNaN(this.scores_service.scores[i]))
        sum = sum + parseInt(this.scores_service.scores[i]);
    }
    ret[cur_ovr] = [...ret[cur_ovr], "total " + sum];
    return ret;
  }
}
