import css from '../css/custom.css';
import 'jquery';

import { NewsService } from './news.service';
import { NewsUI } from './news.ui.service';
import { NotificationUI } from './notification.ui.service';

const newsService = new NewsService();
const uiService = new NewsUI();
const notificationUI = new NotificationUI();

//UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = document.getElementById('search');


/**
 * onSelectChange - process the response from the server 
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function onSelectChange() {
  const country = countrySelect.value;
  const category = categorySelect.value;
  if (!country || !category) return console.error('Please, select some country and category');
  newsService.getTopHeadlinesNews(country, category, (response) => {
    const { totalResults, articles } = response;

    uiService.clearContainer();

    articles.forEach((article) => uiService.addArticle(article));  
  });
}


/**
 * onInputChange - processes the response from the server
 * @return {[type]} [description]
 */
function onInputChange() {
  const keyWords = searchInput.value;

  if (keyWords.length > 3) {
    newsService.getEverythingNews(keyWords, (response) => {
      const { totalResults, articles } = response;

      uiService.clearContainer();

      if (!totalResults) {
        notificationUI.addNotification('Sorry, but nothing was found:('); 
        return;  
      };

      articles.forEach((article) => uiService.addArticle(article));  

      notificationUI.clearContainer();

    })
  }
}


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);

searchInput.addEventListener('input', onInputChange);


