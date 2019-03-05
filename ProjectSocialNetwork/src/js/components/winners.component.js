import { WinnersService } from '../services/winners.service';

export class WinnersComponent {
  constructor() {
    this._winnersService = new WinnersService();
    this._winnes;
  }

  async beforeRender() {
    this._winnes = await this._winnersService.getWinners(15, 1);
    console.log(this._winnes.winners[0].member_id.images[0].image_basic.url);
    // console.log(this._winnes.winners);
  }

  render() {
    return `
      <div class="container">
        <h2>The Winners!</h2> 
        <div class="row">
          <div class="col-3">          
            <img src="${this._winnes.winners[0].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
          <div class="col-3">          
            <img src="${this._winnes.winners[1].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
          <div class="col-3">          
            <img src="${this._winnes.winners[2].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
          <div class="col-3">          
            <img src="${this._winnes.winners[3].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
        </div>
      </div>
    `;
  }

  afterRender() {
  }
}