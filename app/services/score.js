import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ScoreService extends Service {
  @tracked
  scores = [false];
  @tracked over = 0;
  total_runs = 5;
  total_overs = 1;
  playing_team = "Chennai Super Kings";
  @tracked total_score = 0;
  @tracked player_names = ['player 1', 'player 2', 'player 3', 'player 4', 'player 5', 'player 6', 'player 7', 'player 8', 'player 9', 'player 10'];
  @tracked players_score1 = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
  @tracked wickets_remaining = 10;
  @tracked players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @tracked players_score = this.precompute();
  precompute() {
    var players_scores = Map;
    this.player_names.forEach(element => {
      players_scores[element] = 0;
    });
    return players_scores;
  }
  print_scores() {
    this.player_names.forEach(element => {
      console.log(element, this.players_score[element]);
    });
  }
  players_remaining = [...this.player_names];
  current_player = this.players_remaining.shift();
  get get_scores() {
    return this.scores;
  }
  @action
  add(score) {
    if ((this.scores.length !== 0) && this.scores.length % 6 === 0) {
      this.over += 1;
    }
    if (score >= 4) {
      alert('Hurray !!!');
    }
    this.scores.pop();
    this.scores = [...this.scores, score, false];
    if (score !== 'out' && score !== '.') {
      this.total_score += parseInt(score);
      this.players_score[this.current_player] = parseInt(this.players_score[this.current_player]);
      this.players_score[this.current_player] += parseInt(score);
    }
    else if (score !== '.') {
      this.current_player = this.players_remaining.shift();
      console.log(this.current_player);
      console.log(this.players_remaining);
      this.wickets_remaining -= 1;
    }
    this.players_score = this.players_score; // to update the UI
  }
  isValid(player_name) {
    return this.players_remaining.includes(player_name);
  }
  isCurrentPlayer(player_name) {
    return this.current_player === player_name;
  }
  @action
  choose_player(player_name) {
    if (this.isValid(player_name)) {
      this.players_remaining = [...this.players_remaining, this.current_player];
      this.current_player = player_name;
      this.players_score = this.players_score; // so the component will update
      var index = this.players_remaining.indexOf(player_name);
      this.players_remaining.splice(index, 1);
    } else {
      alert('Invalid choice');
    }
  }
  get remaining_score() {
    return this.total_runs - this.total_score;
  }
  get isGameOver() {
    let ans = this.wickets_remaining === 0 || this.remaining_score <= 0 || this.over >= this.total_overs;
    return !ans;
  }
}
