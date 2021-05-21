import Component from '@glimmer/component';
import { inject as service } from '@ember/service';



export default class ScorestableComponent extends Component {

  @service('score') scores_service;

  get over_score() {
    var ret = []
    var len = this.scores_service.scores.length;
    var cur_ovr = -1;
    var sum = 0;
    console.log('len', len);
    for (var i = 0; i < len + 5 - ((len - 1) % 6); i++) {
      if (i % 6 === 0) {
        if (i !== 0)
          ret[cur_ovr] = [...ret[cur_ovr], sum.toString()];
        cur_ovr += 1;
        ret = [...ret, [(cur_ovr + 1)]];
        sum = 0;
      }
      if (i < len)
        ret[cur_ovr] = [...ret[cur_ovr], this.scores_service.scores[i]];
      else
        ret[cur_ovr] = [...ret[cur_ovr], ' '];
      if (!isNaN(this.scores_service.scores[i]) && this.scores_service.scores[i]) {
        sum = parseInt(sum) + parseInt(this.scores_service.scores[i]);
      }
    }
    ret[cur_ovr] = [...ret[cur_ovr], sum.toString()];
    console.log(sum);
    return ret;
  }
}
