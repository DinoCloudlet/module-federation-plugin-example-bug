import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService, ComponentTestModule, ComponentTestService } from '@demo/auth';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
    ComponentTestModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
  auth = inject(AuthService);

  constructor(public test: ComponentTestService) {
    this.auth.userName = 'Jane Doe';
  }
}

