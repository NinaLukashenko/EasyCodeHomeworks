export class NewsUI {
  constructor() {
    this.newsContainer = document.querySelector('.news-wrap .row');
  }

/**
 * addArticle - add an article to the UI
 * @param {Object} article [description]
 */
  addArticle(article) {
    const template = NewsUI.generateArticleTemplate(article);

    this.newsContainer.insertAdjacentHTML('afterbegin', template); 
  }

/**
 * clearContainer description - cleans the container for articles
 * @return {[type]} [description]
 */
  clearContainer() {
    let first = this.newsContainer.firstElementChild;
    while (first) {
      this.newsContainer.removeChild(first);
      first = this.newsContainer.firstElementChild;
    }
  }

/**
 * generateArticleTemplate - creates an article template for adding it to UI
 * @param  {Object} article [description]
 * @return {[type]}         [description]
 */
  static generateArticleTemplate(article) {
    return `
      <div class="col s12 m6">
          <div class="card">
              <div class="card-image">
                  <img src="${article.urlToImage}">
              </div>
              <div class="card-content">
                  <span class="card-title">${article.title || ''}</span>

                  <p>${article.description || ''}</p>
              </div>
              <div class="card-action">
                  <a href="${article.url}" target="_blank">Read more</a>
              </div>
          </div>
      </div>
    `;
  }
}