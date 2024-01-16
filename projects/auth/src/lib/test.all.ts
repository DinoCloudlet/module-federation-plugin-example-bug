import { Component, Injectable, NgModule } from '@angular/core';

@Component({
  selector: 'ex-test',
  template: '<p>component-test works!</p>',
  styles: [],
})
export class ComponentTestComponent {
  public constructor(private componentTestService: ComponentTestService) {}
}

@NgModule({
  declarations: [ComponentTestComponent],
  imports: [],
  exports: [ComponentTestComponent],
})
export class ComponentTestModule {}

@Injectable({
  providedIn: 'root',
})
export class ComponentTestService {
  public constructor() {
    // Is initialized twice
    console.log('ComponentTestService');
  }
}
