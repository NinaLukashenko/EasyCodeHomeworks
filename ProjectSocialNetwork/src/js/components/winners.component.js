import { WinnersService } from '../services/winners.service';

export class WinnersComponent {
  constructor() {
    this._winnersService = new WinnersService();
    this._winners;
  }

  async beforeRender() {
    this._winners = await this._winnersService.getWinners(15, 1);
    this._winnersTemplates = this._winners.winners.map ((winner) => {
      return this._singleWinnerTemplate(winner);
    })
  }
 
  render() {
    return `
      <div class="container">
        <h2>The Winners!</h2> 
        <div class="row">
          ${this._winnersTemplates.join('')}
        </div>
      </div>
    `;
  }

_singleWinnerTemplate(winner) {
  return `
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card">
        <img class="card-img-top" src="${winner.member_id.images[0].image_basic.url}">
        <div class="card-body">
          <h4 class="card-title">${winner.member_id.user_id.full_name}</h4>
        </div>
      </div>
    </div>
  `;
}

  afterRender() {
  }
}