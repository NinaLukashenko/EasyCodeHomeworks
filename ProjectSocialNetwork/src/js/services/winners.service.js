import { Http } from './../core/http.service';
import { ENV } from './../config/env.config';

export class WinnersService {
  getWinners(limit, part) {
    const http = new Http();

    return new Promise((resolve, reject) => {
      http.get(`${ENV.apiUrl}/public/winners?part=${part}&limit=${limit}`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  }
}