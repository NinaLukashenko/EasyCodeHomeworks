import { NewsService } from './../services/news.service';

export class NewsComponent {
  constructor() {
  this._newsService = new NewsService();
  this._news;
}

  async beforeRender() {
    this._news = await this._newsService.getNews();
    this._firstNews = this._news.news[0];
  }

  render() {
    return `
    <div class="container">
      <h2>Last news:</h2>
      <div class="card">
        <div class="card-header">${this._firstNews.owner.full_name}</div>
        <div class="card-body">
        <img src=${this._firstNews.pictures[0].url} class="img-fluid" style="max-height:550px;">
        </div> 
      </div>
    </div>
    `;
  }

  afterRender() {
  }
}