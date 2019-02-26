import { RegistrationService } from './../services/registration.service';

export class SignUpComponent {
  constructor() {
    this._registrationService = new RegistrationService();
  }

  render() {
    return `
      <div class="registration-wrap d-flex mt-5">
          <div class="registration-form col col-6 mx-auto my-auto">
              <h3>Registation to Social.</h3>
              <p class="text-secondary">Please enter requested info to create your social account.</p>
              <form name="registrationForm">
                  <div class="form-group">
                      <input type="email" class="form-control form-control-sm" id="email" placeholder="email" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                      <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                      <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required>
                      <input type="text" class="form-control form-control-sm mt-3" id="first_name" placeholder="first_name" required>
                      <input type="text" class="form-control form-control-sm mt-3" id="last_name" placeholder="last_name" required>
                      <input type="tel" class="form-control form-control-sm mt-3" id="phone" placeholder="phone" required>
                      <input type="text" class="form-control form-control-sm mt-3" id="gender_orientation" placeholder="gender_orientation" required>
                      <input type="text" class="form-control form-control-sm mt-3" id="city" placeholder="city" required>
                      <input type="text" class="form-control form-control-sm mt-3" id="country" placeholder="country" required>
                      <input type="number" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="date_of_birth_day" required>
                      <input type="number" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="date_of_birth_month" required>
                      <input type="number" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="date_of_birth_year" required>
                      <div class="d-flex mt-5">
                        <button type="submit" class="btn btn-primary btn-sm">Sign up</button>
                      </div>
                  </div>
              </form>
          </div>
          <!-- /.registration-form -->
          <div class="registration-bg col col-6">

          </div>
          <!-- /.registration-bg -->
      </div>
      <!-- /.registration-wrap -->
    `;
  }

  afterRender() {

    document.forms['registrationForm'].addEventListener('submit', (e) => {
      e.preventDefault();

      const newUser = {
        email: e.target.elements['email'].value,
        password: e.target.elements['password'].value,
        nickname: e.target.elements['nickname'].value,
        first_name: e.target.elements['first_name'].value,
        last_name: e.target.elements['last_name'].value,
        phone: e.target.elements['phone'].value,
        gender_orientation: e.target.elements['gender_orientation'].value,
        city: e.target.elements['city'].value,
        country: e.target.elements['country'].value,
        date_of_birth_day: e.target.elements['date_of_birth_day'].value,
        date_of_birth_month: e.target.elements['date_of_birth_month'].value,
        date_of_birth_year: e.target.elements['date_of_birth_year'].value      
      };

      // console.log(newUser);
      this._registrationService.signup(newUser)
        .then( (response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });   
  }
}