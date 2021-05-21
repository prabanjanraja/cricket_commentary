import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PersonTableComponent extends Component {
  @service('score') scores;

  get
    player_record() {
    var services = this.scores;
    var ret = [];
    for (var i = 0; i < 10; i++) {
      var playername = this.scores.player_names[i];
      if (playername === this.scores.current_player) {
        ret[i] = [this.scores.player_names[i] + '*', services.players_score[i]];
      }
      else
        ret[i] = [this.scores.player_names[i], services.players_score[i]];
    }
    return ret;
  }
}
