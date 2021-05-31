import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CustombuttonComponent extends Component {
  @service('score') scores_service;
  player = this.args.player_name;
  isSuccess = this.scores_service.isCurrentPlayer(this.player);
  isDisabled = !(this.scores_service.isValid(this.player) || this.isSuccess);
}
