import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class OverdetailsComponent extends Component {
  @service('score') scores_service;

}
