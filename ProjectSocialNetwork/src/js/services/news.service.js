import { Http } from './../core/http.service';
import { ENV } from './../config/env.config';
import { AuthService } from './auth.service';

export class NewsService {
  constructor() {
    this._authService = new AuthService();
    this._authUserToken = this._authService.userToken;
  }

  getNews() {
    const http = new Http();

    return new Promise((resolve, reject) => {
      http.get(`${ENV.apiUrl}/public/news`, `${this._authUserToken}`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  }
}

