export class NotFoundComponent {
  constructor() {}

  async beforeRender() {
  }
  
  render() {
    return `
      <div> Not Found. 404</div>
    `;
  }

  afterRender() {}
}