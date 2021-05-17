import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ScoreService extends Service {
  @tracked scores = [];
  over = 0;
  @tracked total_score = 0;
  @tracked wickets_remaining = 10;
  last_over_score = 0;
  get get_scores() {
    return this.scores;
  }
  @action
  add(score) {
    if (this.scores.length >= 6) {
      this.over += 1;
    }
    this.scores = [...this.scores, score];
    if (score !== 'out') {
      this.total_score += parseInt(score);
    }
    else {
      this.wickets_remaining -= 1;
    }
  }
}
