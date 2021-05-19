import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PersonTableComponent extends Component {
  @service('score') scores;
  demo = [1, 2, 3];
  get current_player() {
    return this.scores.current_player;
  }
  get players_score() {
    return this.scores.players_score;
  }
  get player_record() {
    var services = this.scores;
    var ret = [];
    for (var i = 0; i < 10; i++) {
      var playername = services.players[i];
      if (playername === services.current_player) {
        playername = playername + '*';
      }
      ret = [...ret, [playername, services.players_score[i]]];
    }
    return ret;
  }
}
