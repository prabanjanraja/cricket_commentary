import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ScoreService extends Service {
  @tracked
  scores = [false];
  over = 0;
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
  /* @tracked current_players = [0, 1];
  get current_player() {
    return this.player_names[this.current_players[0]];
  } */
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
    else {
      // console.log("before splice", this.players_remaining);
      // this.players_remaining.splice(index, 1);
      console.log("after splice", this.players_remaining);
      this.current_player = this.players_remaining.shift();
      console.log(this.current_player);
      console.log(this.players_remaining);
      this.wickets_remaining -= 1;
    }
    this.players_score = this.players_score;
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
      // console.log("swithc players ", this.players_remaining);
    } else {
      alert('Invalid choice');
    }
  }
}
