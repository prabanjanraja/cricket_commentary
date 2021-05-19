import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ScoreService extends Service {
  @tracked scores = [];
  over = 0;
  @tracked total_score = 0;
  @tracked players_score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  @tracked wickets_remaining = 10;
  players = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  @tracked players_rem = ['3', '4', '5', '6', '7', '8', '9', '10'];
  @tracked current_players = ['1', '2'];
  get current_player() {
    return this.current_players[0];
  }
  last_over_score = 0;
  get get_scores() {
    return this.scores;
  }
  @action
  add(score) {
    if ((this.scores.length !== 0) && this.scores.length % 6 === 0) {
      this.over += 1;
      this.current_players = [this.current_players[1], this.current_players[0]];
    }
    if (score > 6) {
      alert('Invalid Input');
      return;
    }
    if (score >= 4) {
      alert('Hurray !!!');
    }
    this.scores = [...this.scores, score];
    if (score !== 'out') {
      this.total_score += parseInt(score);
    }
    else {
      this.current_players = [this.current_players[1], this.players[12 - this.wickets_remaining]];
      this.wickets_remaining -= 1;
    }
  }
}
