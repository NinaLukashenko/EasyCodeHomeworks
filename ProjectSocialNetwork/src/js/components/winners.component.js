import { WinnersService } from '../services/winners.service';

export class WinnersComponent {
  constructor() {
    this._winnersService = new WinnersService();
    this._winners;
  }

  async beforeRender() {
    this._winners = await this._winnersService.getWinners(15, 1);
  }
 
  // render() {
  //   document.querySelector('app-container').insertAdjacentHTML('afterend', `
  //     <div class="container">
  //       <div class="row winners">
  //       </div>
  //     </div>
  //   `);

  //   this._winners.winners.forEach( (item) => {
  //     return document.querySelector('.winners').insertAdjacentHTML('beforeend', `
  //     <div class="col-3">          
  //       <img src="${item.member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
  //     </div>
  //   `);})
  //   return `<h2>The Winners!</h2>`
  // }

  render() {
    return `
      <div class="container">
        <h2>The Winners!</h2> 
        <div class="row">
          <div class="col-3">          
            <img src="${this._winners.winners[0].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
          <div class="col-3">          
            <img src="${this._winners.winners[1].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
          <div class="col-3">          
            <img src="${this._winners.winners[2].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
          <div class="col-3">          
            <img src="${this._winners.winners[3].member_id.images[0].image_basic.url}" class="rounded img-fluid"> 
          </div>
        </div>
      </div>
    `;
  }

  afterRender() {
  }
}