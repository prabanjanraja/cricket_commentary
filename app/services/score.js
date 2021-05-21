import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ScoreService extends Service {
  @tracked
  scores = [false];
  over = 0;
  @tracked total_score = 0;
  @tracked player_names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  @tracked players_score = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
  @tracked wickets_remaining = 10;
  @tracked players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @tracked current_players = [0, 1];
  get current_player() {
    return this.player_names[this.current_players[0]];
  }
  get get_scores() {
    return this.scores;
  }
  swap_players() {
    this.current_players = [this.current_players[1], this.current_players[0]];
  }
  @action
  add(score) {
    if ((this.scores.length !== 0) && this.scores.length % 6 === 0) {
      this.over += 1;
      this.swap_players();
    }
    if (score >= 4) {
      alert('Hurray !!!');
    }
    this.scores.pop();
    this.scores = [...this.scores, score, false];
    if (score !== 'out' && score !== '.') {
      this.total_score += parseInt(score);
      this.players_score[this.current_players[0]] = parseInt(this.players_score[this.current_players[0]]);
      this.players_score[this.current_players[0]] += parseInt(score);
      if (score % 2 === 1)
        this.swap_players();
      else
        this.current_players = this.current_players;
    }
    else {
      this.current_players = [this.current_players[1], 12 - this.wickets_remaining];
      this.wickets_remaining -= 1;
    }
  }
}
