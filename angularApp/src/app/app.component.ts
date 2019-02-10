import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-articles></app-articles>
    </div>
    `
})
export class AppComponent {
  pageTitle = 'Source Name';
}
