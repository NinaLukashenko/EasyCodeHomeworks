import { Http } from './../core/http.service';
import { ENV } from './../config/env.config';

export class RegistrationService {
  signup(user) {
    const http = new Http();

    return new Promise((resolve, reject) => {
      http.post(`${ENV.apiUrl}/public/auth/signup`, user)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  }
}