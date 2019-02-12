import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="form-group" id="Log">
      <p class="login-label">User login</p>
      <button type="submit" class="btn btn-outline-secondary">Log out</button>
    </div>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    <footer class="page-footer font-small blue">
      <div class="footer-copyright text-center py-3">
        ©Footer Powered by NewsAPI
      </div>
    </footer>
    `
})
export class AppComponent {
  pageTitle = 'Source Name';
}
